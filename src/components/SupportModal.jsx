import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SUPPORT_PHONE = "469-587-6315";
const SUPPORT_EMAIL = "support@healthbridge.clinic";

const formatPhoneNumber = (number) => {
  return number.replace(/\D+/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

const SupportModal = ({ isOpen, onClose }) => {
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);

  useEffect(() => {
    const checkOfficeHours = () => {
      const now = new Date();
      const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const hour = estTime.getHours();
      setIsOfficeOpen(hour >= 8 && hour < 22); // 8 AM to 10 PM EST
    };

    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">How Can We Help?</h3>
          </div>

          <div className="space-y-4">
            {/* Email Support - Always Available */}
            <button
              onClick={() => window.location.href = `mailto:${SUPPORT_EMAIL}`}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Email Support</div>
                  <div className="text-sm text-gray-500">Available 24/7 • Response within {isOfficeOpen ? "10 Minutes" : "12 hours"}</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Live Chat */}
            <button
              disabled={true}
              className="w-full flex items-center justify-between p-4 rounded-lg transition-colors bg-gray-100 cursor-not-allowed"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-200">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-400">Live Chat</div>
                  <div className="text-sm text-gray-500">Currently unavailable</div>
                </div>
              </div>
            </button>

            {/* Phone Support */}
            <button
              disabled={true}
              className="w-full flex items-center justify-between p-4 rounded-lg transition-colors bg-gray-100 cursor-not-allowed"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-200">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-400">Phone Support</div>
                  <div className="text-sm text-gray-500">Currently unavailable</div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Office Hours: 8:00 AM - 10:00 PM EST, Daily
          </div>

          <button
            onClick={onClose}
            className="mt-4 w-full py-2 text-gray-500 hover:text-gray-700 font-medium"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SupportModal;