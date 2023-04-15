const renderIndex = (req, res) => {
    res.render("index");
};

const handleFormSubmission = (req, res) => {
    console.log("success", req.body);
    res.status(201).send(req.body);
};

module.exports = { renderIndex, handleFormSubmission };
