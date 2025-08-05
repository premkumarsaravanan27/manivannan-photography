import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Camera } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'manivannanphotography@gmail.com',
      link: 'mailto:manivannanphotography.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 861054897',
      link:null
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Arani , TN',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      link: null
    }
  ];

  const services = [
    'Portrait Sessions',
    'Wedding Photography',
    'Event Coverage',
    'Commercial Work',
    'Fine Art Prints',
    'Photo Editing'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-thin tracking-wider mb-4">CONTACT</h1>
          <div className="w-20 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your vision 
            and create something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-thin tracking-wide mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent font-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent font-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                  SUBJECT
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent font-light"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none transition-colors bg-transparent font-light resize-none"
                  placeholder="Tell me about your project, vision, and any specific requirements..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-4 font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm font-light text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm font-light text-center"
                >
                  Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-thin tracking-wide mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <info.icon className="w-5 h-5 text-black mt-1" />
                    <div>
                      <h3 className="font-light text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 font-light hover:text-black transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-light">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gray-50 p-8"
            >
              <div className="flex items-center mb-4">
                <Camera className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-thin tracking-wide">Let's Create Together</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Every project is unique, and I'd love to hear about your vision. 
                Whether it's a wedding, portrait session, or commercial work, 
                let's discuss how we can bring your ideas to life.
              </p>
              <div className="text-sm font-light text-gray-500">
                <p>• Free initial consultation</p>
                <p>• Custom packages available</p>
                <p>• Flexible scheduling</p>
                <p>• Professional editing included</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;