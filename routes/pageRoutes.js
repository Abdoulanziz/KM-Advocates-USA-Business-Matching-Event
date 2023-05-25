const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();

const { renderIndex, renderRegister, handleForm01Submission, handleForm02Submission, handleCheckout } = require("../controllers/pageController");

router
    .get("/", renderIndex)
    .get("/register", renderRegister)
    .post("/api/create/data-foreign", upload.none(), handleForm01Submission)
    .post("/api/create/data-local", upload.none(), handleForm02Submission)
    .post("/api/make/payment", handleCheckout);

module.exports = router;