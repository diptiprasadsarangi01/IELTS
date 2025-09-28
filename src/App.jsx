import { main } from 'framer-motion/client'
import { useEffect, useState } from 'react'
import {Loder, Hero, Services,Banner,HowWorks,Testimonial,Price, Footer } from './components'


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loder />
      ) : (
        <main className="bg-white text-dark">
          <Hero />
          <Services />
          <Banner />
          <HowWorks />
          <Testimonial />
          <Price />
          <Footer />
        </main>
      )}
    </>
  );
}


export default App
