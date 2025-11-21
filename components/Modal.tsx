import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Photo } from '../types';

interface ModalProps {
  selectedPhoto: Photo | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedPhoto, onClose }) => {
  return (
    <AnimatePresence>
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-rich/95 backdrop-blur-md p-4 md:p-10"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-6 text-white/50 hover:text-gold z-50 p-2 transition-colors"
            onClick={onClose}
          >
            <X size={32} strokeWidth={1} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
            
            <div className="mt-8 text-center">
              <h3 className="font-serif text-2xl text-white italic mb-2">{selectedPhoto.title}</h3>
              <p className="font-sans text-gold/60 text-[10px] tracking-[0.2em] uppercase">{selectedPhoto.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;