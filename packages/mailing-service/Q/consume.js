const amqp = require('amqplib/callback_api');
const { q: { uri }} = require('../config/config.dev');

module.exports = () => {
  const q = 'test_q';
  amqp.connect(uri, (err, connection) => {
    if(err) throw new Error(err);
    connection.createChannel((err, ch) => {
      if(err) throw new Error(err);
      ch.assertQueue(q, { durable: true });
      ch.consume(q, (msg) => {
        let mail;

        try {
          mail = JSON.parse(msg.content.toString());
        } catch (e) {
          console.log(e);
          mail = msg.content.toString();
        }
        
        console.log('Mail Received', mail);
      }, { noAck: true });
    });
  });
}


