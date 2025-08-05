import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Heart, number: '1000+', label: 'Moments Captured' },
    { icon: Award, number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                About Lumina
              </h2>
              <div className="w-20 h-1 bg-amber-600 mb-8"></div>
            </div>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              Welcome to Lumina Photography, where every moment becomes a timeless work of art. 
              I'm passionate about capturing the authentic emotions, genuine connections, and 
              beautiful details that make your story uniquely yours.
            </p>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              With over five years of experience in wedding and portrait photography, I believe 
              that the best images come from building genuine relationships with my clients. 
              My approach is relaxed, natural, and focused on creating an experience that feels 
              comfortable and fun.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-stone-800">{stat.number}</div>
                  <div className="text-sm text-stone-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-stone-200 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Photographer portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;