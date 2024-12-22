import React from 'react';

const App = () => {
  const href = 'https://xhj91lsy6tk.typeform.com/to/yDAHa4zu';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">HealthBridge</h1>
            </div>
            <a href={href} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Your Note Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Problem */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Need a Doctor's Note Fast?
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Get a legitimate, verifiable doctor's note in under 10 minutes
            </p>
            <div className="mt-8">
              <a href={href} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started - Only $35
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agitate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800">
                Tired of Waiting Rooms?
              </h3>
              <p className="mt-2 text-gray-600">
                Skip the long waits and get your note from home
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800">
                Worried About Acceptance?
              </h3>
              <p className="mt-2 text-gray-600">
                Our notes are verifiable and accepted by employers
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800">
                Save Money & Time
              </h3>
              <p className="mt-2 text-gray-600">
                No expensive urgent care visits needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Doctor's Notes Done Right
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Fast, simple, affordable doctor's notes so you can focus on recovery
            </p>
            <div className="mt-8 space-y-4">
              <div className="inline-flex items-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Licensed Medical Team</span>
              </div>
              <div className="inline-flex items-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">100% Verifiable</span>
              </div>
              <div className="inline-flex items-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Under 10 Minutes</span>
              </div>
            </div>
            <div className="mt-10">
              <a href={href} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Your Doctor's Note Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 HealthBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;