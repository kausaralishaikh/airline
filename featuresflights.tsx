"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredFlights = [
  { from: "New York", to: "London", departureDate: "2023-07-15", returnDate: "2023-07-22", price: 599 },
  { from: "Tokyo", to: "Paris", departureDate: "2023-08-01", returnDate: "2023-08-10", price: 899 },
  { from: "Dubai", to: "Sydney", departureDate: "2023-09-05", returnDate: "2023-09-15", price: 1099 },
]

const FeaturedFlights: React.FC = () => {
  const router = useRouter()

  const handleBookNow = (flight: (typeof featuredFlights)[0]) => {
    const searchParams = new URLSearchParams({
      from: flight.from,
      to: flight.to,
      departureDate: flight.departureDate,
      returnDate: flight.returnDate,
    })
    router.push(`/flights?${searchParams.toString()}`)
  }

  return (
    <div className="space-y-4">
      {featuredFlights.map((flight, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>
              {flight.from} to {flight.to}
            </CardTitle>
            <CardDescription>TowardsSky Airlines</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Departure: {flight.departureDate}</p>
            <p>Return: {flight.returnDate}</p>
            <p className="text-2xl font-bold mt-2">Price: ${flight.price}</p>
            <Button onClick={() => handleBookNow(flight)} className="mt-4 bg-sky hover:bg-sky/90">
              Book Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeaturedFlights

