import React from 'react';
import Legal from '../../components/Legal';

const TelehealthConsent = () => {
    const telehealthConsentSections = [
        {
          title: "Introduction to Telehealth Services",
          content: `
            This Telehealth Consent ("Consent") explains how HealthBridge Direct provides telehealth services for the purpose of medical documentation. Telehealth involves the delivery of healthcare services using electronic communications, information technology, or other means between a healthcare provider and a patient who are not in the same physical location.
          `
        },
        {
          title: "Nature of Telehealth Services",
          content: `
            Our telehealth services are specifically limited to:
            • Evaluation of symptoms for the purpose of medical documentation
            • Assessment of condition severity and appropriateness for telehealth
            • Issuance of medical documentation for school absences
            • Basic health recommendations within scope
      
            We DO NOT provide:
            • Emergency medical services
            • Prescription medications
            • Ongoing treatment or medical care
            • Mental health treatment
            • Specialist referrals
          `
        },
        {
          title: "Medical Information & Records",
          content: `
            By using our services, you understand and agree that:
            • Your telehealth interaction will be documented in your medical records
            • All medical information is protected under HIPAA regulations
            • Records will be maintained according to applicable federal and state laws
            • You have the right to access or receive copies of your medical records
            • Information will only be released with your written authorization or as required by law
          `
        },
        {
          title: "Technology Risks & Limitations",
          content: `
            While we implement strong security measures, you acknowledge that:
            • Electronic systems may experience technical difficulties or failures
            • There are inherent security and privacy risks with electronic communication
            • Service interruptions may occur
            • Data storage and transmission have privacy limitations
            • Emergency situations require in-person evaluation
      
            We use industry-standard encryption and security protocols to protect your information.
          `
        },
        {
          title: "Your Rights & Responsibilities",
          content: `
            You have the right to:
            • Withdraw this consent at any time
            • Request access to your medical information
            • Be informed of all parties who will be present during telehealth services
            • Refuse or stop participation at any time
      
            You are responsible for:
            • Providing accurate and complete information about your medical history
            • Informing us of any changes in your health status
            • Seeking emergency care if needed
            • Following care instructions provided
            • Maintaining the privacy of your telehealth interaction
          `
        },
        {
          title: "Emergency Protocols",
          content: `
            This service is NOT for medical emergencies. By using our service, you acknowledge that:
            • In case of emergency, you should dial 911 immediately
            • We may determine that your condition requires emergency services
            • We may terminate the telehealth interaction if emergency care is needed
            • We maintain protocols for emergency situations that may arise during telehealth services
          `
        },
        {
          title: "Privacy & Security",
          content: `
            We maintain strict privacy standards including:
            • HIPAA-compliant video and communication platforms
            • Encrypted data transmission and storage
            • Secure access controls and authentication
            • Regular security assessments and updates
            • Staff training on privacy and security procedures
            • Incident response protocols
          `
        },
        {
          title: "Fees & Insurance",
          content: `
            Regarding payment for services:
            • Fees are clearly disclosed before service provision
            • Payment is required before receiving medical documentation
            • We do not bill insurance for our services
            • You may submit receipts to your insurance for possible reimbursement
            • Refund policies are governed by our Terms of Service
          `
        },
        {
          title: "State-Specific Requirements",
          content: `
            Telehealth services are subject to state regulations. We:
            • Comply with all applicable state telehealth laws
            • Maintain appropriate state-specific medical licenses
            • Follow state-specific documentation requirements
            • Adhere to state-specific practice standards
            • May limit services based on state regulations
          `
        },
        {
          title: "Acknowledgment & Authorization",
          content: `
            By proceeding with our services, you:
            • Acknowledge that you have read and understand this consent
            • Voluntarily agree to receive telehealth services
            • Understand the risks and benefits described
            • Authorize the release of medical documentation as specified
            • Confirm you are physically present in a state where we operate
            • Agree to seek emergency care if needed
            • Understand the scope and limitations of our services
          `
        },
        {
          title: "Contact Information",
          content: `
            For questions about this consent:
            • Email: legal@healthbridge.clinic
            • Phone: 1-972-597-0341
            • Address: 6014 Walnut Loop Rd, Charlotte, NC, 28277
            
            For medical emergencies: Dial 911
      
            For mental health support:
            • National Crisis Hotline: 988
          `
        }
    ];

    return (
        <div>
            <Legal documentType='Telehealth Consent' lastUpdated='December 28, 2024' companyName='HealthBridge Direct' companyEmail='legal@healthbridge.clinic' sections={telehealthConsentSections}/>
        </div>
    );
};

export default TelehealthConsent;