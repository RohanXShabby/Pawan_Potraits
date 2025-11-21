import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../types';

const generatePhotos = (): Photo[] => {
  const baseUrls = [
    "https://images.unsplash.com/photo-1610173827002-6ebc5d013175?q=80&w=800&fit=crop", // B&W mood
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&fit=crop", // Hands
    "https://images.unsplash.com/photo-1532650112186-38e4b564732b?q=80&w=800&fit=crop", // Silhouette
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&fit=crop", // Ceremony
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&fit=crop", // Jewelry
    "https://images.unsplash.com/photo-1545231497-527e1e2d593b?q=80&w=800&fit=crop", // Couple
    "https://images.unsplash.com/photo-1623692662868-07f7957c988e?q=80&w=800&fit=crop", // Details
    "https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?q=80&w=800&fit=crop", // Decor
  ];

  const categories = ['Editorial', 'Ceremony', 'Emotion', 'Details'];
  
  return Array.from({ length: 12 }).map((_, i) => ({
    id: `photo-${i}`,
    width: i % 3 === 0 ? 800 : 600,
    height: i % 3 === 0 ? 600 : 800,
    url: baseUrls[i % baseUrls.length],
    title: [
      "Silent Vows", "The Touch", "Shadows & Light", "Sacred Fire", 
      "Heirloom", "Unity", "Golden Hour", "Textures",
      "Veiled", "Reflection", "First Look", "Departure"
    ][i],
    category: categories[i % categories.length],
    description: "Fine Art Wedding Photography"
  }));
};

interface GalleryProps {
  onPhotoSelect: (photo: Photo) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onPhotoSelect }) => {
  const [filter, setFilter] = useState('All');
  const photos = useMemo(() => generatePhotos(), []);
  
  const categories = ['All', 'Editorial', 'Emotion'];

  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(p => p.category === filter || (filter === 'Editorial' && p.category === 'Ceremony'));

  return (
    <section id="gallery" className="py-32 px-4 md:px-12 bg-slate-rich relative">
      {/* Ambient Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black to-transparent pointer-events-none opacity-50" />

      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/5 pb-8">
            <h2 className="font-serif text-5xl md:text-7xl text-white font-light tracking-tight">
            Selected <span className="italic text-gold opacity-80">Works</span>
            </h2>
            
            <div className="flex gap-8 mt-8 md:mt-0">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                    filter === cat 
                    ? 'text-gold border-b border-gold pb-1' 
                    : 'text-white/40 hover:text-white'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
            {filteredPhotos.map((photo, index) => (
            <motion.div
                key={photo.id}
                layoutId={photo.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className={`group relative cursor-pointer ${index % 2 === 0 ? 'md:translate-y-12' : ''}`} // Offset grid
                onClick={() => onPhotoSelect(photo)}
            >
                <div className="overflow-hidden bg-slate-light aspect-[4/5] relative">
                <motion.img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="mt-6 flex justify-between items-end opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                        <p className="font-serif text-2xl text-white italic">{photo.title}</p>
                        <p className="font-sans text-[9px] text-gold uppercase tracking-widest mt-1">{photo.category}</p>
                    </div>
                    <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;