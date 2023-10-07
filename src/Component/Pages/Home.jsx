import React from 'react'
import "./Home.css";
import  img8 from"./8.png"
import  img2 from"./2.png"
import  img3 from"./3.png"
import  img9 from"./9.png"
import  img7 from"./7.png"
import Slide from './Slide';

export default function Home() {
  return (
    <div>
      {/* heading */}
      <div className="heading">
      <h1><span>Transforming</span><br/> Spaces with Art</h1>
      </div>


      {/* video */}

       <Slide />

      {/* <div className="drag-container">
        <div className="spin-container">
          
        <img src={img8} alt=""/>
        <img src={img2} alt=""/>
        <img src={img3} alt=""/>
        <img src={img9} alt=""/>
        <img src={img7} alt=""/>


        <p>FICHA TÉCNICA Art Gallery</p>
      </div>

      <div className="ground"></div>
      </div>

      <div className="musicControler"></div> */}






      {/* what we have done */}
      <div className="doneText">
        <p>What we've done</p>
      </div>



      {/* Trending Art Work */}

      <div style={{ fontSize: '2em' }}>
      <h1>Browse trending artworks</h1>
      </div>


      <div className="TrendingArt">
       
        <img src={img8} alt='error'/>
        <img src={img2} alt='error'/>
        <img src={img3} alt='error'/>
        <img src={img9} alt='error'/>
        {/* <img src={img7} alt='error'/> */}

      </div>

      <button className='ExploreButton'>Explore</button>



      {/* instrument */}

      <div className="MarlyInstrument">
        <h2>Healing instruments, like singing bowls and flutes, Soothe<br/> The soul and promote inner peace. Explore their calming<br/> melodies for relaxation and emotional well-being.</h2>
      
      <div className="MarlyImg">
        <img src="https://katoombamusic.com.au/wp-content/uploads/2021/07/67001-400x400.jpg" alt= "error"/>
        
        <img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/338502020/XG/NA/PI/25680909/product-jpeg.jpg" alt= "error"/>
        
        <img src="https://www.tribalvillage.com.au/wp-content/uploads/2021/11/11-12.jpg" alt= "error"/>
      </div>

    
      <button className="DiscoverBtn">Discover</button>

      
      </div>
    </div>
  )
}
