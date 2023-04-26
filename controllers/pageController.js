const Form = require("../models/Form");

const renderIndex = (req, res) => {
    res.render("index");
};

const renderRegister = (req, res) => {
    res.render("register");
};

const handleFormSubmission = async (req, res) => {
    const form = new Form(req.body);
    try {
        const result = await form.save();
        res.status(201).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
};

module.exports = { renderIndex, renderRegister, handleFormSubmission };
