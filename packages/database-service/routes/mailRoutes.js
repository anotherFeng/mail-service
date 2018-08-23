const router = require("express").Router();
const { Mail } = require("../models/Mail");

const pingHandler = (req, res) => {
  res.send("healthy");
};

const mailHandler = async (req, res) => {
  let mails;
  let error;
  try{
    mails = await Mail.find();
  } catch (err) {
    error = err;
  };

  res.send({
    message: "Got response from db",
    service: "Database Service",
    status: 200,
    payload: mails || error
  });
};

const postMailHandler = async (req, res) => {
  const { subject, receiver, content } = req.body;
  if(!subject || !receiver || !content) {
    res.status(400).send({
      message: "missing a require field",
      service: "Database Service",
      status: 400,
      payload: null
    })
  }

  const newMail = new Mail({
    subject,
    receiver,
    content
  });

  try {
    mail = await newMail.save();
  } catch (err) {
    error = err;
  };

  res.send({
    message: "Posted mail successed",
    service: "Database Service",
    status: 200,
    payload: mail || err
  })
}

const singleMailHandler = async (req, res) => {
  const {id} = req.params;
  console.log(id)
  let mail;
  let error;
  try {
    mail = await Mail.findById(id)
  } catch (err) {
    error = err;
  };

  res.send({
    message: "Got response from db",
    service: "Database Service",
    status: 200,
    payload: mail || error
  });
}

router.route('/')
  .get(pingHandler)
router.route('/mails')
  .get(mailHandler)
  .post(postMailHandler)
router.route('/mails/:id')
  .get(singleMailHandler)

module.exports = router;