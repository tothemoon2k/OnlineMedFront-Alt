import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SaleBanner = () => {
    const [timeLeft, setTimeLeft] = useState(420); // 7 minutes in seconds
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIsVisible(false);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="relative bg-gradient-to-r from-blue-600 to-blue-800"
                >
                    <div className="w-screen mx-auto py-3 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center">
                                <motion.span
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ 
                                        repeat: Infinity, 
                                        duration: 2,
                                        repeatType: "reverse" 
                                    }}
                                    className="flex p-2 rounded-lg bg-blue-800"
                                >
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </motion.span>
                                <p className="ml-3 font-medium text-white truncate">
                                    <span className="md:hidden">
                                        Save $20 - Limited Time!
                                    </span>
                                    <span className="hidden md:inline">
                                        🎉 Flash Sale: Complete your order in the next {' '}
                                        <span className="font-bold text-yellow-300">{formatTime(timeLeft)}</span>
                                        {' '} to get an additional $30 off! 
                                        {' '}

                                        Was: 
                                        {' '}
                                        <span className="line-through text-red-600 text-lg">$65</span> 
                                        <span className="ml-1 text-xl font-bold text-white">$35</span>
                                        🎉
                                    </span>
                                </p>
                            </div>

                            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                <button
                                    type="button"
                                    onClick={() => setIsVisible(false)}
                                    className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                >
                                    <span className="sr-only">Dismiss</span>
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Urgency Indicators */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900">
                        <motion.div
                            className="h-full bg-yellow-400"
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 420, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SaleBanner;