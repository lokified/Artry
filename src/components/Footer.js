import React from 'react';
import './Footer.css';

function Footer() {
    return ( 
        <div className='footer'>
            <section className="container">
                <div className="footer_container">
        
                    <div className="footer_1">
                        <h5>Artry</h5>
        
                        <p>
                            Digital market place for crypto collection 
                            and Non-fungible tokens(NFTs).Discover ultimate
                            digital art.
                        </p>
        
                    </div>
        
                    <div className="footer_2">
                        <h5>Quick links</h5>
        
                        <ul className="quick_links">
                            <li><a href="#"> Home</a></li>
                            <li><a href="#">Market</a></li>
                            <li><a href="#">Artist</a></li>
                            <li><a href="c#">Collections</a></li>
        
                        </ul>
                    </div>

                    <div className='footer_3'>
                        <h5>Contact Us</h5>
                        <a href='#'>Support</a>
                        <a href='#'>Destinations</a>
                        <a href='#'>Sponsorships</a>
                    </div>
        
                    <div className="footer_4">
                        <h5>Contacts</h5>
                        <p>+254725992494</p>
                        <p>artry@gmail.com</p>
        
        
                        <ul className="footer_socials">
                            <li><a href="#"><i className="uil uil-facebook-f"></i></a></li>
                            <li><a href="#"><i className="uil uil-instagram-alt"></i></a></li>
                            <li><a href="#"><i className="uil uil-twitter"></i></a></li>
                            <li><a href="#"><i className="uil uil-linkedin-alt"></i></a></li>
                        </ul>
                    </div>
        
                </div>
        
                <div className="footer_5">
                    <p>&copy;2022. Artry</p>
                </div>
    
            </section>    
        </div>
    );
}

export default Footer;