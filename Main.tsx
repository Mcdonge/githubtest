import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">Welcome to Technology Students Association</h1>
        <p className="text-xl text-brown-600">Moi University School of Engineering</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="TSA Event"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-brown-800 mb-4">Empowering Future Engineers</h2>
          <p className="text-brown-700 mb-4">
            TSA is dedicated to fostering innovation, leadership, and professional growth among engineering students at
            Moi University.
          </p>
          <Link
            href="/about"
            className="bg-brown-600 text-white py-2 px-4 rounded hover:bg-brown-700 transition duration-300 self-start"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-brown-800 mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-brown-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-brown-800 mb-2">Event {i}</h3>
              <p className="text-brown-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="/events" className="text-brown-600 hover:text-brown-800">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

