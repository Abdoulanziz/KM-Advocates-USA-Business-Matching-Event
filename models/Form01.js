const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    businessName: {
      type: String,
      required: [true, "business name"],
    },
    businessNature: {
      type: String,
      required: [true, "business nature"],
    },
    contactPerson: {
      type: String,
      required: [true, "contact person"],
    },
    website: {
      type: String,
      required: [false, "website"],
    },
    email: {
      type: String,
      required: [true, "email"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phone number"],
    },
  },
  { timestamps: true, collection: "form01s" }
);

const formModel = mongoose.model("Form01", formSchema);

module.exports = formModel;
