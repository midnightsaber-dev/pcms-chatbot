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
    </div><div>
    <address>
        Regards, <br>
        MPSS Technical Team <br>
        Room 606, Buidling 16 <br>
        MICT Park <br>
        Hlaing T, Yangon <br>
        Myanmar <br>
        <a href="tel:+959882551244" style="text-decoration: none">+959-882-551-244</a>
    </address>
</div>
<footer style="background-color: #2E59D9">
    <h4 align="center" style="color: white;">Powered by MPSS</h4>
</footer>`,
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

module.exports = { sendMail };
