import React, { Component } from 'react'
import { Container, Col, Button, Row, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className="header">
        <Container className="resume-header">
                  
          <Row>

            <Col xs={12} sm={4} className="resume-section">
            <h2 className="h2-resume">Pendidikan</h2>
            <ul>
              <li>STIMIK JAYAKARTA JAKARTA</li>
              <li>Lulus sebagai Sarjana Komputer, 2016– 2018</li>
              <li>IPK : 3.38</li>
            </ul>

            <ul>
              <li>STIMIK IKMI CIREBON</li>
              <li>Diploma 3 Program Beasiswa Unggulan Kemendikbud</li>
              <li>Bidang Konsentrasi Teknik Komputer dan Jaringan</li>
            </ul>

            <ul>
              <li>SMK TEKNIK INDUSTRI</li>
              <li>Teknik Komputer dan Jaringan</li>
              <li>Magang : Geotama Computer (Teknisi)</li>
              <li>Juara 3 Lomba Teknologi Informasi Kota Cirebon</li>
            </ul>
            </Col>

            <Col xs={12} sm={3} className="resume-section">
            <h2 className="h2-resume">Rincian Kerja</h2>
            <ul>
              <li>Pengembangan Website</li>
              <li>IT Support</li>
              <li>Tim Entry Data</li>
              <li>Tim Kegiatan Rapat, FGD, Workshop</li>
              <li>Penganggaran Keuangan</li>
              <li>Narasumber Aplikasi Pendidikana</li>
              <li>Rapat Dalam/Luar Kota</li>
              <li>Berkoordinasi dgn Stakeholder</li>
            </ul>
             </Col>

            <Col xs={12} sm={5} className="resume-section">
            <h2 className="h2-resume">Sertifikat</h2>
            <ul>
              <li>2018 - Training ICT (Kemenko Bidang Perekonomian & Huawei)</li>
              <li>2016 - Adobe Flash (STIMIK Jayakarta)</li>
              <li>2010 - Designing & Supporting Computer Networks (CCNA )</li>
              <li>2010 - Introducing Routing & Switching in the Enterprise (CCNA)</li>
              <li>2009 - Sertifikasi Telematika (LSP Telematika)</li>
              <li>2007 - Jeni OOP (STIMIK IKMI</li>
            </ul>
           
            </Col>
            
          </Row>
        </Container>
      </div>
    )
  }
}
