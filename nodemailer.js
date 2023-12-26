const nodemailer = require('nodemailer');

const html = `
    <h1>Hello World</h1>
    <p>Isn't NodeMailer Good</p>
`;

async function main() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 465,
        secure: true,
        auth: {
            user: 'guptaharshit1816@gmail.com',
            pass: 'udxq vqpt wbcq vdds'
        }
    });

    const info = await transporter.sendMail({
        from: 'Harshit Gupta <guptaharshit1816@gmail.com',
        to: 'harshitgupta6942@gmail.com',
        subject: 'Prakriti is cutiepie',
        html: html,
        
    })

    console.log("message sent: " + info.messageId);
}

main()
 .catch(e => console.log(e));


// const schedule = require("node-schedule");

// const someDate = new Date('2023-12-23T19:30:00.000+5:30');
// schedule.scheduleJob(someDate, () => {
//     console.log('Job ran @', new Date().toString());
// });