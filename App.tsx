import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Modal from './components/Modal';
import { Photo } from './types';

const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <main className="bg-slate-rich min-h-screen w-full overflow-x-hidden selection:bg-gold selection:text-slate-rich">
      <Navbar />
      <Hero />
      <Gallery onPhotoSelect={setSelectedPhoto} />
      <About />
      <Contact />
      
      <Modal 
        selectedPhoto={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </main>
  );
};

export default App;