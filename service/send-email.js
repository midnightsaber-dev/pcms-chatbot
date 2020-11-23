const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (email, password) => {
  const msg = {
    to: email, // Change to your recipient
    from: { email: "swteam.mpss@gmail.com", name: "MPSS Technical Team" }, // Change to your verified sender
    subject: "Password Reset Alert",
    text: "Your password is successfully resetted.",
    html: `<div>
    <p>Dear User,</p>
    <p>Your password is successfully resetted. Please use the following password to login to our <a href="https://salaichitoolatt.online/admin" target="_blank" style="text-decoration:none;">portal</a>.</p>
    </div>
    <div style="padding:40px;margin:0 auto;">
    <h1 align="center">${password}</h1>
    </div>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      let text = Date.now();
      console.log("Timestamp: ", text);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMail };
