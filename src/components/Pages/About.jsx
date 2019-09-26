import React, { Component } from 'react'
import { Container, Col, Button, Row, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

export default class Resume extends Component {
  render() {
    return (
      <div className="header-about">
        <Container>
          <h2>Biography</h2>
          <Row>
            <Col xs={15} sm={5} className="main-section">
            <p>Saya berusia 30 tahun memiliki pengalaman kerja di Instansi Pemerintahan. Saat ini sedang menekuni sebagai front end developer seperti html, css, javascript, dom manipulation, json, redux dan react.js.  
            Memiliki Komunikasi yang baik, siap untuk belajar hal baru, bersemangat, pekerja keras dan jujur.
            </p>
          <Link to="/">
          <Button bsStyle="primary" className="Button">Download Full Resume</Button>
          </Link>
            </Col>
            <Col xs={15} sm={3} className="identity-section">
            <ul>
              <li>Tinggi : 156</li>
              <li>Status : Menikah</li>
              <li>Usia   : 30</li>
              <li>______________</li>
              <li>Lokasi : Bekasi</li>

            </ul>
              
                                   
            
              </Col>
              <Col xs={4} sm={3} className="image-section">
              <Image src="assets/foto1_.jpg"/>
              </Col>
          </Row>
                 </Container>
      </div>
    )
  }
}
