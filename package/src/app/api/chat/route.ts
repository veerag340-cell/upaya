import { NextResponse } from "next/server"
import { Resend } from "resend"

let step = 0
let lead:any = {}

export async function POST(req: Request){

  const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null

  const { message } = await req.json()

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

      if(resend){
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
      } else {
        console.log("RESEND KEY MISSING — skipping email")
      }

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