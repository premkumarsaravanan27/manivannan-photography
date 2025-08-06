import React from 'react';
import { Camera, ArrowDown } from 'lucide-react';
import homePic from '../images/homepic.jpg'


const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
       <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:`url(${homePic})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Camera size={48} className="text-amber-400 mr-4" />
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2">LUMINA</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">PHOTOGRAPHY</p>
          </div>
        </div>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Capturing life's most precious moments with artistic vision and timeless elegance. 
          Every frame tells a story, every image holds a memory.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-none font-medium transition-all duration-300 hover:scale-105"
          >
            VIEW PORTFOLIO
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white hover:bg-white hover:text-stone-800 text-white px-8 py-3 rounded-none font-medium transition-all duration-300"
          >
            BOOK SESSION
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-400 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;