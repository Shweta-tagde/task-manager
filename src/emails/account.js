const sgMail = require("@sendgrid/mail")

//  const sendgridAPIKey= "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"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// console.log(sendgridAPIKey)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:"shweta6296@gmail.com",
        subject:"Thanks for joining in",
        text:`welcome to app,${name},let me know how you get along with the app`
    })

}

const sendCancelEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:"shweta6296@gmail.com",
        subject:"sorry to see you go",
        text:`goodbye,${name},hope to see you back`
    })

}
module.exports= {
    sendWelcomeEmail,
    sendCancelEmail
    }