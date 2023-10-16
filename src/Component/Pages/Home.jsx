import React from 'react'
import "./Home.css";
import { useState } from 'react';
import  img8 from"./8.png"
import  img2 from"./2.png"
import  img3 from"./3.png"
import  img9 from"./9.png"
import  img7 from"./7.png"
import { MyAuthContext } from '../Context/AuthContextProvide';
import { useContext } from 'react';


export default function Home() {


  // logic for slider

  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState("0%");
  const [forward, setForward] = useState(true);
  const {lang} = useContext(MyAuthContext);

  
  function shiftImage(count) {
    switch (count){
      
      case 0: 
      setMargin("0%");
      break;

      case 1:
      setMargin("-10%");
      break;

      case 2:
      setMargin("-20%");
      break;

      case 3:
      setMargin("-30%");
      break;

      case 4:
      setMargin("-40%");
      break;

      default:
        break;

    }
  }


  if(forward){

    for(let i=0; i<5; i++){

      setTimeout(() =>{

        if(count === 5){
          setForward(false);
  
        }else {
          setCount(count + 1);
            shiftImage(count);
          }

      }, 1000);

      // console.log(count);

    }
  }else {

    for(let i=5; i>0; i--){

      setTimeout(() =>{

        if(count === 0){
          setForward(true);
  
        }else {
          setCount(count - 1);
            shiftImage(count);
          }

      }, 1000);

      // console.log(count);

    }

  }




  if(!lang){

    return (
      <div>
        {/* heading */}
        <div className="heading">
        <h1>
          <span>Transformation</span>
          <br/> Espacios con Arte</h1>
        </div>
  
  
        {/* video */}
  
        <React.Fragment>
  
          <div className="carousel-container">
            <div className="images-container">
             
              <div className="image" style={{marginLeft: margin}}>
                <img src={img7} alt="img7" />
                </div>
  
                <div className="image">
                <img src={img2} alt="img2" />
                </div>
  
                <div className="image">
                <img src={img3} alt="img3" />
                </div>
  
                <div className="image">
                <img src={img8} alt="img8" />
                </div>
  
                <div className="image">
                <img src={img9} alt="img9" />
                </div>
              
            </div>
  
            
            </div> 
        </React.Fragment>
  
  
  
  
        {/* what we have done */}
        <div className="doneText">
          <p>lo que hemos hecho</p>
        </div>
  
  
  
        {/* Trending Art Work */}
  
        <div className="TrendingArtText">
        <h1>Explorar obras de arte de moda</h1>
        </div>
  
  
        <div className="TrendingArt">
         
          <img src={img8} alt='error'/>
          <img src={img2} alt='error'/>
          <img src={img3} alt='error'/>
          <img src={img9} alt='error'/>
          {/* <img src={img7} alt='error'/> */}
  
        </div>
  
        <button className='ExploreButton'>Explorar</button>
  
  
  
        {/* instrument */}
  
        <div className="MarlyInstrument">
          <h2>Los instrumentos curativos, como cuencos tibetanos y flautas, calman<br/>El alma y promover la paz interior. Explora su calma<br/>Melodías para la relajación y el bienestar emocional.</h2>
        
        <div className="MarlyImg">
          <img src="https://katoombamusic.com.au/wp-content/uploads/2021/07/67001-400x400.jpg" alt= "error"/>
          
          <img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/338502020/XG/NA/PI/25680909/product-jpeg.jpg" alt= "error"/>
          
          <img src="https://www.tribalvillage.com.au/wp-content/uploads/2021/11/11-12.jpg" alt= "error"/>
        </div>
  
      
        <button className="DiscoverBtn">Descubrir</button>
  
        
        </div>
  
  
        {/* New in Design */}
  
  
        <h1 className='desc'>Descripción de pinturas</h1>
  
        <div className="DesignNew">
  
         
          <div>
          <img src="https://artstreet.in/cdn/shop/products/81TNNiaHZEL._SL1500_878x700.jpg?v=1687353797" alt="" />
          <h3>Pintura al óleo</h3>
          
          <p>La pintura al óleo es un medio artístico versátil y duradero. Consiste en<br/>pigmentos suspendidos en aceites secantes, típicamente aceite de linaza. Los artistas aprecian<br/> su tiempo de secado lento, lo que permite mezclar y aplicar capas. Pinturas de óleo<br/>son conocidos por sus ricos colores, profundidad y durabilidad, lo que los hace<br/> Una opción preferida para muchos pintores.</p>
         
          </div>
  
          <div>
          <img src="https://live.staticflickr.com/7015/6541061641_0796af88c7_b.jpg" alt="" />
          <h3>Pintura al carbono</h3>
          
          <p>La pintura de carbono es un recubrimiento conductor impregnado de carbono.<br/> partículas Se usa comúnmente en electrónica e industria para.<br/>crear conexiones eléctricas, blindaje EMI/RFI y como<br/>componente en sensores. Su versatilidad y conductividad hacen<br/>Es un material valioso para diversas aplicaciones.</p>
         
          </div>
  
          <div>
          <img src="https://azure.wgp-cdn.co.uk/app-painters-online/posts/MMBorrowdale.png?&format=webp&webp.quality=85&scale=down" alt="" />
          <h3>Pintura Mixta</h3>
          
          <p>La pintura mixta se refiere a una mezcla de varios colores o pigmentos,<br/>dando como resultado un nuevo tono o matiz. Los artistas y diseñadores utilizan<br/>pintura mezclada para lograr paletas de colores únicas y personalizadas,<br/>agregando profundidad y creatividad a sus proyectos</p>
         
          </div>
  
          <div>
          <img src="https://i0.wp.com/doodlewash.com/wp-content/uploads/2020/06/One-Color-Monochromatic-Watercolor-Painting-Tutorial.jpg?fit=1024%2C749&ssl=1" alt="" />
          <h3>Pintura de acuarela</h3>
          
          <p>Pintura de acuarela, a menudo denominada acuarela o aquarelle,<br/>Es una técnica de pintura donde los pigmentos se suspenden en<br/>Soluciones a base de agua. Los artistas lo utilizan por su fluidez y transparencia, permitiendo composiciones delicadas y vibrantes. Es un versátil y<br/>Medio expresivo, popular por sus cualidades luminosas y etéreas.</p>
         
          </div>
        </div>
  
  
  
  
        <footer>
  
        </footer>
      </div>
    )

  }
  return (
    <div>
      {/* heading */}
      <div className="heading">
      <h1>
        <span>Transforming</span>
        <br/> Spaces with Art</h1>
      </div>


      {/* video */}

      <React.Fragment>

        <div className="carousel-container">
          <div className="images-container">
           
            <div className="image" style={{marginLeft: margin}}>
              <img src={img7} alt="img7" />
              </div>

              <div className="image">
              <img src={img2} alt="img2" />
              </div>

              <div className="image">
              <img src={img3} alt="img3" />
              </div>

              <div className="image">
              <img src={img8} alt="img8" />
              </div>

              <div className="image">
              <img src={img9} alt="img9" />
              </div>
            
          </div>

          
          </div> 
      </React.Fragment>




      {/* what we have done */}
      <div className="doneText">
        <p>What we've done</p>
      </div>



      {/* Trending Art Work */}

      <div className="TrendingArtText">
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


      {/* New in Design */}


      <h1 className='desc'>Description of Paintings</h1>

      <div className="DesignNew">

       
        <div>
        <img src="https://artstreet.in/cdn/shop/products/81TNNiaHZEL._SL1500_878x700.jpg?v=1687353797" alt="" />
        <h3>Oil Painting</h3>
        
        <p>Oil paint is a versatile and enduring artistic medium. It consists of<br/> pigments suspended in drying oils, typically linseed oil. Artists appreciate<br/> its slow drying time, allowing for blending and layering. Oil paintings <br/>are known for their rich colors, depth, and durability, making them<br/> a preferred choice for many painters.</p>
       
        </div>

        <div>
        <img src="https://live.staticflickr.com/7015/6541061641_0796af88c7_b.jpg" alt="" />
        <h3>Carbon Painting</h3>
        
        <p>Carbon paint is a conductive coating infused with carbon<br/> particles It's commonly used in electronics and industry to .<br/>create electrical connections, EMI/RFI shielding, and as a<br/> component in sensors. Its versatility and conductivity make<br/> it a valuable material for various applications.</p>
       
        </div>

        <div>
        <img src="https://azure.wgp-cdn.co.uk/app-painters-online/posts/MMBorrowdale.png?&format=webp&webp.quality=85&scale=down" alt="" />
        <h3>Mixed Painting</h3>
        
        <p>Mixed paint refers to a blend of various colors or pigments,<br/> resulting in a new shade or hue. Artists and designers use<br/> mixed paint to achieve unique and customized color palettes,<br/> adding depth and creativity to their projects</p>
       
        </div>

        <div>
        <img src="https://i0.wp.com/doodlewash.com/wp-content/uploads/2020/06/One-Color-Monochromatic-Watercolor-Painting-Tutorial.jpg?fit=1024%2C749&ssl=1" alt="" />
        <h3>Water Color Painting</h3>
        
        <p>Watercolor painting, often referred to as watercolor or aquarelle,<br/> is a painting technique where pigments are suspended in <br/> water-based solutions. Artists use it for its fluidity and transparency, allowing delicate and vibrant compositions. It's a versatile and <br/>expressive medium, popular for its luminous and ethereal qualities.</p>
       
        </div>
      </div>

    </div>
  )
}
