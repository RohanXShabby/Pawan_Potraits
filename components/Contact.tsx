import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-rich text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <div className="flex flex-col items-start">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-8"
          >
            Inquire
          </motion.p>
          
          <motion.a 
            href="mailto:hello@vivah.com"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative inline-block"
          >
            <h2 className="font-serif text-6xl md:text-9xl text-white hover:text-white/90 transition-colors cursor-pointer">
              hello@vivah.com
            </h2>
            <motion.div 
                className="h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500 ease-in-out mt-4"
            />
            <ArrowUpRight className="absolute -top-4 -right-12 md:-right-20 w-12 h-12 md:w-20 md:h-20 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 pt-12 border-t border-white/5">
          <div>
            <h3 className="font-serif text-2xl italic text-white/80 mb-6">Studio</h3>
            <p className="font-sans text-white/40 text-sm leading-loose tracking-wide">
              Jaipur, Rajasthan<br/>
              Available Worldwide
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl italic text-white/80 mb-6">Socials</h3>
            <div className="flex flex-col space-y-4 font-sans text-sm text-white/40 tracking-wide">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Behance</a>
              <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
            </div>
          </div>

          <div className="md:text-right flex flex-col justify-end">
            <p className="font-sans text-[10px] text-white/20 uppercase tracking-widest">
              © 2024 Vivah. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;