import FlightSearchForm from "./components/flight-search-form"
import FeaturedFlights from "./components/featured-flights"
import VirtualAssistant from "./components/virtual-assistant"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky">TowardsSky Airlines</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Find Your Perfect Flight</h2>
          <FlightSearchForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured Flights</h2>
          <FeaturedFlights />
        </div>
      </div>
      <VirtualAssistant />
    </div>
  )
}

