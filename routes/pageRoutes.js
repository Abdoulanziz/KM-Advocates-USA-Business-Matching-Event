const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();

const { renderIndex, handleFormSubmission } = require("../controllers/pageController");

router
    .get("/", renderIndex)
    .post("/api/create/data", upload.none(), handleFormSubmission);

module.exports = router;