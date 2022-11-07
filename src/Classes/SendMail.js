
// async..await is not allowed in global scope, must use a wrapper
export async function main(textMail){
    const nodemailer = require("nodemailer");

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "good.anat@yandex.ru", // generated ethereal user
            pass: "2003004tolik" // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'good.anat@yandex.ru', // sender address
        to: "good.anat@yandex.ru", // list of receivers
        subject: "Hello ✔", // Subject line
        text: textMail, // plain text body
        //html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);

}