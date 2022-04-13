import React from 'react';
import Collect from './Collect';
import './Collects.css';

function Collects() {
    return ( 
        <section className="collections">
            <h2>Collections</h2>
    
            <div className="container collections_card">
                <Collect
                    collectImg={'/images/nft10.webp'}
                    collectName={'Yoruba Damon'} 
                    collectDes={'This is a fine collection of Yoruba collections'}/>

                <Collect
                    collectImg={'/images/nft9.jpeg'}
                    collectName={'Yoruba Damon'} 
                    collectDes={'This is a fine collection of Yoruba collections'}/> 

                <Collect
                    collectImg={'/images/coll1.jpg'}
                    collectName={'Yoruba Damon'} 
                    collectDes={'This is a fine collection of Yoruba collections'}/> 

                <Collect
                    collectImg={'/images/nft4.jpg'}
                    collectName={'Yoruba Damon'} 
                    collectDes={'This is a fine collection of Yoruba collections'}/> 

                <Collect
                    collectImg={'/images/coll3.jpeg'}
                    collectName={'Yoruba Damon'} 
                    collectDes={'This is a fine collection of Yoruba collections'}/> 

                <Collect
                    collectImg={'/images/coll6.jpg'}
                    collectName={'Yoruba Damon'} 
                    collectDes={'This is a fine collection of Yoruba collections'}/>     
            </div>
              
        </section>
    );
}

export default Collects;