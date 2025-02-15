"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { text: input, isUser: true }])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `I'm sorry, I don't have a real answer for "${input}". I'm a demo assistant.`, isUser: false },
      ])
    }, 1000)
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 bg-sky hover:bg-sky/90 rounded-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Virtual Assistant"}
      </Button>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 h-96 flex flex-col">
          <CardHeader>
            <CardTitle>Virtual Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <ScrollArea className="flex-grow mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${message.isUser ? "bg-sky text-white" : "bg-gray-200"}`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <div className="flex">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-grow mr-2"
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default VirtualAssistant

