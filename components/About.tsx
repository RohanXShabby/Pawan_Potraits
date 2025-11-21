import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-slate-rich relative overflow-hidden">
      {/* Subtle Gold Gradient Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                 <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 border-l border-gold pl-4">The Philosophy</p>
            </motion.div>
           
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-light mb-12"
            >
              We do not just take pictures. <br/>
              <span className="text-white/30">We curate </span> 
              <span className="italic text-gradient-gold">visual poetry.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-white/60 font-sans text-sm leading-relaxed tracking-wide">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                    In the cacophony of an Indian wedding, silence is often missed. We search for that silence. The pause before the ritual, the tear before the smile, the glance that speaks volumes. Our approach is minimal, unobtrusive, and deeply observant.
                </motion.p>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Drawing inspiration from fine art and cinema, we craft images that are not just documentation but pieces of art worthy of a gallery. Every frame is deliberate, every angle considered.
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "circOut" }}
                className="w-full h-[1px] bg-white/10 mt-16 origin-left"
            />
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-5 relative h-full min-h-[500px]">
             <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full absolute inset-0"
             >
                 <img 
                    src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=800&fit=crop" 
                    alt="Artist Perspective" 
                    className="w-full h-full object-cover filter sepia-[.2] grayscale-[0.2]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-rich via-transparent to-transparent opacity-50"></div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;