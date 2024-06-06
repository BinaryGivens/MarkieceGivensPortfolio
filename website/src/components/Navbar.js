import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';




function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); 
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960)
      setButton(false);
    else
      setButton(true);
  };
  useEffect(() => {
    showButton()
  },[]);

    window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className="navbar-logo"onClick={closeMobileMenu}>
            MARKIECE GIVENS <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active'  : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Aboutme' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Resume' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' className={'btn-cont'} to='/Contact'>CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}


export default Navbar;
