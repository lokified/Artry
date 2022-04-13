import React from 'react';
import './Collect.css';

function Collect(props) {
    return ( 
        <div className="card card_col">
            <div className='card_col_img'>
                <img src={props.collectImg}/>
            </div>

            <div className="card_col_info">
                
                <h5>{props.collectName}</h5>
    
                <p>
                    {props.collectDes}
                </p>
            </div>
        </div>
    );
}

export default Collect;