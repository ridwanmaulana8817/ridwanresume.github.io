import React, { Component } from 'react'
import { Container, Col, Row, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Contact.css';

export default class About extends Component {
  render() {
    return (
      <div className="header-contact">

      <Container className="container-contact">
         <Row>                    
            <Col xs={12} sm={5} className="contact-section">
            <h2>Contact Us</h2>
            <ul>
              <li>Ridwan Maulana</li>
              <li>085797121480</li>
              <li>ridwanmaulanacirebon@gmail.com</li>
              <li>_____________________________</li>
              <li>Jl. H. Oplin Alfatih Residence No. 44</li>
              <li>Bekasi - Indonesia</li>
            </ul>
              </Col>

              <Col xs={4} sm={4} className="foto-section">
                <Image src="assets/empat.png" roundedCircle/>
              </Col>

          </Row>
      </Container>

      </div>
      
      
    )
  }
}
