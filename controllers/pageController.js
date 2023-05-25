require("dotenv").config();
const fetch = require("node-fetch");

const nodemailer = require("nodemailer");
const Form01 = require("../models/Form01");
const Form02 = require("../models/Form02");

const { EMAIL_ADDRESS, EMAIL_PASSWORD, FLW_SECRET_KEY } = process.env;

const renderIndex = (req, res) => {
    res.render("index");
};

const renderRegister = (req, res) => {
    res.render("register");
};

const handleForm01Submission = async (req, res) => {
    const form = new Form01(req.body);
    try {
      // Save data to database
      const result = await form.save();
        
        // Send data to email
        // Email transport config
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_ADDRESS,
                pass: EMAIL_PASSWORD
            }
        });

        // Email message config
        const mailOptions = {
            from: EMAIL_ADDRESS,
            to: "abdoulanzizally@outlook.com, kikomeko@hotmail.com",
            subject: "Business Match Maker — Form (For Foreign Businesses)",
            html: `
              <h2>Collected Data — For Foreign Business</h2>
              <table>
                <tr>
                  <td><strong>Business name:</strong></td>
                  <td>${req.body.businessName}</td>
                </tr>
                <tr>
                  <td><strong>Business nature:</strong></td>
                  <td>${req.body.businessNature}</td>
                </tr>
                <tr>
                  <td><strong>Contact person:</strong></td>
                  <td>${req.body.contactPerson}</td>
                </tr>
                <tr>
                  <td><strong>Website:</strong></td>
                  <td>${req.body.website}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>${req.body.email}</td>
                </tr>
                <tr>
                  <td><strong>Phone number:</strong></td>
                  <td>${req.body.phoneNumber}</td>
                </tr>
              </table>
            `
        }

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log("Error..", error);
                res.send("Some error occurred!");
            }else{
                console.log("Success..");
                res.send("Success!");
            }
        });
        res.status(201).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
};

const handleForm02Submission = async (req, res) => {
  const form = new Form02(req.body);
  try {
      // Save data to database
      const result = await form.save();
      
      // Send data to email
      // Email transport config
      const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: EMAIL_ADDRESS,
              pass: EMAIL_PASSWORD
          }
      });

      // Email message config
      const mailOptions = {
          from: EMAIL_ADDRESS,
          to: "abdoulanzizally@outlook.com, kikomeko@hotmail.com",
          subject: "Business Match Maker — Form (For Ugandan Businesses)",
          html: `
            <h2>Collected Data — For Ugandan Business</h2>
            <table>
              <tr>
                <td><strong>Company name:</strong></td>
                <td>${req.body.companyName}</td>
              </tr>
              <tr>
                <td><strong>Website:</strong></td>
                <td>${req.body.companyWebsite}</td>
              </tr>
              <tr>
                <td><strong>Business sector:</strong></td>
                <td>${req.body.businessSector}</td>
              </tr>
              <tr>
                <td><strong>Specific product:</strong></td>
                <td>${req.body.specificProduct}</td>
              </tr>
              <tr>
                <td><strong>Contact person's name:</strong></td>
                <td>${req.body.contactPersonName}</td>
              </tr>
              <tr>
                <td><strong>Contact person's phone:</strong></td>
                <td>${req.body.contactPersonPhone}</td>
              </tr>
              <tr>
                <td><strong>Contact person's email:</strong></td>
                <td>${req.body.contactPersonEmail}</td>
              </tr>
              <tr>
                <td><strong>Period of operation:</strong></td>
                <td>${req.body.periodOfOperation}</td>
              </tr>
              <tr>
                <td><strong>Agree to share data:</strong></td>
                <td>${req.body.dataShareConsent ? "Yes" : "No"}</td>
              </tr>
            </table>
          `
      }

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
          if(error){
              console.log("Error..", error);
              res.send("Some error occurred!");
          }else{
              console.log("Success..");
              res.send("Success!");
          }
      });
      res.status(201).send(result);
  } catch (error) {
      res.sendStatus(500);
  }
};

const handleCheckout = async (req, res) => {
  // Flutterwave
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${FLW_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tx_ref: "rzk-ntc0120",
        amount: "50000", //Test does not allow more than 50
        currency: "UGX",
        redirect_url: `${req.protocol}://${req.get("host")}/register`,
        meta: {
          consumer_id: 1,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email:  `${req.body.contactPersonEmail}`,
          phonenumber: `${req.body.contactPersonPhone}`,
          name:  `${req.body.contactPersonName}`,
        },
        customizations: {
          title: "Uganda for US Businesses",
          logo: `${req.protocol}://${req.get("host")}/assets/svg/favicon.ico`,
        },
      }),
    };
    const response = await fetch("https://api.flutterwave.com/v3/payments", options);
    const json = await response.json();
    if (json.status === "success") {
      res.status(201).send({ redirect_url: json.data.link });
    }
    // TODO: Handle else case
  } catch (error) {
    console.log(error.code);
    console.log(error.response.body);
  }
};

module.exports = { renderIndex, renderRegister, handleForm01Submission, handleForm02Submission, handleCheckout };
