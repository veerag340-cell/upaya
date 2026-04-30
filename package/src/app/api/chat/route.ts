import { NextResponse } from "next/server"
import { Resend } from "resend"

type Lead = {
  name?: string
  email?: string
  phone?: string
}

export async function POST(req: Request){

  const { message, step, lead }: {
    message: string
    step: number
    lead: Lead
  } = await req.json()

  let reply = ""
  let nextStep = step
  let updatedLead: Lead = { ...lead }

  // STEP 1 – NAME
  if(step === 1){
    if(!message.trim()){
      reply = "Please enter a valid name 🙂"
    } else {
      updatedLead.name = message.trim()
      reply = `Nice to meet you, ${updatedLead.name} 😊\nCan I have your email address?`
      nextStep = 2
    }
  }

  // STEP 2 – EMAIL
  else if(step === 2){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(message)){
      reply = "That doesn’t look like a valid email 😅\nPlease enter a valid email (example: name@gmail.com)"
    } else {
      updatedLead.email = message.trim()

      // ✅ FIXED LINE (BACKTICKS ONLY)
      reply = `Perfect 👍\n${updatedLead.name}, can you share your mobile number?`

      nextStep = 3
    }
  }

  // STEP 3 – PHONE
  else if(step === 3){

    const cleanedPhone = message.replace(/\D/g, "")

    if(cleanedPhone.length !== 10){
      reply = `${updatedLead.name}, phone number must be exactly 10 digits 🙂`
    } 
    else {
      updatedLead.phone = cleanedPhone

      try {
        const resend = process.env.RESEND_API_KEY
          ? new Resend(process.env.RESEND_API_KEY)
          : null

        if(resend){
          await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "contact@upayaind.com",
            subject: "🚀 New Inquiry from UpayaInd Website",
            html: `
              <strong>Name:</strong> ${updatedLead.name}<br/>
              <strong>Email:</strong> ${updatedLead.email}<br/>
              <strong>Phone:</strong> ${updatedLead.phone}
            `
          })
        }

      } catch (error) {
        console.error("Email send error:", error)
      }

      reply = `Thank you ${updatedLead.name}! 🚀\nOur team will contact you shortly.`
      nextStep = 1
      updatedLead = {}
    }
  }

  return NextResponse.json({
    reply,
    step: nextStep,
    lead: updatedLead
  })
}