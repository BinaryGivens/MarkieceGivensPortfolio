import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import logo from '../Assets/logo.png';



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
            <img src={logo} alt="Logo" className="navbar-logo-img" />
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
              <a
                href = "./Markiece_Givens_Master_Resume.pdf"
                target= "_blank"
                rel="noopener noreferrer"
                style={{color: 'white'}}
              >
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links-mobile nav-contact' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' buttonSize={'btn--small'} className={'btn-cont'} to='/Contact'>CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}


export default Navbar;
