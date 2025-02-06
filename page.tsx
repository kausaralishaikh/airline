"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BookingConfirmation() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="mb-4">
          Your booking ID is: <strong>{bookingId}</strong>
        </p>
        <p className="mb-8">Thank you for choosing TowardsSky Airlines. We look forward to welcoming you on board.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}

