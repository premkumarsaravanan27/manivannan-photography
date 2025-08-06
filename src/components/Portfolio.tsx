import React, { useState } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Baby photoshoot', 'Weddings', 'Pre & post wedding',];
  
  const images = [
    { id: 1, src: img1, category: 'Pre & post wedding', alt: 'Pre & post wedding photography' },
    { id: 2, src: img2, category: 'Pre & post wedding', alt: 'Pre & post wedding photography' },
    { id: 3, src: img3, category: 'Pre & post wedding', alt:'Pre & post wedding photography' },
    { id: 4, src: img4, category: 'Weddings', alt: 'Weddings photos' },
    { id: 5, src: img5, category: 'Weddings', alt: 'Weddings photos' },
    { id: 6, src: img6, category: 'Weddings', alt: 'Wedding photos' },
    { id: 7, src: img7, category: 'Baby photoshoot', alt: 'keylight photography' },
    { id: 8, src: img8, category: 'Baby photoshoot', alt: 'keylight photography' },
    { id: 9, src: img9, category: 'Baby photoshoot', alt: 'keylight photography' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A curated collection of moments that tell beautiful stories
          </p>
        </div>

      
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-stone-200 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Portfolio image"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;