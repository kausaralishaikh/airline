import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Flight {
  id: string
  airline: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
}

async function getFlights(from: string, to: string, departureDate: string): Promise<Flight[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      airline: "TowardsSky Airlines",
      departureTime: "08:00",
      arrivalTime: "12:00",
      duration: "4h",
      price: 299,
    },
    {
      id: "2",
      airline: "TowardsSky Airlines",
      departureTime: "12:00",
      arrivalTime: "16:00",
      duration: "4h",
      price: 349,
    },
    {
      id: "3",
      airline: "TowardsSky Airlines",
      departureTime: "16:00",
      arrivalTime: "20:00",
      duration: "4h",
      price: 399,
    },
  ]
}

export default async function FlightResults({
  from,
  to,
  departureDate,
  returnDate,
}: { from: string; to: string; departureDate: string; returnDate?: string }) {
  const flights = await getFlights(from, to, departureDate)

  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <Card key={flight.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>{flight.airline}</CardTitle>
            <CardDescription>
              {from} to {to}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p>Departure: {flight.departureTime}</p>
                <p>Arrival: {flight.arrivalTime}</p>
                <p>Duration: {flight.duration}</p>
              </div>
              <div>
                <p className="text-2xl font-bold">${flight.price}</p>
                <Button className="mt-2 bg-sky hover:bg-sky/90">Select</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

