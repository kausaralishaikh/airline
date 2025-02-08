import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TowardsSky</h3>
            <p>Experience luxury and comfort in the skies with TowardsSky Airlines.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/flights" className="hover:underline">
                  Book a Flight
                </Link>
              </li>
              <li>
                <Link href="/check-in" className="hover:underline">
                  Check-in
                </Link>
              </li>
              <li>
                <Link href="/baggage" className="hover:underline">
                  Baggage Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">
                Facebook
              </a>
              <a href="#" className="hover:text-accent">
                Twitter
              </a>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p>&copy; {new Date().getFullYear()} TowardsSky Airlines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

