const amqp = require('amqplib/callback_api');

const q = 'test_q';

amqp.connect('amqp://kcrkzyfp:1rGGSYMQaS6blE9PiaksGK964CbblgLJ@chimpanzee.rmq.cloudamqp.com/kcrkzyfp',
  (err, connection) => {
    if(err) throw new Error(err);

    connection.createChannel((err, ch) => {
      if(err) throw new Error(err);

      ch.assertQueue(q, { durable: true });
      ch.consume(q, (msg) => {
        //msg.content will be a buffer, we will convert it to string
        console.log('I got a message!', msg.content.toString());
      }, { noAck: true });
    })
  })