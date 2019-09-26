import React, { Component } from 'react'
import { Container, Col, Button, Row, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="header-exp">
        <Container>
          <h2>Experience</h2>
          <Row>
            <Col xs={25} sm={5} className="image-logo">
            <Image src="assets/experience/menko-ekon.png"/>
            <h5>Kementerian Koordinator Bidang Perekonoman RI</h5>
            <h5>Sebagai Tenaga Pendukung (2015 s.d Sekarang)</h5>
            <ul>
              <li>Administrasi Persuratan</li>
              <li>Rancang Bangun Web Disposisi Surat Sederhana (Skripsi)</li>
              <li>Maintenance PC/Jaringan/Peralatan Pendukung</li>
              <li>Mendukung pelaksanaan Rapat/FGD/Seminar</li>
              <li>Merawat Peralatan Kantor</li>
              <li>Inventaris Alat Tulis Kantor</li>
            </ul>
            </Col>

                       
            <Col xs={25} sm={5} className="image-disdik">
            <Image src="assets/experience/pemkot-cirebon.png"/>
            <h5>Dinas Pendidikan Kota Cirebon</h5>
            <h5>Sebagai Tenaga Honorer (2007 s.d 2015)</h5>
            <ul>
              <li>Administrasi Persuratan</li>
              <li>Rancang Bangun Website Pendataan Ujian Nasional (Tugas Akhir)</li>
              <li>Maintenance PC/Jaringan/Peralatan Pendukung</li>
              <li>Merekap Database Aplikasi Pemerintahan</li>
              <li>Pengarah Permasalahan Aplikasi Pendidikan</li>
              <li>Membuat Laporan Keuangan</li>

            </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
