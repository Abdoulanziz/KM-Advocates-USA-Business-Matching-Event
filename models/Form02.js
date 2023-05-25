const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    companyName: {
      type: String,
      required: [true, "company name"],
    },
    companyWebsite: {
      type: String,
      required: [false, "company website"],
    },
    businessSector: {
      type: String,
      required: [true, "business sector"],
    },
    specificProduct: {
        type: String,
        required: [true, "specific product"],
    },
    contactPersonName: {
      type: String,
      required: [true, "contact person name"],
    },
    contactPersonPhone: {
      type: String,
      required: [true, "contact person phone"],
    },
    contactPersonEmail: {
      type: String,
      required: [true, "contact person email"],
    },
    periodOfOperation: {
      type: String,
      required: [true, "period of operation"],
    },
    dataShareConsent: {
        type: String,
        required: [false, "data share consent"],
    },
  },
  { timestamps: true, collection: "form02s" }
);

const formModel = mongoose.model("Form02", formSchema);

module.exports = formModel;
