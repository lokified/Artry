import React from 'react';
import Card from './Card';
import './Cards.css';

function Cards() {

    return ( 
        <section className="live_auctions">
          <h3>Live Auctions</h3>
          <div className="container cards">
            

              <Card 
                userCollection='Haze Monkey'
                userName='Keith Adams'
                userImage='/images/peaky.png'
                nftImage='/images/nft1.webp'
                price='1.0 ETH'/>

              <Card 
                userCollection='Breeze'
                userName='Norman Douglas'
                userImage='/images/peaky.png'
                nftImage='/images/ngif1.jpeg'
                price='8.4 ETH'/>


              <Card 
                userCollection='Neight'
                userName='Anu Schwatz'
                userImage='/images/peaky.png'
                nftImage='/images/nft3.jpg'
                price='2.14 ETH'/>


              <Card 
                userCollection='Golbot'
                userName='frank mccromath'
                userImage='/images/peaky.png'
                nftImage='/images/ngif2.jpeg'
                price='0.98 ETH'/>

  
              <Card 
                userCollection='Cobbelpot'
                userName='Luis Colon'
                userImage='/images/peaky.png'
                nftImage='/images/nft5.jpg'
                price='1.111 ETH'/>


              <Card 
                userCollection='Brucy'
                userName='Roland Brooks'
                userImage='/images/peaky.png'
                nftImage='/images/ngif3.png'
                price='1.56 ETH'/>


              <Card 
                userCollection='Dreezy'
                userName='Rae Malekoff'
                userImage='/images/peaky.png'
                nftImage='/images/nfft7.jpeg'
                price='5.7 ETH'/>


              <Card 
                userCollection='Hay Man'
                userName='Denise Andres'
                userImage='/images/peaky.png'
                nftImage='/images/ngif4.gif'
                price='3.4 ETH'/>


              <Card 
                userCollection='Roboch'
                userName='Carl Ferrara'
                userImage='/images/peaky.png'
                nftImage='/images/ngif5.gif'
                price='0.49 ETH'/>


              <Card 
                userCollection='Medio'
                userName='Justin Gray'
                userImage='/images/peaky.png'
                nftImage='/images/nft10.webp'
                price='0.14 ETH'/>

              <Card 
                userCollection='Brazino'
                userName='Ashley Revell'
                userImage='/images/peaky.png'
                nftImage='/images/nft11.jpeg'
                price='5.8 ETH'/>


              <Card 
                userCollection='Elons'
                userName='Danny Cannon'
                userImage='/images/peaky.png'
                nftImage='/images/nft12.gif'
                price='0.47 ETH'/>
              
          </div>
        </section>
     );
}

export default Cards;