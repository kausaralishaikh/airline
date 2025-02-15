import { Suspense } from "react"
import { notFound } from "next/navigation"
import FlightResults from "../components/flight-results"
import { Skeleton } from "@/components/ui/skeleton"

export default function FlightsPage({
  searchParams,
}: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const { from, to, departureDate, returnDate } = searchParams

  if (!from || !to || !departureDate) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Flight Results</h1>
      <Suspense fallback={<FlightResultsSkeleton />}>
        <FlightResults
          from={from as string}
          to={to as string}
          departureDate={departureDate as string}
          returnDate={returnDate as string | undefined}
        />
      </Suspense>
    </div>
  )
}

function FlightResultsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  )
}

