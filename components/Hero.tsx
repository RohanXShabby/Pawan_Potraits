import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-slate-rich">
      {/* Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
         {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-rich/30 via-transparent to-slate-rich z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <img 
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmospheric Wedding" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 overflow-hidden"
        >
           <span className="block font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold/80">
             Award Winning Photography
           </span>
        </motion.div>

        <motion.h1 
          style={{ y: textY }}
          className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none text-white mix-blend-overlay tracking-tight"
        >
          <motion.span 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            ETHEREAL
          </motion.span>
          <motion.span 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block italic text-gold-muted"
          >
            MOMENTS
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-0 w-full flex justify-between px-12 items-end"
        >
           <div className="hidden md:block text-left">
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Est. 2024</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Rajasthan, India</p>
           </div>
           
           <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto md:mx-0"></div>

           <div className="hidden md:block text-right">
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Scroll to Explore</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;