const { mailjet: { apiPublic, apiSecret }} = require('../config');
const Mailjet = require('node-mailjet').connect(apiPublic, apiSecret);

console.log(Mailjet);

module.exports = async (mail) => {
  const request = await Mailjet.post('send').request({
    FromEmail: 'regnagleppod@gmail.com',
    FromName: 'Feng',
    Subject: mail.subject,
    'Text-part': mail.content,
    Recipients: [
      {
        Email: mail.receiver
      }
    ]
  });

  console.log(request.body)
}