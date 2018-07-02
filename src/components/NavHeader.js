import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => (
  <header className="container vertical-align">
    <NavLink to="/" exact={true}>
    <div className="gigtype-button">  
      <img src={require('../../public/images/music.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
    </div>
    </NavLink>
    <NavLink to="/" exact={true}>
      <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "10em", maxHeight: "10em"}}></img>
    </NavLink>
    <NavLink to="/plays">
      <div className="gigtype-button">
        <img src={require('../../public/images/theatre.png')} style={{maxWidth: "3em", maxHeight: "3em"}}></img>
      </div>
    </NavLink>
  </header>
);

export default NavHeader;