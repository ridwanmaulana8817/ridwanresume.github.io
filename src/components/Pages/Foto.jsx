
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Foto.css';

const fadeImages = [
    'assets/home-gallery/biography.jpg',
    'assets/home-gallery/resume.jpg',
    'assets/home-gallery/experience.jpg',
    'assets/home-gallery/gallery.jpg',
    'assets/home-gallery/contact.jpg',
    
  ];
   
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
            <p>Saya berusia 30 tahun memiliki pengalaman kerja di Instansi Pemerintahan......<a href="/about">  Read More</a></p> 
              <img src={fadeImages[0]} />
              
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
            <p>Hai... saya pernah bekerja di Kementerian sebagai.....<a href="/experience">  Read More</a></p> 
              <img src={fadeImages[1]} />
            </div>
            {/* <h2>Second Slide</h2> */}
          </div>

          <div className="each-fade">
            <div className="image-container">
            <p>Pendidikan Terakhir saya S1 Teknik Informatika di .....<a href="/resume">  Read More</a></p> 
              <img src={fadeImages[2]} />
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>

          <div className="each-fade">
            <div className="image-container">
            <p>Berikut beberapa foto profil tentang saya .....<a href="/resume">  Read More</a></p> 
              <img src={fadeImages[3]} />
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>

          <div className="each-fade">
            <div className="image-container">
            <p> Anda dapat menghubungi saya di .....<a href="/contact">  Read More</a></p> 
              <img src={fadeImages[3]} />
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>

        </Fade>
      </div>
    )
  }
 
 //Zoom
// const images = [
//   'assets/slideshow/1.jpg',
//   'assets/slideshow/2.jpg',
//   'assets/slideshow/3.jpg',
//   'assets/slideshow/4.jpg',
//   'assets/slideshow/5.jpg',
//   'assets/slideshow/6.jpg'
  
// ];
 
// const zoomOutProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   scale: 0.4,
//   arrows: true
// }
 
// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Zoom {...zoomOutProperties}>
//           {
//             images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
//           }
//         </Zoom>
//       </div>
//     )
// }

export default Slideshow;