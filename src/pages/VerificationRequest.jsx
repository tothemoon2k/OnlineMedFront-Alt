import React from 'react';
import { motion } from 'framer-motion';

const VerificationRequest = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Banner */}
            <div className="bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Doctor's Note Verification Portal
                        </h1>
                        <p className="text-xl text-blue-100">
                            For Employers & Educational Institutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Important Notice Box */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">
                                Important Notice
                            </h3>
                            <p className="mt-2 text-sm text-yellow-700">
                                All verification requests must be submitted through our written authorization form. This process ensures HIPAA compliance and protects patient privacy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="space-y-12">
                    {/* Step 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                                    1
                                </span>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Access the Authorization Form</h2>
                                <p className="text-gray-600 mb-4">
                                    Visit our secure verification portal to access the authorization form and detailed instructions.
                                </p>
                                <a 
                                    href="/authorization-form" 
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                >
                                    Go to Authorization Form
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                                    2
                                </span>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Download the Form</h2>
                                <p className="text-gray-600 mb-4">
                                    Download our standard verification request form in PDF format.
                                </p>
                                <button 
                                    className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50"
                                >
                                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Authorization Form
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                                    3
                                </span>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Complete and Sign</h2>
                                <p className="text-gray-600 mb-4">
                                    Fill out all required fields and obtain the patient's signature. Incomplete forms cannot be processed.
                                </p>
                                <div className="bg-gray-50 rounded-md p-4">
                                    <h4 className="font-medium text-gray-900 mb-2">Required Information:</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        <li>Patient's full name and date of birth</li>
                                        <li>Doctor's note reference number</li>
                                        <li>Employer/Institution details</li>
                                        <li>Patient's signature and date</li>
                                        <li>Authorized representative information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                                    4
                                </span>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Submit the Form</h2>
                                <p className="text-gray-600 mb-4">
                                    Fax the completed and signed form to our secure verification department.
                                </p>
                                <div className="bg-blue-50 rounded-md p-4 inline-block">
                                    <div className="font-medium text-blue-900">Secure Fax Line:</div>
                                    <div className="text-blue-700 text-lg">XXX-XXX-XXXX</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 5 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                                    5
                                </span>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Verification Timeline</h2>
                                <p className="text-gray-600 mb-4">
                                    We process all verification requests within 10-15 business days of receipt.
                                </p>
                                <div className="bg-gray-50 rounded-md p-4">
                                    <div className="text-sm text-gray-600">
                                        For urgent verifications or questions about your submission, contact our verification department:
                                        <br />
                                        <a href="mailto:verification@healthbridge.clinic" className="text-blue-600 hover:text-blue-700">
                                            verification@healthbridge.clinic
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Additional Information
                    </h3>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            • All verification requests are processed in accordance with HIPAA guidelines
                        </p>
                        <p>
                            • We cannot process incomplete forms or forms without patient authorization
                        </p>
                        <p>
                            • Please ensure all information is legible to avoid processing delays
                        </p>
                        <p>
                            • Keep a copy of the completed form for your records
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationRequest;