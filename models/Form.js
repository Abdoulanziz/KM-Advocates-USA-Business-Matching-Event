const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    companyName: {
      type: String,
      required: [true, "company name"],
    },
    businessSector: {
      type: String,
      required: [true, "business sector"],
    },
    specificProduct: {
        type: String,
        required: [true, "specific product"],
      },
    periodOfOperation: {
      type: String,
      required: [true, "period of operation"],
    },
    dataShareConsent: {
        type: String,
        required: [true, "data share consent"],
    },
  },
  { timestamps: true }
);

const formModel = mongoose.model("Form", formSchema);

module.exports = formModel;
