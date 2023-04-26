const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();

const { renderIndex, renderRegister, handleFormSubmission } = require("../controllers/pageController");

router
    .get("/", renderIndex)
    .get("/register", renderRegister)
    .post("/api/create/data", upload.none(), handleFormSubmission);

module.exports = router;