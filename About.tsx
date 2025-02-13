export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-brown-800 mb-8 text-center">About TSA</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Our Vision</h2>
        <p className="text-brown-600">
          To be the leading student organization in fostering innovation, leadership, and professional excellence among
          engineering students at Moi University and beyond.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Our Mission</h2>
        <p className="text-brown-600">
          To empower engineering students with the knowledge, skills, and networks necessary to thrive in their academic
          pursuits and future careers, while promoting technological advancements and sustainable solutions for societal
          challenges.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Core Values</h2>
        <ul className="list-disc list-inside text-brown-600">
          <li>Innovation and Creativity</li>
          <li>Integrity and Professionalism</li>
          <li>Collaboration and Teamwork</li>
          <li>Continuous Learning and Growth</li>
          <li>Social Responsibility and Sustainability</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Our History</h2>
        <p className="text-brown-600 mb-4">
          The Technology Students Association (TSA) at Moi University was founded in [year] with the goal of bridging
          the gap between academic learning and practical industry experience. Since its inception, TSA has grown to
          become a vital part of the School of Engineering, organizing numerous events, workshops, and initiatives that
          have significantly impacted the lives of engineering students.
        </p>
        <p className="text-brown-600">
          Today, TSA continues to evolve and adapt to the changing landscape of technology and engineering, always
          striving to provide the best opportunities and resources for its members.
        </p>
      </section>
    </div>
  )
}

