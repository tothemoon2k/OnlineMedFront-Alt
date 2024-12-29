import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewSection = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            rating: 5,
            time: "1 week ago",
            text: "Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes. Saved me hundreds compared to urgent care and my supervisor had no concerns when accepting it.",
            initials: "JT",
            name: "James T.",
            role: "Student",
            location: "New York",
            bgColor: "bg-green-100",
            textColor: "text-green-600"
        },
        {
            rating: 5,
            time: "1 month ago",
            text: "Working in corporate, I was skeptical about online medical services, but this exceeded expectations. The form was thorough, the documentation was professional, and HR accepted it immediately. Perfect for busy professionals.",
            initials: "RC",
            name: "Robert C.",
            role: "Business Analyst",
            location: "Washington",
            bgColor: "bg-rose-100",
            textColor: "text-rose-600"
        },
        {
            rating: 5,
            time: "3 weeks ago",
            text: "My warehouse job requires docs notes for ANY sick day... healthbridge has saved me so much money & time. Used it twice already this year, my strict boss accepted it without issue!",
            initials: "JL",
            name: "James L.",
            role: "Warehouse Worker",
            location: "Texas",
            bgColor: "bg-red-100",
            textColor: "text-red-600"
        },
        {
            rating: 5,
            time: "3 days ago",
            text: "Perfect for when my son needed a note for missing class. Process was straightforward and the school's administration appreciated the proper medical documentation.",
            initials: "RK",
            name: "Rachel K.",
            role: "Parent",
            location: "Texas",
            bgColor: "bg-purple-100",
            textColor: "text-purple-600"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="mt-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 md:p-12">
            <div className="max-w-4xl mx-auto">
                {/* Review Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">4.9 out of 5</div>
                    <div className="text-sm md:text-base text-gray-600">Based on 2,847 verified reviews</div>
                </div>

                {/* Review Carousel */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Review Card */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentReview}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mx-4 md:mx-0"
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex space-x-1">
                                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-xs md:text-sm text-gray-500">{reviews[currentReview].time}</span>
                            </div>
                            <blockquote className="text-sm md:text-base text-gray-700 mb-4">
                                {reviews[currentReview].text}
                            </blockquote>
                            <div className="flex items-center">
                                <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full ${reviews[currentReview].bgColor} flex items-center justify-center`}>
                                    <span className={`text-sm md:text-base font-semibold ${reviews[currentReview].textColor}`}>
                                        {reviews[currentReview].initials}
                                    </span>
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm md:text-base font-medium text-gray-900">{reviews[currentReview].name}</div>
                                    <div className="text-xs md:text-sm text-gray-500">
                                        {reviews[currentReview].role} • {reviews[currentReview].location}
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <span className="inline-flex items-center pl-5 pr-1 md:pl-4 md:pr-4 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Verified Purchase
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentReview(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Review Stats - Mobile Optimized */}
                <div className="mt-8 md:mt-12 grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
                    <div>
                        <div className="text-xl md:text-2xl font-bold text-gray-900">2,847</div>
                        <div className="text-xs md:text-sm text-gray-500">Verified Reviews</div>
                    </div>
                    <div className="hidden md:block h-8 w-px bg-gray-200"></div>
                    <div>
                        <div className="text-xl md:text-2xl font-bold text-gray-900">99.9%</div>
                        <div className="text-xs md:text-sm text-gray-500">Employer/School Acceptance</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;