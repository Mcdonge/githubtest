import Link from "next/link"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "October 15, 2023",
      description: "A gathering of industry experts and students to discuss the latest technological trends.",
    },
    {
      id: 2,
      title: "Engineering Career Fair",
      date: "November 5, 2023",
      description: "Connect with potential employers and explore career opportunities in various engineering fields.",
    },
    {
      id: 3,
      title: "Innovation Challenge",
      date: "December 1-3, 2023",
      description: "A 48-hour hackathon to solve real-world problems using technology and engineering principles.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-brown-800 mb-8 text-center">Upcoming Events</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-brown-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-brown-800 mb-2">{event.title}</h2>
            <p className="text-brown-600 mb-2">{event.date}</p>
            <p className="text-brown-700 mb-4">{event.description}</p>
            <Link href={`/events/${event.id}`} className="text-brown-600 hover:text-brown-800">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

