import React, {useRef} from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Cards from '../Cards';
import Particle from '../Particle';

function Home() {
  const cardsRef = useRef(null);
  const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <>
      <Particle/>
      <HeroSection scrollToNext={scrollToCards}/>
      <div ref={cardsRef}>
        <Cards/>
      </div>
      <Footer/>
    </>
  );
}


export default Home;
