require("dotenv").config();
const nodemailer = require("nodemailer");
const Form = require("../models/Form");

const { EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env;

const renderIndex = (req, res) => {
    res.render("index");
};

const renderRegister = (req, res) => {
    res.render("register");
};

const handleFormSubmission = async (req, res) => {
    const form = new Form(req.body);
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
            to: "abdoulanzizally@outlook.com",
            subject: "Business Match Maker — Form",
            html: `
              <h2>Business Match Maker — Form Submission</h2>
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

module.exports = { renderIndex, renderRegister, handleFormSubmission };
