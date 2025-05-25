import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nalinka Heshan</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Software Engineer</p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Me
              </a>
              <a href="#projects" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600">
              <p className="mb-4">
                Results-driven Senior Software Engineer with 5+ years of experience building scalable backend systems and cloud-native applications in fintech, healthcare, and IoT domains. Proven track record in leading critical modules, optimizing performance, and delivering high-impact solutions using Java, Node.js, Angular, and AWS.
              </p>
              <p>
                Passionate about innovation, cross-functional collaboration, and driving global digital transformation. Currently based in Colombo, Sri Lanka, I specialize in developing robust and efficient solutions that make a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/project1-placeholder.jpg"
                    alt="AI-Powered LEGO Sorting System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI-Powered LEGO Sorting System</h3>
                  <p className="text-gray-600 mb-4">
                    Engineered an AI-driven LEGO sorting system using computer vision and convolutional neural networks (CNNs).
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">OpenCV</span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/project2-placeholder.jpg"
                    alt="Electronic Toll Collection System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Electronic Toll Collection System</h3>
                  <p className="text-gray-600 mb-4">
                    Designed and developed a Wi-Fi-based automatic toll collection system enabling users to pay toll fees via a mobile application at vehicle speeds exceeding 100 km/h.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Android</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Symfony</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">IoT</span>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/project3-placeholder.jpg"
                    alt="Cloud Solutions Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cloud Solutions Development</h3>
                  <p className="text-gray-600 mb-4">
                    Led core module development and optimization of billing and inventory workflows, achieving 99.9% system uptime.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Angular</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Kafka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                'Node.js', 'Java', 'JavaScript', 'Angular',
                'Spring Boot', 'PostgreSQL', 'MongoDB', 'Kafka',
                'Docker', 'Jenkins', 'AWS', 'Kubernetes',
                'RESTful APIs', 'Git', 'Agile', 'System Design'
              ].map((skill) => (
                <div key={skill} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="font-semibold text-lg">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blogs" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/project1-placeholder.jpg"
                    alt="Building Scalable Backend Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Building Scalable Backend Systems with Node.js</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about the best practices and patterns for building scalable backend systems using Node.js, including microservices architecture and performance optimization.
                  </p>
                  <Link href="/blogs/building-scalable-backend-systems" className="text-blue-600 hover:text-blue-800">
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/project2-placeholder.jpg"
                    alt="Cloud-Native Applications"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Cloud-Native Applications with AWS</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how to migrate traditional applications to cloud-native architecture using AWS services and best practices for modern cloud applications.
                  </p>
                  <Link href="/blogs/cloud-native-applications" className="text-blue-600 hover:text-blue-800">
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/project3-placeholder.jpg"
                    alt="IoT Solutions in Healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">IoT Solutions in Healthcare</h3>
                  <p className="text-gray-600 mb-4">
                    Explore the development of IoT solutions for healthcare, focusing on real-time monitoring and data processing challenges.
                  </p>
                  <Link href="/blogs/iot-healthcare-solutions" className="text-blue-600 hover:text-blue-800">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+94702164989" className="text-gray-600 hover:text-gray-900">+94 70 216 4989</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:nalinkaheshann@gmail.com" className="text-gray-600 hover:text-gray-900">nalinkaheshann@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <a href="https://linkedin.com/in/nalinka-heshan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">LinkedIn Profile</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <a href="https://github.com/nalinka1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub Profile</a>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
