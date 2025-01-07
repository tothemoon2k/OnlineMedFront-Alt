import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet';
import SupportModal from '../components/SupportModal';

const ThankYouPage = () => {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [supportType, setSupportType] = useState('chat');
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Trigger confetti animation on load
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Success Message Section */}
      <div className="flex-grow max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100">
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Order!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your doctor's note is being prepared and will be ready shortly.
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-100 rounded-xl p-8 mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-left">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Wait for Email</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an email with your doctor's note within 10 minutes
                </p>
              </div>
              <div className="text-left">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Download Note</h3>
                <p className="text-sm text-gray-600">
                  Open the email and download your doctor's note
                </p>
              </div>
              <div className="text-left">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Use Your Note</h3>
                <p className="text-sm text-gray-600">
                  Present the note to your employer or institution
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <>
        {/* Floating Support Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => setShowSupportModal(true)}
          className="fixed bottom-32 right-6 bg-white text-gray-800 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all flex items-center space-x-3 border border-gray-100 group"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium">Questions? We're here to help</span>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Support Modal */}
        <SupportModal
          isOpen={showSupportModal}
          onClose={() => setShowSupportModal(false)}
        />
      </>

      <footer className="w-full bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 HealthBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;