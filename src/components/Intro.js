import React from 'react';
import { Button } from './Button';
import './Intro.css';

function Intro() {
    return ( 
        <>  
            <div className="container">
                <div className="row intro">
                    <div className="col-lg-6 intro_left">
                        <h1>Find your own unique digital art</h1>
                        <p>Digital market place for crypto collection and Non-fungible tokens(NFTs).Discover ultimate digital art.</p>
                        <div className="intro_btn">
                            <Button buttonSize='btn_large'>Explore Art</Button>
                            <Button buttonStyle='btn_outline' buttonSize='btn_large' >Learn more</Button>
                        </div>

                        <div className="stats">
                            <div>
                               <p className="stats_number">100k</p>
                               <p className="stats_description">Art work</p>
                            </div>
                            <div>
                               <p className="stats_number">40k</p>
                               <p className="stats_description">Auction</p>
                            </div>
                            <div>
                               <p className="stats_number">23k</p>
                               <p className="stats_description">Artist</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 intro_pic">
                        
                        <div className="intro_card">
                            <div className="intro_card-header">
                                <img src="images/nft11.jpeg" alt="" />
                                <img src="images/nft4.jpg" alt="" />
                                <img src="images/nft5.jpg" alt="" />
                                <img src="images/nft8.avif" alt="" />
                            </div>
                            <div className="intro_card_img">
                                <img src="images/nft1.webp" alt="" />
                            </div>
                            <div className="intro_card_info">
                                <p className="intro_card_user-name">Rasta <br/> Haze</p>
                                <div className="intro_card_user-prices">
                                    <div className="intro_card_user-price">
                                        <p>Current bid</p>
                                        <span>5.58 Eth</span>
                                    </div>
                                    <div className="intro_card_user-price">
                                        <p>Ending in</p>
                                        <span>10m 34s</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            
            
                        <div className="intro_card">
                            <div className="intro_card-header">
                                <img src="images/nft11.jpeg" alt="" />
                                <img src="images/nft4.jpg" alt=""/>
                                <img src="images/nft5.jpg" alt=""/>
                                <img src="images/nft8.avif" alt=""/>
                            </div>
                            <div className="intro_card_img">
                                <img src="images/nft8.avif" alt=""/>
                            </div>
                            <div className="intro_card_info">
                                <p className="intro_card_user-name">Rasta <br/> Haze</p>
                                <div className="intro_card_user-prices">
                                    <div className="intro_card_user-price">
                                        <p>Current bid</p>
                                        <span>5.58 Eth</span>
                                    </div>
                                    <div className="intro_card_user-price">
                                        <p>Ending in</p>
                                        <span>10m 34s</span>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                    </div>
            
            
                    <div>
                        <h6>Supported by</h6>
                        <div className="footer_companies">
                            <span>coinbase</span>
                            <span>BINANCE</span>
                            <span>ethereum</span>
                        </div> 
                    </div>
                </div>
            </div>
        </>
                    
    );
}

export default Intro;