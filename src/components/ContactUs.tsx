import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: 0,
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const dataValidation = (formData: { name: string; phoneNumber: number; message: string }) => {
        const phonePattern = /^(\+2547\d{8}|07\d{8})$/;
        if (!formData.name || !formData.phoneNumber || !formData.message) {
            setStatus({ type: 'error', message: 'All fields are required.' });
            return false;
        }
        if (!phonePattern.test(formData.phoneNumber.toString())) {
            setStatus({ type: 'error', message: 'Please enter a valid Kenyan phone number.' });
            return false;
        }
        return true;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });
        if (!dataValidation(formData)) {
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/sendSMS', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We will contact you soon.'
                });
                // Reset form
                setFormData({
                    name: '',
                    phoneNumber: 0,
                    message: ''
                });
            } else {
                setStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
          console.log('Error submitting form:', error);
            setStatus({
                type: 'error',
                message: 'An error occurred. Please try again or call us directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact' className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">Contact Our Offices</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Your Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Phone Number</label>
                                <input 
                                    type="number"
                                    name="phoneNumber"
                                    pattern="^(\+2547\d{8}|07\d{8})$"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea 
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg ${
                                    status.type === 'success' 
                                        ? 'bg-green-100 text-green-700 border border-green-400' 
                                        : 'bg-red-100 text-red-700 border border-red-400'
                                }`}>
                                    {status.message}
                                </div>
                            )}
                            
                            <button 
                                type="submit"
                                disabled={loading}
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-6 text-green-900">Our Kenyan Offices</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="text-green-600 text-xl mr-4"><FaMapMarkerAlt /></div>
                                    <div>
                                        <div className="font-bold">Nairobi Headquarters</div>
                                        <div className="text-gray-600">Mombasa Road, Nairobi, Kenya</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-green-600 text-xl mr-4"><FaMapMarkerAlt /></div>
                                    <div>
                                        <div className="font-bold">Mombasa Branch</div>
                                        <div className="text-gray-600">Port Reitz Road, Mombasa, Kenya</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-green-600 text-xl mr-4"><FaPhone /></div>
                                    <div>
                                        <div className="font-bold">Phone</div>
                                        <div className="text-gray-600">+254 112 820700</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-green-600 text-xl mr-4"><FaEnvelope /></div>
                                    <div>
                                        <div className="font-bold">Email</div>
                                        <div className="text-gray-600">info@kenyaprohaul.co.ke</div>
                                    </div>
                                </div>
                                
                                <div className="pt-4">
                                    <div className="font-bold mb-2">Hours of Operation</div>
                                    <div className="text-gray-600">Monday - Friday: 7:00 AM - 7:00 PM</div>
                                    <div className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</div>
                                    <div className="text-gray-600">Sunday: Emergency services only</div>
                                </div>
                                
                                <div className="pt-4">
                                    <div className="font-bold mb-2">Emergency Contact</div>
                                    <div className="text-gray-600">After hours: +254 112 820700</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;