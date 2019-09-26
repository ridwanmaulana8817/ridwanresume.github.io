import React, { Component, Fragment } from 'react'
import './Gallery.css';
import {Container, Image} from 'react-bootstrap';

export default class Gallery extends Component {
  render() {
    return (
      <div className="header-galery">
      <h2 className="h2-gallery"> Gallery </h2>
      <Container className="container-gallery">
        <ul className="gallery">
            <li> 
            <a href="#gambar1"> 
            <Image src="assets/lightbox/thumb/satu.png" roundedCircle className="tumb"/>
            <span>Click</span> 
            </a>

            <div className="overlay" id="gambar1">
            <a href="#"> 
            <Image src="assets/lightbox/nav/close.png" className="close"/>
            </a>

            <a href="#gambar4" className="prev" > 
            <Image src="assets/lightbox/nav/prev.png" />
            </a>            
             
            <Image src="assets/lightbox/full/satu.jpg" rounded className="full-img" />

            <a href="#gambar2" className="next" > 
            <Image src="assets/lightbox/nav/next.png"/>
            </a>
            </div> 
            </li>  
          
          {/* Foto 2 */}
          <li> 
            <a href="#gambar2">
            <Image src="assets/lightbox/thumb/dua.png" roundedCircle className="tumb"/>
            <span>Click</span> 
            </a>
            
            <div className="overlay" id="gambar2">
            <a href="#"> 
            <Image src="assets/lightbox/nav/close.png" className="close"/>
            </a>

            <a href="#gambar1" className="prev" > 
            <Image src="assets/lightbox/nav/prev.png"/>
            </a>            
             
            <Image src="assets/lightbox/full/dua.jpg" rounded className="full-img" />

            <a href="#gambar3" className="next" > 
            <Image src="assets/lightbox/nav/next.png"/>
            </a>
            </div>
          </li> 

          {/* Foto 3 */}

            <li> 
            <a href="#gambar3">
            <Image src="assets/lightbox/thumb/tiga.png" roundedCircle className="tumb"/>
            <span>Click</span> 
            </a>

            <div className="overlay" id="gambar3">
            <a href="#"> 
            <Image src="assets/lightbox/nav/close.png" className="close"/>
            </a>

            <a href="#gambar2" className="prev" > 
            <Image src="assets/lightbox/nav/prev.png"/>
            </a>            
             
            <Image src="assets/lightbox/full/tiga.jpg" rounded className="full-img" />

            <a href="#gambar4" className="next" > 
            <Image src="assets/lightbox/nav/next.png"/>
            </a>
            </div> 
          </li>  

           {/* Foto 4 */}

           <li> 
            <a href="#gambar4">
            <Image src="assets/lightbox/thumb/empat.png" roundedCircle className="tumb"/>
            <span>Click</span> 
            </a>

            <div className="overlay" id="gambar4">
            <a href="#"> 
            <Image src="assets/lightbox/nav/close.png" className="close"/>
            </a>

            <a href="#gambar3" className="prev" > 
            <Image src="assets/lightbox/nav/prev.png"/>
            </a>            
             
            <Image src="assets/lightbox/full/empat.jpg" rounded className="full-img" />

            <a href="#gambar1" className="next" > 
            <Image src="assets/lightbox/nav/next.png"/>
            </a>
            </div> 
          </li>  


        </ul>
   </Container>
   </div>

    )
  }
}
