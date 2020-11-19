const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = ({ email }) => {
  const msg = {
    to: email, // Change to your recipient
    from: "swteam.mpss@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text:
      "Sending with SendGrid is Fun and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
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
