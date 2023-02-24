const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  description3: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description4: {
    type: String,
    required: true,
  },
  description5: {
    type: String,
    required: true,
  },
  pdf:{
    type: file,
    required: true,
  }
  
});

const documentsSchema = new mongoose.Schema({
  pdf: {
    type: file,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact_me: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  
});

module.exports = {
  Home: mongoose.model("home", homeSchema),
  About: mongoose.model("abouts", aboutSchema),
  Document: mongoose.model("documents", documentsSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
