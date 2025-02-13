import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-brown-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TSA Moi
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-brown-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-brown-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-brown-200">
              Events
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brown-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

