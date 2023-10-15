import React from 'react'
import "./About.css";
import { MyAuthContext } from '../Context/AuthContextProvide';
import { useContext } from 'react';

export default function About() {

  const {lang} = useContext(MyAuthContext);

if(!lang){
  return (


    <div className="about-container">
    <div className="about-content">
      <h1>Sobre nosotros</h1>
      <h2>Bienvenido al mundo de los bocetos atemporales</h2>
      <p>¡Hola amigos! Mi nombre es Edger y soy el orgulloso portador de una herencia artística que abarca dos generaciones de dibujantes apasionados. En Arte Galerías Roma nos embarcamos en un viaje a través de los delicados trazos del legado artístico de nuestra familia, permitiéndote adentrarte en un mundo donde los bocetos cuentan historias, las emociones se entretejen en cada línea y el arte trasciende el tiempo.</p>
      <h2>Nuestro legado, tu inspiración</h2>
      <p>Nuestra historia comienza en el corazón de México, donde el arte corre por nuestras venas como un segundo latido. Durante más de dos generaciones, mi familia ha dedicado su vida al arte del dibujo. Desde mis abuelos, que alguna vez deambularon por las bulliciosas calles de la Ciudad de México con cuadernos de dibujo en la mano, hasta mis padres, que perfeccionaron su oficio en el tranquilo campo, cada generación ha agregado su capítulo único al legado artístico de nuestra familia.</p>
      <p>Hoy, continúo con orgullo esta tradición, impulsado por la misma pasión que encendió la chispa de la creatividad en mis antepasados. Estoy comprometido a preservar su legado y compartirlo con el mundo.</p>
      <h2>El arte de dibujar</h2>
      <p>Dibujar es más que simples líneas en papel; es una forma de expresión que captura la esencia de un momento, un lugar o una emoción. Es una danza entre el alma del artista y el lienzo en blanco, donde nacen ideas y se cuentan historias con cada trazo.</p>
      <p>Nuestros bocetos son un reflejo de la vibrante cultura mexicana, los impresionantes paisajes y la diversidad de personas que llaman hogar a este país. Desde los coloridos mercados de Oaxaca hasta las serenas playas de Cancún, nuestros bocetos pretenden transportarte al corazón de México, donde el arte es una forma de vida.</p>
      <h2>Compartiendo la belleza</h2>
      <p>En Arte Galerías Roma creemos que el arte debe ser compartido y apreciado. Por eso hemos seleccionado una colección de bocetos que capturan la esencia de la belleza de México. Ya sea que esté buscando adornar su hogar con auténtico arte mexicano o buscando un regalo único para un ser querido, nuestros bocetos son un testimonio del espíritu perdurable de la creatividad mexicana.</p>
      <h2>Únete a nosotros en este viaje artístico</h2>
      <p>Te invitamos a explorar nuestra galería, donde cada boceto es un trabajo de amor, un pedazo de historia y una ventana al alma de México. Mientras navega por nuestra colección, recuerde que no solo está adquiriendo arte; Te estás convirtiendo en parte del legado artístico de nuestra familia.</p>
      <p>Gracias por visitar Arte Galerías Roma. Celebremos juntos la belleza de México, un boceto a la vez.</p>
    </div>
  </div>
   
  )
}
  return (
    <div className="about-container">
  <div className="about-content">
    <h1>About Us</h1>
    <h2>Welcome to the World of Timeless Sketches</h2>
    <p>Hola, Amigos! My name is Edger, and I am the proud bearer of an artistic heritage that spans two generations of passionate sketch artists. At Arte Galerías Roma, we embark on a journey through the delicate strokes of our family's artistic legacy, allowing you to step into a world where sketches tell stories, emotions are woven into every line, and art transcends time.</p>
    <h2>Our Legacy, Your Inspiration</h2>
    <p>Our story begins in the heart of Mexico, where art courses through our veins like a second heartbeat. For over two generations, my family has dedicated their lives to the art of sketching. From my grandparents, who once roamed the bustling streets of Mexico City with sketchbooks in hand, to my parents, who honed their craft in the tranquil countryside, each generation has added its unique chapter to our family's artistic heritage.</p>
    <p>Today, I proudly continue this tradition, driven by the same passion that ignited the spark of creativity in my ancestors. I am committed to preserving their legacy and sharing it with the world.</p>
    <h2>The Art of Sketching</h2>
    <p>Sketching is more than just lines on paper; it's a form of expression that captures the essence of a moment, a place, or an emotion. It's a dance between the artist's soul and the blank canvas, where ideas are born and stories are told with every stroke.</p>
    <p>Our sketches are a reflection of the vibrant Mexican culture, the stunning landscapes, and the diverse people who call this country home. From the colorful markets of Oaxaca to the serene beaches of Cancún, our sketches aim to transport you to the heart of Mexico, where art is a way of life.</p>
    <h2>Sharing the Beauty</h2>
    <p>At Arte Galerías Roma, we believe that art is meant to be shared and cherished. That's why we have curated a collection of sketches that capture the essence of Mexico's beauty. Whether you're looking to adorn your home with authentic Mexican art or seeking a unique gift for a loved one, our sketches are a testament to the enduring spirit of Mexican creativity.</p>
    <h2>Join Us on This Artistic Journey</h2>
    <p>We invite you to explore our gallery, where each sketch is a labor of love, a piece of history, and a window into the soul of Mexico. As you browse through our collection, remember that you're not just acquiring art; you're becoming a part of our family's artistic legacy.</p>
    <p>Thank you for visiting Arte Galerías Roma. Together, let's celebrate the beauty of Mexico, one sketch at a time.</p>
  </div>
</div>

  )
}
