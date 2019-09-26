import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import Slideshow from './Foto';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="header-home">

        <Container classNamae="container-home">
          
          <Row>
            <Col xs={25} sm={3} className="text-home">
            <p className="title-home">Hello... I'm <span>Ridwan Maulana</span></p>
            <p className="title-job">IT Support / Goverment Staff, Jakarta</p>
            </Col>

                       
            <Col xs={25} sm={8} className="slideshow-box">
            <Slideshow/>
            </Col>
          </Row>
        </Container>

      </div>

     
      // <Fragment>
      //   <Row>
      //     <Col xs={12} sm={4}>
      //     <div className="header-home">
      //       <h6>Hello... I'm  
      //       <span className="title-home">     Ridwan Maulana</span>
      //       </h6> 
      //       <h1>IT Support / Goverment Staff, Jakarta</h1>
      //     </div>
      //     </Col>

      //     <Col xs={25} sm={5} >
      //   <Slideshow/>
      //     </Col>
      //   </Row>
     
      // </Fragment>
      
      
    )
  }
}





