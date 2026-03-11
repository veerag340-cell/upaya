'use client'
import { useState, useEffect, useRef } from "react"

type Message = {
  role: "user" | "bot"
  text: string
}

type Lead = {
  name?: string
  email?: string
  phone?: string
}

export default function ChatBot() {

  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi 👋 Welcome to UPAYA Career Assistant.\nMay I know your name?"
    }
  ])
  const [step, setStep] = useState<number>(1)
  const [lead, setLead] = useState<Lead>({})
  const [loading, setLoading] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg: Message = {
      role: "user",
      text: input
    }

    setMessages(prev => [...prev, userMsg])

    const currentInput = input
    setInput("")
    setLoading(true)

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: currentInput,
        step,
        lead
      })
    })

    const data = await res.json()

    const botMsg: Message = {
      role: "bot",
      text: data.reply
    }

    setTimeout(() => {
      setMessages(prev => [...prev, botMsg])
      setStep(data.step)
      setLead(data.lead)
      setLoading(false)
    }, 600)
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-8 z-50">

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full
          bg-gradient-to-r from-[#0f2e4a] to-[#1f6feb]
          shadow-xl hover:scale-110 transition"
        >
          🤖
        </button>
      )}

      {open && (
        <div className="w-[92vw] sm:w-[380px]
          h-[75vh] sm:h-[520px]
          rounded-2xl shadow-2xl bg-white flex flex-col overflow-hidden
          border border-gray-200">

          {/* Header */}
          <div className="bg-[#0f2e4a] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-medium">UPAYA Career Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i}
                className={`p-3 rounded-xl text-sm max-w-[80%] whitespace-pre-line ${m.role === "user"
                    ? "ml-auto bg-[#1f6feb] text-white"
                    : "bg-white border shadow-sm"
                  }`}>
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="bg-white border shadow-sm p-3 rounded-xl text-sm w-fit">
                Typing...
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-[#1f6feb] text-white px-4 rounded-lg hover:opacity-90 text-sm"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </div>
  )
}