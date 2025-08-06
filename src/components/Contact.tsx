import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Camera } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your vision and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-2">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="family">Family Portrait</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-stone-300 focus:border-amber-600 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your vision, preferred style, location, and any other details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 font-medium transition-all duration-300 flex items-center justify-center hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-stone-800">Email</p>
                    <p className="text-stone-600">hello@luminaphoto.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-stone-800">Phone</p>
                    <p className="text-stone-600">+91 8610548497</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-stone-800">Location</p>
                    <p className="text-stone-600">Arani,TN <br />Available for travel worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Follow My Work</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <Camera size={20} />
                </a>
              </div>
              <p className="text-stone-600 mt-4">
                Follow @stories_by_mani for daily inspiration and behind-the-scenes content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;