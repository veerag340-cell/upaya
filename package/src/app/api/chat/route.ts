import { NextResponse } from "next/server"
import { Resend } from "resend"
import twilio from "twilio"

const resend = new Resend(process.env.RESEND_API_KEY)

const client = twilio(
  process.env.TWILIO_SID!,
  process.env.TWILIO_TOKEN!
)

let step = 0
let lead:any = {}

export async function POST(req:Request){

  const {message} = await req.json()

  let reply = "Tell me more 🙂"

  if(step===0){
    reply = "Sure 👍 Please tell me your Name"
    step=1
  }
  else if(step===1){
    lead.name = message
    reply = "Great! Your Email?"
    step=2
  }
  else if(step===2){
    lead.email = message
    reply = "Thanks! Your Phone number?"
    step=3
  }
  else if(step===3){
    lead.phone = message

    try {

      console.log("NEW LEAD RECEIVED:", lead)

      // ======================
      // 📧 SEND EMAIL
      // ======================
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "veerag340@gmail.com",
        subject: "🚀 New Inquiry from UPAYA Website",
        html: `
          Name: ${lead.name}<br/>
          Email: ${lead.email}<br/>
          Phone: ${lead.phone}
        `
      })

      // ======================
      // 💬 SEND WHATSAPP
      // ======================
      await client.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM!,
        to: process.env.TWILIO_WHATSAPP_TO!,
        body: `🚀 New UPAYA Lead

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}`
      })

    } catch (error) {
      console.error("SEND ERROR:", error)
    }

    step=0
    lead={}

    return NextResponse.json({
      reply:"✅ Thank you! Our team will contact you shortly."
    })
  }

  return NextResponse.json({reply})
}
