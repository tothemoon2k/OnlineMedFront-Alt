import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import docImg from '../../assets/doc4.webp';

const School = () => {
    const reviewAvatars = [
        "https://pbs.twimg.com/profile_images/909523370940780545/UOAjh5Vq_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1783877005832056832/L53JJgMP_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1750523320263475200/gbnPp-Pt_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1816677293177339908/iw7GzG9o_400x400.jpg",
    ];

    const handleCtaClick = () => {
        track('cta-click');

        window.location.href = "https://xhj91lsy6tk.typeform.com/to/ZdGdaqg4";
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-blue-600">HealthBridge</h1>
                        </div>

                        <button onClick={handleCtaClick} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Get Your Note Now
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section - Problem */}
            <section className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                                Need a Doctor's Note for School? <span className="text-blue-600">Get a Real Medical Excuse in Minutes</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                Legitimate, verifiable doctor's notes for school absences. Perfect for students and parents who need a proper medical excuse without the hassle of a clinic visit.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button onClick={handleCtaClick} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                                    Get Started - Only $35
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-8 flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {reviewAvatars.map((i) => (
                                        <img
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            src={i}
                                            alt={`Testimonial Avatar`}
                                        />
                                    ))}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className="font-semibold text-blue-600">4.9/5</span> from over 10,000+ satisfied customers
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl transform rotate-3"></div>
                            <img
                                src={docImg}
                                alt="Online Doctor Consultation"
                                className="relative rounded-3xl shadow-xl"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-lg p-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="ml-2 text-sm font-medium">Doctors available now - No waiting time</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-8 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-600 mb-8">
                        <p className="text-sm font-medium uppercase tracking-wide">Trusted By Thousands Of Professionals</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {/* Updated, more professional badges */}
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-50 rounded-full p-3 mb-3">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="font-semibold">HIPAA Compliant</span>
                            <span className="text-sm text-gray-500">Protected Health Info</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-green-50 rounded-full p-3 mb-3">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                            </div>
                            <span className="font-semibold">Verified Doctors</span>
                            <span className="text-sm text-gray-500">Licensed Professionals</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-purple-50 rounded-full p-3 mb-3">
                                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="font-semibold">256-bit SSL</span>
                            <span className="text-sm text-gray-500">Bank-Level Security</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-orange-50 rounded-full p-3 mb-3">
                                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-semibold">24/7 Support</span>
                            <span className="text-sm text-gray-500">Always Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agitate Section - Pain Points */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Stress About Getting a Doctor's Note?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Traditional ways of getting a doctor's note are frustrating, time-consuming, and expensive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pain Point Cards */}
                        <motion.div
                            className="p-8 bg-green-50 rounded-xl shadow-lg"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-4">
                                Risk of Failed Classes
                            </h3>
                            <p className="text-gray-600">
                                Without proper medical documentation, you risk failing assignments or getting unexcused absences on your record.
                            </p>
                        </motion.div>

                        <motion.div
                            className="p-8 bg-red-50 rounded-xl shadow-lg"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-red-800 mb-4">
                                Endless Waiting Rooms
                            </h3>
                            <p className="text-gray-600">
                                Waste hours sitting in waiting rooms when you're already feeling sick, potentially exposing yourself to other illnesses.
                            </p>
                        </motion.div>

                        <motion.div
                            className="p-8 bg-orange-50 rounded-xl shadow-lg"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-orange-800 mb-4">
                                Expensive Urgent Care Visits
                            </h3>
                            <p className="text-gray-600">
                                Pay hundreds of dollars for a simple doctor's note, even with insurance. Why spend more than you need to?
                            </p>
                        </motion.div>
                    </div>

                    {/* Two Testimonial Quotes */}
                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        {/* Parent Testimonial */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <div className="text-center">
                                <svg className="w-12 h-12 text-blue-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <blockquote className="text-lg text-gray-900 font-medium italic mb-6">
                                    "As a working parent, I couldn't take time off to sit in a doctor's office just for a note. This service saved me time and money while ensuring my daughter's absence was properly excused."
                                </blockquote>
                                <div className="flex items-center justify-center">
                                    <img src="https://pbs.twimg.com/profile_images/836035717918683136/Jp5iHT4N_400x400.jpg" alt="Parent" className="w-12 h-12 rounded-full object-cover" />
                                    <div className="ml-4 text-left">
                                        <div className="font-semibold">Sarah M.</div>
                                        <div className="text-gray-600">Parent of High School Student</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Student Testimonial */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <div className="text-center">
                                <svg className="w-12 h-12 text-blue-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <blockquote className="text-lg text-gray-900 font-medium italic mb-6">
                                    "I needed to excuse 3 days of absences and was really worried because my school is super strict about doctor's notes. They scrutinize everything, but this note was perfect. Saved me from failing my classes!"
                                </blockquote>
                                <div className="flex items-center justify-center">
                                    <img src="https://i.redd.it/19-year-old-male-college-student-goatee-or-clean-shaven-any-v0-atox9pbfmxy81.jpg?width=827&format=pjpg&auto=webp&s=94c2e24ea7a87fa6fa897eecea1e99b36d2f0558" alt="Student" className="w-12 h-12 rounded-full object-cover" />
                                    <div className="ml-4 text-left">
                                        <div className="font-semibold">Alex T.</div>
                                        <div className="text-gray-600">College Student</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Get Your Doctor's Note in 3 Simple Steps
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our streamlined process makes getting a doctor's note quick and hassle-free
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2" />

                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <motion.div
                                className="relative bg-white rounded-xl shadow-lg p-8"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                        1
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <h3 className="text-xl font-semibold mb-4">Fill Out Simple Form</h3>
                                    <p className="text-gray-600 mb-6">
                                        Provide basic information about your situation and requirements
                                    </p>
                                    {/* Animated Icon/Illustration Alternative */}
                                    <div className="w-32 h-32 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                    rotate: [0, 5, -5, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }}
                                            >
                                                <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                className="relative bg-white rounded-xl shadow-lg p-8"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                        2
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <h3 className="text-xl font-semibold mb-4">Doctor Review</h3>
                                    <p className="text-gray-600 mb-6">
                                        Licensed medical professional reviews your case
                                    </p>
                                    {/* Animated Icon Alternative */}
                                    <div className="w-32 h-32 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        >
                                            <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                className="relative bg-white rounded-xl shadow-lg p-8"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                        3
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <h3 className="text-xl font-semibold mb-4">Get Your Note</h3>
                                    <p className="text-gray-600 mb-6">
                                        Receive your verified doctor's note instantly
                                    </p>
                                    {/* Animated Icon Alternative */}
                                    <div className="w-32 h-32 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        >
                                            <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-16">
                        <button onClick={handleCtaClick} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                            Get Your Doctor's Note Now
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Choose Our Doctor's Notes for School?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional medical documentation trusted by schools, colleges, and universities nationwide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit Cards - School Note Specific */}
                        {[
                            {
                                icon: "🏫",
                                title: "School-Approved Format",
                                description: "Meets all educational institution requirements for medical documentation"
                            },
                            {
                                icon: "👨‍⚕️",
                                title: "Licensed Medical Team",
                                description: "Every note is reviewed and signed by licensed physicians"
                            },
                            {
                                icon: "📝",
                                title: "Academic-Friendly Format",
                                description: "Specifically designed for school attendance offices and faculty requirements"
                            },
                            {
                                icon: "🔍",
                                title: "Easy Verification",
                                description: "Simple verification system for school administrators to confirm authenticity"
                            },
                            {
                                icon: "⚡",
                                title: "Quick Delivery",
                                description: "Get your doctor's note in under 10 minutes - perfect for last-minute situations"
                            },
                            {
                                icon: "📚",
                                title: "Make-up Work Eligible",
                                description: "Proper documentation to qualify for make-up tests and assignments"
                            },
                            {
                                icon: "🎓",
                                title: "All Education Levels",
                                description: "Suitable for high school, college, and university requirements"
                            },
                            {
                                icon: "🔒",
                                title: "Privacy Protected",
                                description: "HIPAA-compliant documentation that protects student medical privacy"
                            },
                            {
                                icon: "💯",
                                title: "Acceptance Guarantee",
                                description: "Full refund if your school doesn't accept our medical documentation"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education-Specific Trust Elements */}
                    <div className="mt-16 bg-blue-50 rounded-xl p-8">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-sm text-gray-600">
                                    School Acceptance Rate
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">75,000+</div>
                                <div className="text-sm text-gray-600">
                                    Students Helped
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                                <div className="text-sm text-gray-600">
                                    Available for Emergencies
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Educational Institution Acceptance */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        <div className="bg-green-50 p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-green-800 font-semibold">
                                    Accepted by K-12 Schools
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Perfect for excused absences, PE exemptions, and missed assignments
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-green-800 font-semibold">
                                    Accepted by Colleges & Universities
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Valid for exam deferrals, attendance requirements, and academic accommodations
                            </p>
                        </div>
                    </div>

                    {/* Parent & Student Friendly Highlight */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-blue-800 font-semibold">
                                Trusted by Parents & Students Nationwide
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            No hidden fees or subscriptions. Just pay once and get your note.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                {/* Pricing Info */}
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold">Doctor's Note</h3>
                                            <p className="text-gray-600 mt-1">One-time payment</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-blue-600">$35</div>
                                            <div className="text-sm text-gray-500">USD</div>
                                        </div>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "Instant Digital Delivery",
                                            "Signed by Licensed Doctor",
                                            "100% Verifiable",
                                            "Print & Digital Formats",
                                            "24/7 Support",
                                            "Money-Back Guarantee"
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={handleCtaClick} className="w-full bg-blue-600 text-white mt-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Get Your Note Now
                                    </button>
                                </div>

                                {/* Comparison */}
                                <div className="bg-gray-50 p-8 md:p-12">
                                    <h4 className="text-lg font-semibold mb-6">Compare to Traditional Options:</h4>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <span>Urgent Care Visit</span>
                                            <span className="font-semibold">$100-200+</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Doctor's Office</span>
                                            <span className="font-semibold">$75-150+</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Emergency Room</span>
                                            <span className="font-semibold">$500+</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                        <div className="font-semibold text-blue-800 mb-2">Why pay more?</div>
                                        <p className="text-sm text-blue-600">
                                            Get the same legitimate doctor's note without the expensive visit and long wait times.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Common Questions About Doctor's Notes for School
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything students and parents need to know about getting a legitimate medical excuse for school
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {[
                            {
                                question: "Will my school accept this doctor's note?",
                                answer: "Yes, our medical notes are accepted by schools nationwide, including high schools, colleges, and universities. They contain all required medical information and proper formatting that school attendance offices need. Each note is signed by a licensed medical professional."
                            },
                            {
                                question: "Can I get a note for my child's school absence?",
                                answer: "Yes, parents can obtain doctor's notes for their children's school absences. Our licensed physicians understand school requirements and provide appropriate medical documentation that meets educational institution standards."
                            },
                            {
                                question: "Can I get a note for missed exams or assignments?",
                                answer: "Yes, our doctor's notes specifically address missed academic commitments, including exams, assignments, and class sessions. The documentation provides proper medical justification for academic make-up requests."
                            },
                            {
                                question: "Can college students use this service?",
                                answer: "Yes, our service is particularly useful for college students who need medical documentation for missed classes, exams, or deadline extensions. Our notes meet university health services requirements."
                            },
                            {
                                question: "What if I'm not satisfied with the note?",
                                answer: "We offer a 100% satisfaction guarantee. If your school doesn't accept our doctor's note or you're not satisfied for any reason, we'll provide a full refund within 24 hours. We can also modify the note format to meet specific school requirements."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="mb-6"
                                initial={false}
                            >
                                <button
                                    className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    onClick={() => {/* Toggle FAQ */ }}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className="mt-4 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </button>
                            </motion.div>
                        ))}

                        {/* Additional Help Section */}
                        <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
                            <h3 className="font-semibold mb-2">Need help with school medical documentation?</h3>
                            <p className="text-gray-600 mb-4">
                                Our support team is here to help students and parents 24/7
                            </p>
                            <div className="flex justify-center space-x-6">
                                <a href= "mailto:support@healthbridgedirect.org" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main CTA Container */}
                    <div className="relative">
                        {/* Background Design Elements */}
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-1"></div>
                        <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* CTA Content */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Need a Doctor's Note for School Today?
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-6">
                                        Get your verified medical excuse note in the next 10 minutes - perfect for school attendance offices
                                    </p>

                                    {/* Key Benefits List */}
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Valid for All Schools & Universities</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Proper Medical Documentation for Make-up Work</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Instant Digital + Printable Formats</span>
                                        </div>
                                    </div>

                                    {/* Price and CTA Button */}
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <div className="text-4xl font-bold text-blue-600">$35</div>
                                            <div className="ml-3">
                                                <div className="text-gray-500 line-through">$150+</div>
                                                <div className="text-sm text-gray-600">vs. Doctor's Office Visit</div>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleCtaClick}
                                            className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                                        >
                                            Get Your School Doctor's Note
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Trust Indicators */}
                                <div className="space-y-8">
                                    {/* Process Timeline */}
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="font-semibold mb-4">Simple Process for Students & Parents</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">
                                                    1
                                                </div>
                                                <span className="text-gray-600">Enter student & absence details</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">
                                                    2
                                                </div>
                                                <span className="text-gray-600">Licensed doctor reviews case</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">
                                                    3
                                                </div>
                                                <span className="text-gray-600">Receive school-ready medical note</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                                            <div className="text-sm text-gray-600">School Acceptance</div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                                            <div className="text-sm text-gray-600">Available</div>
                                        </div>
                                    </div>

                                    {/* Guarantee Badge */}
                                    <div className="flex items-center justify-center bg-green-50 rounded-xl p-4">
                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span className="text-green-800 font-semibold">School Acceptance Guarantee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Trust Message */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Trusted by students and parents at over 1,000+ schools nationwide. Our doctor's notes meet all school requirements for medical documentation.
                        </p>
                        <div className="mt-6 flex justify-center space-x-6">
                            <div className="flex items-center">
                                {/* Star Rating */}
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-gray-600">4.9/5 from parents & students</span>
                            </div>
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
}

export default School;