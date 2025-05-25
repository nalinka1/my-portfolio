import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link href="/#blogs" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
              ← Back to Blogs
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IoT Solutions in Healthcare
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>March 5, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/project3-placeholder.jpg"
              alt="IoT Solutions in Healthcare"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-blue max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  The healthcare industry is undergoing a digital transformation, with IoT (Internet of Things) playing a crucial role in improving patient care and operational efficiency. This article explores the development of IoT solutions for healthcare, focusing on real-time monitoring and data processing challenges.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">IoT in Healthcare: Key Applications</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">1. Remote Patient Monitoring</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      IoT devices enable continuous monitoring of patient vital signs and health metrics from anywhere.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Wearable health monitors</li>
                      <li>Smart medical devices</li>
                      <li>Mobile health applications</li>
                      <li>Real-time alerts and notifications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">2. Asset Management</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Tracking and managing medical equipment and supplies efficiently.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Equipment location tracking</li>
                      <li>Inventory management</li>
                      <li>Maintenance scheduling</li>
                      <li>Usage analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Technical Challenges and Solutions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">1. Data Security and Privacy</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Protecting sensitive patient data is paramount in healthcare IoT applications.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>End-to-end encryption</li>
                      <li>Secure device authentication</li>
                      <li>Compliance with healthcare regulations</li>
                      <li>Data anonymization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">2. Real-time Data Processing</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Handling and analyzing large volumes of data from multiple devices in real-time.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Edge computing solutions</li>
                      <li>Stream processing frameworks</li>
                      <li>Data aggregation techniques</li>
                      <li>Real-time analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Implementation Best Practices</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">1. System Architecture</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Designing scalable and reliable IoT systems for healthcare applications.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Microservices architecture</li>
                      <li>Cloud integration</li>
                      <li>Failover mechanisms</li>
                      <li>Scalable data storage</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">2. Device Management</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Efficiently managing and maintaining IoT devices in healthcare settings.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Remote device updates</li>
                      <li>Health monitoring</li>
                      <li>Battery management</li>
                      <li>Connectivity optimization</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Case Study: Smart Hospital Implementation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A detailed look at a successful implementation of IoT solutions in a modern hospital, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Patient monitoring system</li>
                  <li>Asset tracking solution</li>
                  <li>Environmental monitoring</li>
                  <li>Results and improvements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Future Trends</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">1. AI Integration</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The convergence of IoT and AI in healthcare applications.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Predictive analytics</li>
                      <li>Automated diagnosis</li>
                      <li>Personalized care</li>
                      <li>Treatment optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">2. 5G and Edge Computing</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      How new technologies are shaping the future of healthcare IoT.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Ultra-low latency applications</li>
                      <li>Enhanced connectivity</li>
                      <li>Distributed processing</li>
                      <li>Improved reliability</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed">
                  IoT solutions in healthcare are revolutionizing patient care and operational efficiency. By addressing technical challenges and following best practices, healthcare providers can successfully implement IoT solutions that improve patient outcomes and streamline operations.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
} 