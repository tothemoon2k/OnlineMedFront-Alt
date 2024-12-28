import React from 'react';
import Legal from '../../components/Legal';

const Privacy = () => {
    const privacySections = [
        {
          title: 'Introduction',
          content: 'At HealthBridge Direct, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our doctor\'s note service. Please read this privacy policy carefully. By using our service, you consent to the practices described in this policy.\n\nWe are committed to protecting your personal and medical information in compliance with the Health Insurance Portability and Accountability Act (HIPAA), state privacy laws, and other applicable regulations.'
        },
        {
          title: 'Information We Collect',
          content: 'Personal Information:\n• Name and contact information (email address, phone number)\n• Date of birth and age\n• Gender and pronouns\n• School or educational institution information\n• Location data (state of residence)\n• Payment information\n\nHealth Information:\n• Symptoms and health conditions reported\n• Dates of illness or absence\n• Medical screening responses\n• Health-related communications with our medical providers\n\nTechnical Information:\n• IP address and device information\n• Browser type and version\n• Operating system\n• Time zone and location\n• Usage data and browsing patterns\n• Cookies and similar tracking technologies'
        },
        {
          title: 'How We Collect Information',
          content: 'Direct Collection:\n• Information you provide through our online forms\n• Communications with our medical providers\n• Customer service interactions\n• Payment processing\n\nAutomatic Collection:\n• Cookies and similar tracking technologies\n• Server logs and usage data\n• Device and browser information\n\nThird-Party Sources:\n• Payment processors\n• Identity verification services\n• Analytics providers'
        },
        {
          title: 'How We Use Your Information',
          content: 'Primary Purposes:\n• Providing medical documentation services\n• Processing payments\n• Verifying identity and eligibility\n• Communicating about your service\n• Ensuring appropriate medical care and safety\n\nAdditional Uses:\n• Improving our services\n• Analyzing usage patterns\n• Preventing fraud and abuse\n• Complying with legal obligations\n• Responding to legal requests\n\nImportant Note: We will never sell your personal or medical information to third parties for marketing purposes.'
        },
        {
          title: 'Data Storage and Security',
          content: 'Security Measures:\n• 256-bit encryption for all data transmission\n• HIPAA-compliant data storage systems\n• Regular security audits and penetration testing\n• Multi-factor authentication for all system access\n• Secure data centers with physical security measures\n\nData Retention:\nWe retain your personal and medical information for:\n• Medical records: 7 years as required by law\n• Payment information: As required for tax and audit purposes\n• Account information: Until account deletion request\n\nSecurity Breach Notification: In the event of a security breach affecting your personal information, we will notify you in accordance with applicable laws and regulations.'
        },
        {
          title: 'Information Sharing and Disclosure',
          content: 'We Share Information With:\n• Licensed medical providers reviewing your case\n• Payment processors for transaction processing\n• Identity verification services\n• Legal authorities when required by law\n\nThird-Party Service Providers:\nAll third-party service providers are:\n• HIPAA-compliant where applicable\n• Bound by strict confidentiality agreements\n• Regularly audited for security compliance\n• Limited to specific, necessary functions\n\nWe Do Not:\n• Sell your personal information\n• Share your medical information for marketing purposes\n• Provide data to third parties for their own use'
        },
        {
          title: 'Your Rights and Choices',
          content: 'Your Rights Include:\n• Access your personal and medical information\n• Request corrections to your information\n• Request deletion of your information\n• Opt-out of marketing communications\n• Receive a copy of your records\n• File a complaint about privacy practices\n\nHow to Exercise Your Rights:\nYou can exercise these rights by:\n• Emailing legal@healthbridge.clinic\n• Submitting a request through your account settings\n\nResponse Timeline: We will respond to all privacy requests within 30 days.'
        },
        {
          title: 'Children\'s Privacy',
          content: 'Age Restrictions:\n• Users must be 18 or older to create an account\n• Parents/guardians must request notes for minors\n• Special verification required for minor-related requests\n\nInformation Collection for Users Under 18:\n• Parent/guardian consent required\n• Limited information collection\n• Enhanced privacy protections\n• Restricted marketing communications\n\nImportant Note: If we learn we have collected information from a child under 13 without parental consent, we will promptly delete that information.'
        },
        {
          title: 'International Data Transfer',
          content: 'Data Transfer Safeguards:\n• Standard contractual clauses\n• Data processing agreements\n• Privacy Shield compliance where applicable\n• Regional data storage where required\n\nInternational Privacy Rights:\n• GDPR compliance for EU residents\n• PIPEDA compliance for Canadian residents\n• Country-specific privacy protections'
        },
        {
          title: 'Specific State Privacy Rights',
          content: 'California Privacy Rights (CCPA):\n• Right to know what personal information is collected\n• Right to delete personal information\n• Right to opt-out of personal information sales\n• Right to non-discrimination for exercising rights\n\nVirginia Privacy Rights (VCDPA):\n• Right to access personal data\n• Right to correct inaccuracies\n• Right to data portability\n• Right to opt-out of targeted advertising\n\nOther State-Specific Rights: Additional privacy rights may apply based on your state of residence.'
        },
        {
          title: 'Changes to Privacy Policy',
          content: 'We may update this Privacy Policy periodically. We will notify you of any material changes by:\n• Posting the new Privacy Policy on our website\n• Sending an email to registered users\n• Displaying a prominent notice in our application\n\nYour Rights: If you disagree with any changes to this Privacy Policy, you must cease using our services and delete your account.'
        },
        {
          title: 'Contact Information',
          content: 'Privacy Officer:\nEmail: legal@healthbridge.clinic\nPhone: 1-972-597-0341\nAddress: 6014 Walnut Loop Rd, Charlotte, NC, 28277\n\nData Protection Officer:\nEmail: legal@healthbridge.clinic\nPhone: 1-972-597-0341\n\nResponse Time: We strive to respond to all privacy-related inquiries within 48 hours.'
        }
      ];

    return (
        <div>
            <Legal documentType='Privacy Policy' lastUpdated='December 28, 2024' companyName='HealthBridge Direct' companyEmail='legal@healthbridge.clinic' sections={privacySections}/>
        </div>
    );
};

export default Privacy;