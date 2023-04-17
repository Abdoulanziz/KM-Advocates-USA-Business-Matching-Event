const Form = require("../models/Form");

const renderIndex = (req, res) => {
    res.render("index");
};

const renderHome = (req, res) => {
    res.render("home");
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

module.exports = { renderIndex, renderHome, handleFormSubmission };
