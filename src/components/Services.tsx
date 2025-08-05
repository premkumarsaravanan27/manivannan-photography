import React from 'react';
import { Camera, Heart, Users, Calendar, Star, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage with engagement session included',
      features: ['8-10 hours coverage', 'Engagement session', '500+ edited photos', 'Online gallery'],
      price: 'From $2,500'
    },
    {
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Individual, couple, and family portrait photography',
      features: ['1-2 hours session', 'Multiple locations', '50+ edited photos', 'Print release'],
      price: 'From $350'
    },
    {
      icon: Calendar,
      title: 'Event Photography',
      description: 'Corporate events, parties, and special celebrations',
      features: ['Flexible hours', 'Candid moments', '200+ edited photos', 'Quick turnaround'],
      price: 'From $150/hour'
    }
  ];

  const addOns = [
    { icon: Star, service: 'Second Photographer', price: '+$500' },
    { icon: Clock, service: 'Extended Coverage', price: '+$200/hour' },
    { icon: Camera, service: 'Drone Photography', price: '+$300' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Services</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your special moments
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-50 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <service.icon className="w-12 h-12 text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-stone-600 flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-amber-600">{service.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-stone-50 p-8 rounded-none">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white">
                <div className="flex items-center">
                  <addon.icon className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="font-medium text-stone-800">{addon.service}</span>
                </div>
                <span className="text-amber-600 font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-medium transition-all duration-300 hover:scale-105"
          >
            GET A CUSTOM QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;