const nodemailer = require("nodemailer");
module.exports.sendEmail = (receiver, code, name, id ) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: "securesally@gmail.com",
        user: "rakibul4210@gmail.com",
        pass: "hodbryzkrewnhoff",
      },
    });

    const mail_config = {
      from: "rakibul4210@gmail.com",
      to: receiver,
      subject: "Verification Code from MIISTICO",
      text: `Hey ${name},
      Vist This link to verify your account:
      http://localhost:3004/verify/${code+'&'+id}
      Best Regards,
      MIISTICO`,
    };

    transporter.sendMail(mail_config, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occured!" });
      }
      return resolve({ message: "Email has been sent successfully!" });
    });
  });
};
