import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable component for different types of legal documents
const Legal= ({ 
  documentType, // Can be 'Privacy Policy', 'Terms of Service', etc.
  lastUpdated,
  companyName,
  companyEmail,
  sections,
}) => {
  const [activeSection, setActiveSection] = useState(null);

  const finalSections = sections.length > 0 ? sections : defaultSections;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{documentType}</h1>
              <p className="mt-1 text-sm text-gray-500">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Navigation */}
        <div className="mb-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {finalSections.map((section, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(`section-${index}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {finalSections.map((section, index) => (
            <motion.div
              key={index}
              id={`section-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <button
                onClick={() => setActiveSection(activeSection === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeSection === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {(activeSection === index || activeSection === null) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-600 prose prose-blue max-w-none"
                >
                  {section.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>For questions about these {documentType.toLowerCase()}, please contact:</p>
          <p className="mt-1">
            <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:text-blue-700">
              {companyEmail}
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Legal;