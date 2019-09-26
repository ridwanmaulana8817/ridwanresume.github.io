import React from 'react';

import './SideDrawer.css';
import drawerToggleButton from './DrawerToggleButton';

const sideDrawer = props => (
    
    <nav className="side-drawer">

    
    <ul>
       
        <li><a href="/">Home</a></li>
        <li><a href="/about">Biography</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/resume">Education</a></li>
        <li><a href="/gallery">Galery</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
);

export default sideDrawer;