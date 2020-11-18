var API_KEY = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN_NAME;
var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const sendMail = function (
  sender_email,
  reciever_email,
  email_subject,
  email_body
) {
  const data = {
    from: sender_email,
    to: reciever_email,
    subject: email_subject,
    text: email_body,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) console.log(error);
    else console.log(body);
  });
};

module.exports = sendMail;
