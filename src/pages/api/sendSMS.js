

import africastalking from 'africastalking';

// Initialize Africa's Talking
const credentials = {
    apiKey: process.env.AFRICASTALKING_API_KEY,
    username: process.env.AFRICASTALKING_USERNAME || 'truckers'
};

const AT = africastalking(credentials);
const sms = AT.SMS;

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, phoneNumber, message } = req.body;

        // Validate input
        if (!name || !phoneNumber || !message) {
            console.log('Validation Error: Missing fields');
            return res.status(400).json({ 
                error: 'Name, email and message are required' 
            });
        }

        // Create SMS message for your office

        const officePhone = process.env.OFFIICE_PHONE || '+254788427394';
        const smsMessage = `New Contact Form Submission:\nFrom: ${name}\nPhone: ${phoneNumber}\nMessage: ${message}`;

        // Send SMS to office
        const options = {
            to: [officePhone],
            message: smsMessage,
            
        };

        const result = await sms.send(options);
        console.log('SMS Result:', result);
        const recipient = result.SMSMessageData.Recipients[0];
        
        if (recipient.statusCode === 100 || recipient.statusCode === 101) {
            return res.status(200).json({
                success: true,
                message: 'Message sent successfully',
                data: {
                    status: recipient.status,
                    cost: recipient.cost,
                    messageId: recipient.messageId
                }
            });
        } else {
            return res.status(400).json({
                success: false,
                error: 'Failed to send SMS',
                details: recipient
            });
        }

    } catch (error) {
        console.log('SMS Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to send message',
            message: error.message
        });
    }
}