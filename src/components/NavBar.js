import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1024) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);


    return (
        <>
          <nav>
            <div className="container nav-links">
                
                <button onClick={handleClick}>
                    <i className={ click ? "uil uil-multiply" : "uil uil-align-left"}></i>  
                </button>
                
                <Link className="logo" to='/'>Artry</Link>
                <ul className={ click ? 'links active' : 'links'}>
                    <li>
                       <Link to='/' onClick={closeMobileMenu}>Home</Link>
                    </li>

                    <li>
                       <Link to='/marketplace' onClick={closeMobileMenu}>Market place</Link>
                    </li>
                    
                    <li>
                      <Link to='/collections' onClick={closeMobileMenu}>Collections</Link>
                    </li>
                </ul>
                <div className="nav_btn">
                    <Button>Connect wallet</Button>
                    <Button buttonStyle='btn_secondary' >Create Design</Button>
                </div>
            </div>
          </nav>
        </>
    );
}

export default NavBar;