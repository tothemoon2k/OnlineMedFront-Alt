import React from 'react';
import Legal from '../components/Legal';

const Terms = () => {
    const termsAndConditions = [
        {
          title: "1. Introduction and Acceptance",
          content: `
            Welcome to HealthBridge Direct ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our doctor's note services, including our website, mobile applications, and telehealth services (collectively, the "Services").
      
            By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Services.
      
            IMPORTANT NOTICE: By using our Services, you acknowledge that:
            • These Services are intended for school-related absence documentation only
            • This is not a substitute for emergency medical care
            • False representation of medical conditions may have legal consequences
            • You must be 18 years or older, or a parent/legal guardian to use these Services
          `
        },
        {
          title: "2. Service Description",
          content: `
            2.1 Nature of Services
            HealthBridge Direct provides telehealth services specifically for obtaining medical documentation for school absences. Our platform connects users with licensed healthcare providers who review submitted information and provide appropriate documentation.
      
            2.2 Scope of Services
            Our Services include:
            • Online health questionnaire submission
            • Review by licensed medical professionals
            • Generation of verified medical documentation
            • Digital delivery of doctor's notes
            • Verification system for educational institutions
      
            2.3 Service Limitations
            Our Services explicitly DO NOT include:
            • Emergency medical care
            • Ongoing treatment plans
            • Prescription medications
            • Management of chronic conditions
            • Mental health treatment
            • Specialist referrals
            • Laboratory testing or imaging
          `
        },
        {
          title: "3. User Eligibility and Requirements",
          content: `
            3.1 Age Requirements
            • Users must be 18 years or older to use the Services directly
            • Parents/legal guardians may use the Services on behalf of minors
            • Verification of age and identity may be required
      
            3.2 Geographic Limitations
            • Services are available only in jurisdictions where telehealth services are permitted
            • Users must be physically located in an eligible jurisdiction when using the Services
            • State-specific regulations may apply and modify these Terms
      
            3.3 Technical Requirements
            • Access to internet-connected device
            • Valid email address
            • Ability to receive SMS messages (optional)
            • Compatible web browser or mobile device
          `
        },
        {
          title: "4. Medical Disclaimers and Limitations",
          content: `
            4.1 Not Emergency Services
            THE SERVICES ARE NOT INTENDED FOR MEDICAL EMERGENCIES. IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL 911 OR VISIT THE NEAREST EMERGENCY ROOM IMMEDIATELY.
      
            4.2 Scope of Medical Review
            • Our healthcare providers review only the information you provide
            • No physical examination is performed
            • Documentation is based on reported symptoms only
            • No ongoing doctor-patient relationship is established
      
            4.3 Medical Advice Limitations
            • Services do not include medical advice or treatment
            • No prescription medications are provided
            • No diagnosis is provided
            • Documentation is for administrative purposes only
      
            4.4 Healthcare Provider Discretion
            Our healthcare providers maintain full professional discretion to:
            • Decline to provide documentation
            • Request additional information
            • Recommend immediate in-person medical care
            • Report concerning symptoms to appropriate authorities
          `
        },
        {
          title: "5. User Responsibilities and Representations",
          content: `
            5.1 Accurate Information
            You agree to:
            • Provide accurate and truthful information
            • Update information if it changes
            • Not misrepresent symptoms or conditions
            • Not use the Services fraudulently
      
            5.2 Proper Use
            Users must:
            • Use Services only for legitimate absences
            • Not share or sell documentation
            • Not modify or alter documentation
            • Not use Services to avoid legal obligations
      
            5.3 Account Security
            Users are responsible for:
            • Maintaining confidentiality of login credentials
            • All activities under their account
            • Reporting unauthorized access
            • Logging out from shared devices
          `
        }
    ];

    const termsAndConditionsPart2 = [
        {
          title: "6. Privacy and Data Protection",
          content: `
            6.1 HIPAA Compliance
            • We maintain compliance with the Health Insurance Portability and Accountability Act (HIPAA)
            • Our privacy practices are detailed in our Notice of Privacy Practices
            • We implement industry-standard security measures to protect your health information
      
            6.2 Data Collection and Use
            We collect and process:
            • Personal identification information
            • Health-related information
            • Payment information
            • Usage data
            • Communication records
      
            6.3 Data Storage and Security
            • All health data is encrypted at rest and in transit
            • Access to personal health information is strictly controlled
            • Regular security audits are performed
            • Data retention policies comply with state and federal regulations
      
            6.4 Third-Party Sharing
            We may share information with:
            • Healthcare providers reviewing your case
            • Payment processors
            • Legal authorities when required
            • School officials (with your explicit consent only)
          `
        },
        {
          title: "7. Payment Terms and Refund Policy",
          content: `
            7.1 Fees and Payment
            • Service fees are clearly displayed before purchase
            • All fees are in US dollars
            • Payment is required before service delivery
            • We accept major credit cards and approved payment methods
      
            7.2 Refund Policy
            Refunds are available in the following circumstances:
            • Service not provided within promised timeframe
            • Technical failure preventing service delivery
            • Healthcare provider unable to review case
            
            Refunds are NOT available if:
            • Documentation is provided as described
            • User provides incorrect information
            • User no longer needs the documentation
            • School or institution declines to accept documentation
      
            7.3 Billing Disputes
            • Must be reported within 30 days
            • Will be investigated promptly
            • May require supporting documentation
          `
        },
        {
          title: "8. Intellectual Property Rights",
          content: `
            8.1 Ownership
            • All content, features, and functionality are owned by HealthBridge Direct
            • Medical documentation is provided for specific, limited use
            • Users receive a limited, non-transferable license to use documentation
      
            8.2 Restrictions
            Users may not:
            • Copy or reproduce documentation except for intended use
            • Modify or alter documentation
            • Create derivative works
            • Reverse engineer our systems or processes
            • Use our intellectual property without permission
      
            8.3 Trademark and Copyright
            • All trademarks, logos, and service marks displayed are our property
            • System design, interface, and content are protected by copyright
            • Unauthorized use may result in legal action
          `
        },
        {
          title: "9. Liability and Disclaimers",
          content: `
            9.1 Service Disclaimer
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
      
            9.2 Limitation of Liability
            TO THE FULLEST EXTENT PERMITTED BY LAW:
            • We are not liable for indirect, incidental, special, or consequential damages
            • Total liability is limited to the amount paid for the specific service
            • No liability for decisions made by schools or institutions
            • No liability for technical failures or service interruptions
      
            9.3 Indemnification
            Users agree to indemnify and hold harmless HealthBridge Direct from:
            • False or inaccurate information provided
            • Misuse of documentation
            • Violation of these Terms
            • Claims arising from user's actions
          `
        },
        {
          title: "10. Dispute Resolution",
          content: `
            10.1 Governing Law
            • These Terms are governed by [State] law
            • Users agree to personal jurisdiction in [State]
            • Choice of law provisions may vary by state
      
            10.2 Arbitration Agreement
            • Disputes will be resolved by binding arbitration
            • Arbitration will be conducted by [Arbitration Service]
            • Users waive right to participate in class actions
            • Small claims court rights are preserved
      
            10.3 Dispute Process
            1. Informal Resolution Attempt
            2. Written Notice of Dispute
            3. 30-Day Resolution Period
            4. Arbitration Filing
            5. Final and Binding Decision
          `
        },
        {
          title: "11. Service Termination",
          content: `
            11.1 Termination by HealthBridge Direct
            We may terminate or suspend access to Services:
            • For Terms violations
            • For fraudulent activity
            • To comply with law
            • For service maintenance
            • At our sole discretion
      
            11.2 User Termination
            • Users may discontinue service use at any time
            • No refunds for completed services
            • Certain Terms survive termination
      
            11.3 Effects of Termination
            • Access to Services ends
            • Completed documentation remains valid
            • Payment obligations survive
            • Confidentiality obligations continue
          `
        },
        {
          title: "12. Changes to Terms",
          content: `
            12.1 Modification Rights
            • We reserve the right to modify these Terms
            • Changes effective upon posting
            • Material changes notified via email
            • Continued use constitutes acceptance
      
            12.2 Notice of Changes
            We will provide notice through:
            • Website announcements
            • Email notifications
            • Application updates
            • Service notifications
          `
        },
        {
          title: "13. State-Specific Provisions",
          content: `
            13.1 Telehealth Regulations
            • Services comply with state-specific telehealth laws
            • Additional requirements may apply in certain states
            • Some services may be unavailable in certain jurisdictions
      
            13.2 State-Specific Rights
            • California residents have additional privacy rights
            • New York residents have specific healthcare rights
            • Other state-specific provisions as applicable
          `
        },
        {
          title: "14. Contact Information",
          content: `
            For questions about these Terms:
            • Legal Department: legal@healthbridge.clinic
            • Support Team: support@healthbridge.clinic
            • Phone: 1-972-597-0341
            • Address: 6014 Walnut Loop Rd
      
            Emergency Contact:
            • For medical emergencies, call 911
          `
        }
    ];

    const fullTermsAndConditions = [...termsAndConditions, ...termsAndConditionsPart2];

    return (
        <div>
            <Legal documentType='Terms and Conditions' lastUpdated='February 20, 2024' companyName='HealthBridge Direct' companyEmail='legal@healthbridge.clinic' sections={fullTermsAndConditions}/>
        </div>
    );
};

export default Terms;