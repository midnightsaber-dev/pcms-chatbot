const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = ({ email }) => {
  const msg = {
    to: "salaichitoolatt.mpss@gmail.com", // Change to your recipient
    from: "swteam.mpss@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      console.log(email);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMail };
