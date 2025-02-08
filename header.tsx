import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TowardsSky
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/flights" className="hover:underline">
            Flights
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

