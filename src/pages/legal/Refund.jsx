import React from 'react';
import Legal from '../../components/Legal';

const Refund = () => {
    const refundSections = [
        {
          title: 'Introduction',
          content: 'At HealthBridge Direct, we strive to provide the best service possible. If you are not satisfied with our service, we offer a refund policy as outlined below. Please read this policy carefully to understand your rights and obligations.'
        },
        {
          title: 'Eligibility for Refunds',
          content: 'You may be eligible for a refund if:\n• You did not receive the service you paid for\n• The service was not as described\n• There was an error in the transaction\n\nPlease note that refunds are not available for:\n• Services that have been fully rendered\n• Change of mind after the service has been provided\n• Any other reason not specified in this policy'
        },
        {
          title: 'How to Request a Refund',
          content: 'To request a refund, please contact our customer service team at support@healthbridge.clinic with the following information:\n• Your name and contact information\n• The date of the transaction\n• The reason for the refund request\n\nOur team will review your request and respond within 7 business days.'
        },
        {
          title: 'Processing Refunds',
          content: 'If your refund request is approved, we will process the refund to your original method of payment within 14 business days. You will receive a confirmation email once the refund has been processed.'
        },
        {
          title: 'Contact Information',
          content: 'If you have any questions about our refund policy, please contact us at:\nEmail: support@healthbridge.clinic\nPhone: 1-972-597-0341\nAddress: 6014 Walnut Loop Rd, Charlotte, NC, 28277'
        }
      ];

    return (
        <div>
            <Legal documentType='Refund Policy' lastUpdated='December 28, 2024' companyName='HealthBridge Direct' companyEmail='support@healthbridge.clinic' sections={refundSections}/>
        </div>
    );
};

export default Refund;