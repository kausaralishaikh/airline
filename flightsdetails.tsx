import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FlightDetailsProps {
  from: string
  to: string
  departureDate: string
  returnDate: string
  price: number
  airline: string
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ from, to, departureDate, returnDate, price, airline }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>
          {from} to {to}
        </CardTitle>
        <CardDescription>{airline}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Departure: {departureDate}</p>
        <p>Return: {returnDate}</p>
        <p className="text-2xl font-bold mt-2">Price: ${price}</p>
      </CardContent>
    </Card>
  )
}

export default FlightDetails

