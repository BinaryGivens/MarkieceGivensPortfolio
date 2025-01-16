import React, {useRef} from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Cards from '../Cards';
import Particle from '../Particle';
import HomePageInfo from '../HomePageInfo';


function Home() {
  const HomePageInfoRef = useRef(null);
  const scrollToHomePageInfo= () => {
    if (HomePageInfoRef.current) {
      HomePageInfoRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <>
      <Particle/>
      <HeroSection scrollToNext={scrollToHomePageInfo}/>
      <div ref={HomePageInfoRef}>
        <HomePageInfo/>
      </div>
      <Cards/>
      <Footer/>
    </>
  );
}


export default Home;
