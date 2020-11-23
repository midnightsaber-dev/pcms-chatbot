const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = ({ email, password }) => {
  console.log(`Here is the password in mail ${password}`);
  const msg = {
    to: email, // Change to your recipient
    from: "swteam.mpss@gmail.com", // Change to your verified sender
    subject: "Password Reset Alert",
    text: "Your password is successfully resetted.",
    html: `<div><p><span><strong>${password}</strong></span></p></div>`,
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
