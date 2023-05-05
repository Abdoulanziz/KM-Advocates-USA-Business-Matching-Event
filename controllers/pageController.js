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
            <p>Company name: ${req.body.companyName}</p>
            <p>Website: ${req.body.companyWebsite}</p>
            <p>Business sector: ${req.body.businessSector}</p>
            <p>Specific product: ${req.body.specificProduct}</p>
            <p>Contact person's name: ${req.body.contactPersonName}</p>
            <p>Contact person's Phone: ${req.body.contactPersonPhone}</p>
            <p>Contact person's Email: ${req.body.contactPersonEmail}</p>
            <p>Period of operation: ${req.body.periodOfOperation}</p>
            <p>Agree to share data: ${req.body.dataShareConsent ? "Yes" : "No"}</p>
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
