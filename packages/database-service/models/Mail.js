
const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
  subject: String,
  receiver: String,
  content: String,
});

const Mail = mongoose.model("Mail", mailSchema);
module.exports.Mail = Mail;