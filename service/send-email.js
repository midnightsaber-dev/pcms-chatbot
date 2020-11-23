const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = ({ email, code }) => {
  const msg = {
    to: email, // Change to your recipient
    from: "swteam.mpss@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text:
      "Sending with SendGrid is Fun and easy to do anywhere, even with Node.js",
    html: `<div><p><strong>Your password is successfully resetted. Please use the following the password to login.</strong></p><span style="padding: 5px; margin: 0 auto; border-style: solid;">${code}</span></div>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      let text = Date.now();
      return text;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMail };
