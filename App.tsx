
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { LocationBadge } from './components/LocationBadge';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Background Image Container */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center grayscale-[10%] transition-all duration-[2500ms] ease-out
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110 blur-xl'}
        `}
        style={{ 
          backgroundImage: `url('https://raw.githubusercontent.com/woodhouserec/somedesigner/main/Generated%20Image%20January%2008%2C%202026%20-%209_23PM.jpeg')`, 
          backgroundPosition: '50% 20%'
        }}
      />
      
      {/* Film Grain Texture Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Subtle Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[2] transition-opacity duration-[2500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />

      {/* Main Content Layout */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-[1500ms] delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Navbar />
        
        {/* Отступы px-10 теперь точно соответствуют Navbar */}
        <main className="flex-grow flex items-center px-10 relative">
          <LocationBadge />
          <Hero />
        </main>

        <footer className="pb-6 pt-4">
          <Marquee text="Igor Bogdanov / Somedesigner /" />
        </footer>
      </div>
    </div>
  );
};

export default App;
