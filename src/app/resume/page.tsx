import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
              <Link 
                href="/resume.pdf"
                download="nalinka-heshan-resume.pdf"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </Link>
            </div>

            {/* Professional Summary */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
              <p className="text-gray-600 mb-4">
                Results-driven Senior Software Engineer with 5+ years of experience building scalable backend systems and cloud-native applications in fintech, healthcare, and IoT domains. Proven track record in leading critical modules, optimizing performance, and delivering high-impact solutions using Java, Node.js, Angular, and AWS.
              </p>
              <p className="text-gray-600">
                Passionate about innovation, cross-functional collaboration, and driving global digital transformation.
              </p>
            </section>

            {/* Work Experience */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
              
              {/* Current Role */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                <p className="text-blue-600 mb-2">Cloud Solutions International | July 2023 – Present</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Led the core module of the product while working onsite in Saudi Arabia, resolving production issues and delivering client-focused solutions, ensuring 99.9% system uptime.</li>
                  <li>Redesigned billing and inventory workflows, reducing invoice failure rates to 0.1%.</li>
                  <li>Optimized frontend modules, reducing loading time by 40%.</li>
                  <li>Built an automation tool that improved QA testing efficiency by 50%.</li>
                  <li>Contributed to hospital product development by implementing complex features and resolving intricate issues.</li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Angular</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Kafka</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Oracle</span>
                </div>
              </div>

              {/* Previous Role */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900">Senior Software Engineer</h3>
                <p className="text-blue-600 mb-2">Qbitum Solution (Pvt) Ltd | Oct 2022 – July 2023</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Designed a scalable architecture for an AI-powered energy monitoring system, enabling real-time data ingestion and anomaly detection.</li>
                  <li>Engineered a cloud-based pipeline on AWS, reducing data processing time by 25%.</li>
                  <li>Migrated a bank product to IBM servers using Red Hat OpenShift, implementing monitoring systems and load testing.</li>
                  <li>Upgraded and stabilized a digital banking system, improving compatibility with modern technologies.</li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Kafka</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Red Hat OpenShift</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">AWS IoT</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>

              {/* Earlier Role */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                <p className="text-blue-600 mb-2">Zilingo Sri Lanka | March 2020 – Sep 2022</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed core back-end applications, ensuring safe feature releases and service upgrades.</li>
                  <li>Contributed to analytics and reporting systems, improving data accuracy by 15%.</li>
                  <li>Participated in a major architectural change, enhancing system scalability and performance.</li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Play Framework</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Druid</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Kafka</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Jenkins</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Flink</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">B.Sc. Engineering (Hons.) in Electronic and Telecommunication Engineering</h3>
                <p className="text-blue-600 mb-2">University of Moratuwa | Graduated: 2020</p>
                <p className="text-gray-600">Second Class Lower Division</p>
              </div>
            </section>

            {/* Skills */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Programming Languages</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Frameworks</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Spring Boot</li>
                    <li>Angular</li>
                    <li>Play</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Databases</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>PostgreSQL</li>
                    <li>Oracle</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tools & Technologies</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Kafka</li>
                    <li>Docker</li>
                    <li>Jenkins</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>AWS</li>
                    <li>Red Hat OpenShift</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Other</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Agile</li>
                    <li>Unit Testing</li>
                    <li>System Design</li>
                    <li>IoT</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
} 