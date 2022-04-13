import React from 'react';
import { Button } from './Button';
import './Card.css';

function Card(props) {
    return ( 
        <>
          <div className="card card_prod">
                <div className="card_header">
                    <p className="card_user-collection">{props.userCollection}</p>
                    <div className="card_user-info">
                        <img src={props.userImage} alt=""/>
                        <p>{props.userName}</p>
                    </div>
                </div>
                <div className="card_img">
                    <img src={props.nftImage} alt=""/>
                </div>
                <div className="card_info">
                    <p className="card_user-name">Rasta <br/> Haze</p>
                    <div className="card_user-prices">
                        <div className="card_user-price">
                            <p>Current bid</p>
                            <span>{props.price}</span>
                        </div>
                        <div className="card_user-price">
                            <p>Ending in</p>
                            <span>10m 34s</span>
                        </div>
                    </div>
                </div>
                <div className="card_events">
                    <Button buttonSize='btn_sm'> Place a bid</Button>
                    <Button buttonStyle='btn_outline' buttonSize='btn_sm'>View artwork</Button>
                </div>
                
            </div>
        </>
    );
}

export default Card;