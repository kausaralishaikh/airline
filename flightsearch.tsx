"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/ui/date-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const popularDestinations = ["New York", "London", "Tokyo", "Paris", "Dubai", "Sydney", "Rome", "Bangkok"]

export default function FlightSearchForm() {
  const router = useRouter()
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!from || !to || !departureDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    if (from === to) {
      toast({
        title: "Invalid Selection",
        description: "Departure and arrival cities cannot be the same.",
        variant: "destructive",
      })
      return
    }
    const searchParams = new URLSearchParams({
      from,
      to,
      departureDate: departureDate.toISOString(),
      ...(returnDate && { returnDate: returnDate.toISOString() }),
    })
    router.push(`/flights?${searchParams.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-cloud p-6 rounded-lg shadow-md">
      <div>
        <Label htmlFor="from">From</Label>
        <Select onValueChange={setFrom}>
          <SelectTrigger>
            <SelectValue placeholder="Select departure city" />
          </SelectTrigger>
          <SelectContent>
            {popularDestinations.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="to">To</Label>
        <Select onValueChange={setTo}>
          <SelectTrigger>
            <SelectValue placeholder="Select arrival city" />
          </SelectTrigger>
          <SelectContent>
            {popularDestinations.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Departure Date</Label>
        <DatePicker date={departureDate} setDate={setDepartureDate} />
      </div>
      <div>
        <Label>Return Date (Optional)</Label>
        <DatePicker date={returnDate} setDate={setReturnDate} />
      </div>
      <Button type="submit" className="w-full bg-sky hover:bg-sky/90">
        Search Flights
      </Button>
    </form>
  )
}

