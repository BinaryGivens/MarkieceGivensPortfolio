import React, {useRef} from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer'

function Home() {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <>
      <HeroSection scrollToNext={scrollToFooter}/>
      <div ref={footerRef}>
        <Footer/>
      </div>
    </>
  );
}


export default Home;
