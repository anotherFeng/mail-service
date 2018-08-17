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
router.route('/mails/:id')
  .get(singleMailHandler)

module.exports = router;