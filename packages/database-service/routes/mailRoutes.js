const router = require("express").Router();
const { Mail } = require("../models/Mail");

router.get('/', async (_, res) => {
  const newMail = new Mail({
    subject: "Hello",
    receiver: "test@test.com",
    content: "hello content"
  });
  await newMail.save();
  res.send("new mail saved!");
})

router.get('/test', async (req, res) => {
  const mails = await Mail.find();
  res.send(mails);
})

module.exports = router;