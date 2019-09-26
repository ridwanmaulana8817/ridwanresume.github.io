import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css'



  
const toolbar = props => (
    <header className="toolbar">
    <nav className="toolbar_navigation">
    <div>
        <DrawerToggleButton click={props.drawerClickHandler}/> 
        
    </div>
    
    <div className="toolbar_logo">  <p className="text_logo">RM</p></div>
    <div className="spacer"></div>
    <div className="toolbar_navigation-items">
    <ul>
        
        <li><a href="/">Home</a></li>
        <li><a href="/about">Biography</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/resume">Education</a></li>
        <li><a href="/gallery">Galery</a></li>
        <li><a href="/contact">Contact</a></li>
        
        
    </ul>
   
    </div>
    
    </nav>
    </header>
);

export default toolbar;        
