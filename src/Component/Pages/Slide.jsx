// import React, { useEffect, useRef } from 'react';
// import './Home.css';
// import img8 from './8.png';
// import img2 from './2.png';
// import img3 from './3.png';
// import img9 from './9.png';
// import img7 from './7.png';

// const Slide = () => {

//   const odragRef = useRef(null);
//   const ospinRef = useRef(null);


//   useEffect(() => {
//     const radius = 240; // how big of the radius
//     const autoRotate = true; // auto rotate or not
//     const rotateSpeed = -60; // unit: seconds/360 degrees
//     const imgWidth = 220; // width of images (unit: px)
//     const imgHeight = 270; // height of images (unit: px)

//     // Link of background music - set 'null' if you don't want to play background music
//     const bgMusicURL =
//       'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
//     const bgMusicControls = true; // Show UI music control

//     // animation start after 1000 milliseconds
//     setTimeout(init, 1000);

//     const odrag = document.getElementById('drag-container');
//     const ospin = document.getElementById('spin-container');
//     const aImg = ospinRef.current.getElementsByTagName('img');
//     const aVid = ospinRef.current.getElementsByTagName('video');
//     const aEle = [...aImg, ...aVid];

//     // Size of images
//     ospin.style.width = imgWidth + 'px';
//     ospin.style.height = imgHeight + 'px';

//     // Size of ground - depend on radius
//     const ground = document.getElementById('ground');
//     ground.style.width = radius * 3 + 'px';
//     ground.style.height = radius * 3 + 'px';

//     function init(delayTime) {
//       for (let i = 0; i < aEle.length; i++) {
//         aEle[i].style.transform =
//           'rotateY(' + (i * (360 / aEle.length)) + 'deg) translateZ(' + radius + 'px)';
//         aEle[i].style.transition = 'transform 1s';
//         aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
//       }
//     }

//     function applyTransform(obj) {
//       // Constrain the angle of the camera (between 0 and 180)
//       if (tY > 180) tY = 180;
//       if (tY < 0) tY = 0;

//       // Apply the angle
//       obj.style.transform = 'rotateX(' + (-tY) + 'deg) rotateY(' + tX + 'deg)';
//     }

//     function playSpin(yes) {
//       ospin.style.animationPlayState = yes ? 'running' : 'paused';
//     }

//     let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

//     // auto spin
//     if (autoRotate) {
//       const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
//       ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
//     }

//     // add background music
//     if (bgMusicURL) {
//       document.getElementById('music-container').innerHTML += `
//       <audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>
//         <p>If you are reading this, it is because your browser does not support the audio element.</p>
//       </audio>
//     `;
//     }

//     // setup events
//     document.onpointerdown = function (e) {
//       clearInterval(odrag.timer);
//       e = e || window.event;
//       sX = e.clientX;
//       sY = e.clientY;

//       this.onpointermove = function (e) {
//         e = e || window.event;
//         nX = e.clientX;
//         nY = e.clientY;
//         desX = nX - sX;
//         desY = nY - sY;
//         tX += desX * 0.1;
//         tY += desY * 0.1;
//         applyTransform(odrag);
//         sX = nX;
//         sY = nY;
//       };

//       this.onpointerup = function (e) {
//         odrag.timer = setInterval(function () {
//           desX *= 0.95;
//           desY *= 0.95;
//           tX += desX * 0.1;
//           tY += desY * 0.1;
//           applyTransform(odrag);
//           playSpin(false);
//           if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//             clearInterval(odrag.timer);
//             playSpin(true);
//           }
//         }, 17);
//         this.onpointermove = this.onpointerup = null;
//       };

//       return false;
//     };

//     document.onmousewheel = function (e) {
//       e = e || window.event;
//       const d = e.wheelDelta / 20 || -e.detail;
//       radius += d;
//       init(1);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

 
//     return (
//       <div>
//         <div className="spin-container">
//           <img src={img8} alt="" />
//           <img src={img2} alt="" />
//           <img src={img3} alt="" />
//           <img src={img9} alt="" />
//           <img src={img7} alt="" />
  
//           <p>FICHA TÉCNICA Art Gallery</p>
//         </div>
  
//         <div className="ground"></div>
//         <div className="musicControler"></div>
//       </div>
//     );
//   };


// export default Slide;
