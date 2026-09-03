import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';

import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { SelectedWork } from './components/SelectedWork';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader
            key="preloader"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Portfolio */}
      <div className="min-h-screen bg-canvas text-white flex flex-col selection:bg-white selection:text-black relative overflow-x-clip">
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          
          {/* 01. Hero */}
          <Hero />

          {/* 02. Intro / Capabilities */}
          <Intro />

          {/* 03. Selected Work */}
          <SelectedWork />

          {/* 04. Infinite Marquee */}
          <Marquee />

          {/* 05. About */}
          <About />

          {/* 06. Stack */}
          <Stack />

          {/* 07. Process / How I Work */}
          <Process />

          {/* 08. Contact */}
          <Contact />

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}