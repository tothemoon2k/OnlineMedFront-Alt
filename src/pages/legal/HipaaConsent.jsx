import React from 'react';
import Legal from '../../components/Legal';

const HipaaConsent = () => {
    const hipaaConsentSections = [
        {
          title: 'HIPAA Authorization Overview',
          content: `By using HealthBridge Direct's services, you authorize us to collect, use, and disclose your protected health information (PHI) as described in this consent. This authorization is voluntary, and you may refuse to sign; however, we cannot provide our doctor's note services without this authorization.`
        },
        {
          title: 'Information We May Collect',
          content: `We are authorized to collect and store the following protected health information:
      
          • Personal identifiers (name, date of birth, contact information)
          • Symptoms and health conditions you report
          • Dates of medical absence
          • Medical documentation created as part of our services
          • Communication records between you and our healthcare providers
          • Payment and transaction information
          
          We specifically limit our collection to information necessary for providing doctor's note services.`
        },
        {
          title: 'How We Use Your Information',
          content: `Your protected health information will be used to:
      
          • Generate appropriate medical documentation for your absence
          • Verify your identity and eligibility for services
          • Communicate with you about your service request
          • Process your payment
          • Comply with legal and regulatory requirements
          • Maintain accurate medical records
          • Prevent fraud and abuse
          
          We will never use your information for marketing purposes without separate explicit consent.`
        },
        {
          title: 'Information Disclosure',
          content: `We may disclose your information to:
      
          • Our licensed healthcare providers who review and issue medical documentation
          • Our secure technology platform providers (with appropriate BAA agreements)
          • Legal authorities if required by law
          • School officials or employers when you explicitly request verification
          
          All disclosures are made in accordance with HIPAA minimum necessary standards.`
        },
        {
          title: 'Your Rights Under HIPAA',
          content: `You have the right to:
      
          • Receive a copy of this authorization
          • Revoke this authorization at any time in writing
          • Request a copy of your medical records
          • Request corrections to your information
          • Receive an accounting of disclosures
          • Request restrictions on certain uses and disclosures
          • File a complaint if you believe your privacy rights have been violated
          
          To exercise these rights, contact our Privacy Officer at privacy@HealthBridge Direct.com`
        },
        {
          title: 'Security Measures',
          content: `We protect your information using:
      
          • 256-bit encryption for all data transmission
          • Secure, HIPAA-compliant servers
          • Regular security audits and updates
          • Strict access controls and authentication
          • Employee training on privacy and security
          • Secure backup systems
          • Incident response protocols`
        },
        {
          title: 'Duration of Authorization',
          content: `This authorization will remain in effect for:
      
          • Service Delivery: Duration of service provision
          • Record Retention: 7 years from date of service (or longer if required by state law)
          • Payment Records: As required by applicable financial regulations
          
          You may revoke this authorization at any time by submitting a written request, except to the extent that action has already been taken based on this authorization.`
        },
        {
          title: 'State-Specific Rights',
          content: `Some states provide additional privacy rights beyond HIPAA requirements. We comply with all applicable state laws regarding medical privacy and information security. Please contact our Privacy Officer for state-specific information.`
        },
        {
          title: 'Telehealth Considerations',
          content: `As a telehealth service provider:
      
          • We maintain appropriate professional licenses in serviced states
          • We follow state-specific telehealth regulations
          • We implement additional security measures specific to virtual care
          • We maintain clear documentation of all telehealth encounters
          • We provide appropriate disclaimers regarding telehealth limitations`
        },
        {
          title: 'Understanding Your Consent',
          content: `By accepting this authorization, you confirm that:
      
          • You have read and understand this authorization
          • You voluntarily agree to this authorization
          • You are at least 18 years old or are the legal guardian of the patient
          • You understand you can receive a copy of this authorization
          • You understand the risks of electronic communication
          • You accept our telehealth service limitations
          
          If you have questions about this authorization, please contact us before accepting.`
        },
        {
          title: 'Changes to This Authorization',
          content: `We may update this authorization to reflect:
      
          • Changes in our practices
          • New regulations or laws
          • Improved security measures
          
          You will be notified of any material changes and may need to provide new consent.`
        },
        {
          title: 'Contact Information',
          content: `For privacy-related matters:
      
          Email: legal@healthbridge.clinic
          Phone: 1-972-597-0341
          Address: 6014 Walnut Loop Rd, Charlotte, NC, 28277
          
          For HIPAA complaints:
          U.S. Department of Health and Human Services
          Office for Civil Rights
          [Regional Office Information]`
        }
      ];

    return (
        <div>
            <Legal documentType='HIPAA Consent' lastUpdated='December 28, 2024' companyName='HealthBridge Direct' companyEmail='legal@healthbridge.clinic' sections={hipaaConsentSections}/>
        </div>
    );
};

export default HipaaConsent;