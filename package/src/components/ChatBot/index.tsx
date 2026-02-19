'use client'
import { useState } from "react"

export default function ChatBot() {

  const [open,setOpen] = useState(false)
  const [input,setInput] = useState("")
  const [messages,setMessages] = useState([
    {role:"bot",text:"Hi 👋 Welcome to UPAYA Career Assistant. How can I help you today?"}
  ])

  const sendMessage = async () => {
    if(!input.trim()) return

    const userMsg = {role:"user",text:input}
    setMessages(prev=>[...prev,userMsg])
    setInput("")

    const res = await fetch("/api/chat",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body: JSON.stringify({message:input})
    })

    const data = await res.json()

    setMessages(prev=>[
      ...prev,
      {role:"bot",text:data.reply}
    ])

    // if(data.whatsapp){
    //   window.open(data.whatsapp,"_blank")
    // }
  }

  return(
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-8 z-50">

      {/* Floating AI Agent Button */}
      {!open && (
        <button
          onClick={()=>setOpen(true)}
          className="
            flex items-center justify-center w-14 h-14 rounded-full
            bg-gradient-to-r from-[#0f2e4a] to-[#1f6feb]
            shadow-xl hover:scale-110 transition
          "
        >
          🤖
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="
          w-[92vw] sm:w-[360px]
          h-[70vh] sm:h-[480px]
          rounded-2xl shadow-2xl bg-white flex flex-col overflow-hidden
          border border-gray-200
        ">

          {/* Header */}
          <div className="bg-[#0f2e4a] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-medium text-sm sm:text-base">
              UPAYA Career Assistant
            </span>
            <button onClick={()=>setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-gray-50">
            {messages.map((m,i)=>(
              <div key={i}
                className={`p-3 rounded-xl text-sm max-w-[80%] ${
                  m.role==="user"
                  ? "ml-auto bg-[#1f6feb] text-white"
                  : "bg-white border shadow-sm"
                }`}>
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 sm:p-3 border-t flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Ask about jobs, pricing, support..."
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
