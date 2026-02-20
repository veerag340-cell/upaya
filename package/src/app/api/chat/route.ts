import { NextResponse } from "next/server"
import { Resend } from "resend"

// ===============================
// ⚠️ NOTE
// Do NOT create Resend instance
// outside the function.
// ===============================

let step = 0
let lead: any = {}

export async function POST(req: Request) {

  // ✅ Create Resend ONLY inside request
  const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null

  const { message } = await req.json()

  let reply = "Tell me more 🙂"

  // ===============================
  // CHAT FLOW
  // ===============================

  if (step === 0) {
    reply = "Sure 👍 Please tell me your Name"
    step = 1
  }

  else if (step === 1) {
    lead.name = message
    reply = "Great! Your Email?"
    step = 2
  }

  else if (step === 2) {
    lead.email = message
    reply = "Thanks! Your Phone number?"
    step = 3
  }

  else if (step === 3) {
    lead.phone = message

    try {

      console.log("🚀 NEW LEAD RECEIVED:", lead)

      // ===============================
      // ✅ SAFE RESEND CHECK
      // ===============================
      if (!resend) {
        console.error("❌ RESEND_API_KEY missing")
        return NextResponse.json(
          { reply: "Server email config missing." },
          { status: 500 }
        )
      }

      // ===============================
      // 📧 SEND EMAIL
      // ===============================
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

      console.log("✅ Email sent successfully")

    } catch (error) {
      console.error("❌ SEND ERROR:", error)
    }

    // RESET CHAT STATE
    step = 0
    lead = {}

    return NextResponse.json({
      reply: "✅ Thank you! Our team will contact you shortly."
    })
  }

  return NextResponse.json({ reply })
}