const router = require("express").Router();
const { Home, About, Contact, Document } = require("../models/portfolioModel");
const User = require("../models/userModel");

// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const home = await Home.find();
    const abouts = await About.find();
    const contacts = await Contact.find();
    const documents = await document.find();

    res.status(200).send({
      home: home[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      documents: documents,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

const getPortfolip = async (req, res) => {
  const token = req.header.Authorization.token;

  token.verify;
  try {
    // const home = await ;
    // const abouts = await About.find();
    //const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const documents = await Document.find();

    const [home, abouts] = await Promise.allSettled([
      Home.find(),
      //Projects.find(),
    ]);

    res.status(200).send({
      home: home[0],
      about: abouts[0],
      //projects: projects,
      contact: contacts[0],
      //experiences: experiences,
      documents: documents,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

router.get("/admin/get-portfolio-data", getPortfolip);

// update home
router.post("/update-home", async (req, res) => {
  try {
    const home = await Home.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true,
    });
    res.status(200).send({
      data: home,
      success: true,
      message: "Home updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "Abouts updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});





// add Document
router.post("/add-document", async (req, res) => {
  try {
    const document = new document(req.body);
    await document.save();
    res.status(200).send({
      data: document,
      success: true,
      message: "Document added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update Document
router.post("/update-document", async (req, res) => {
  try {
    const document = await Document.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: document,
      success: true,
      message: "Document updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete Document

router.post("/delete-document", async (req, res) => {
  try {
    const document = await Document.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: document,
      success: true,
      message: "Document deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
