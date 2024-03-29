import nodemailer from "nodemailer";

//desc: send Mail
//route: post /api/email/send
//access: public

export const sendMail = async(req, res)=>{
  try {
    const {
      name,
      phone,
      email, 
      message, 
      total, 
      service, 
      platforms, 
      features,
      customFeatures,
      users, 
      category
    } = req.body;

    // let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    })

    if (total) {
      if (category) {
        await transporter.sendMail({
          from: "Dayve Software",
          to: 'dayvynomern2021@gmail.com',
          subject: 'New Software Estimate',
          html: 
          `
            <p>Sender Name:${name}</p>
            <p>Sender mobile: ${phone}</p>
            <p>Sender Email: ${email}</p>
            <p>Message: ${message}</p>
            <p>Categogy: ${category}</p>
            <p>Total: &#8358;${total*610}</p>
        ` 
        })
        
        await transporter.sendMail({
          from: "Dayve Software",
          to: email,
          subject: 'Dayve Software Received Your Message',
          html: 
          `
            <p>
              Thank you for contacting Dayve Softwares, your estimate has been received,
              we will get back to you shortly
            </p>
          `
        })
      } else {
        await transporter.sendMail({
          from: "Dayve Software",
          to: 'dayvynomern2021@gmail.com',
          subject: 'New Software Estimate',
          html: 
          `
            <p>Sender Name:${name}</p>
            <p>Sender mobile: ${phone}</p>
            <p>Sender Email: ${email}</p>
            <p>Message: ${message}</p>
            <p>Service: ${service}</p>
            <p>Platforms: ${platforms}</p>
            <p>Features: ${features}</p>
            <p>Custom Features: ${customFeatures}</p>
            <p>Number of Users: ${users}</p>
            <p>Total: &#8358;${(total*610).toLocaleString()}</p>
          ` 
        })

        //A more customized HTML mail is desired here.
        await transporter.sendMail({
          from: "Dayve Software",
          to: email,
          subject: 'Dayve Software Received Your Message',
          html: 
          `
            <p>
              Thank you for contacting Dayve Softwares, your estimate has been received,
              we will get back to you as soon as possible
            </p>
          `
        })
      }
    } else {
      let info = await transporter.sendMail({
        from: "Dayve Software",
        to: 'dayvynomern2021@gmail.com',
        subject: 'Dayve Software Services Request',
        html: 
        `
          <p>Sender Name:${name}</p>
          <p>Sender mobile: ${phone}</p>
          <p>Sender Email: ${email}</p>
          <p>Message: ${message}</p>
       `
      })
  
      let customer = await transporter.sendMail({
        from: "Dayve Software",
        to: email,
        subject: 'Dayve Software Received Your Message',
        html: 
        `
          <p>Thank you for contacting Dayve Softwares</p>
       `
      })   
    }


    return res.json(`Message sent`)
    // res.json(`Mail Successfully sent==>${info.messageId}`)

  } catch (error) {
    const e = process.env.NODE_ENV==='production'? null: error;
    res.status(404).json({
      message: `Server Error===>${e}`
    })
  }
}