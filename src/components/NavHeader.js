import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = (props) => (
  <header className="container vertical-align">
    {console.log()}
    <NavLink
      className="gigtype-button"
      to="/"
      exact={true}
      activeStyle={{
        // backgroundColor: 'rgb(85, 1, 1)',
        backgroundColor: '#1779ba',
        cursor: 'default',
        transform: 'none',
        boxShadow: '1.5px 1.5px .75px black'
      }}>
      <div className="nav-image">  
        <img src={require('../../public/images/music.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </div>
    </NavLink>
    <NavLink to="/" exact={true}>
      <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "10em", maxHeight: "10em"}}></img>
    </NavLink>
    <NavLink
      className="gigtype-button"
      to="/plays"
      exact={true}
      activeStyle={{
        backgroundColor: '#1779ba',
        cursor: 'default',
        transform: 'none',
        boxShadow: '1.5px 1.5px .75px black'
      }}>
      <div className="nav-image">
        <img src={require('../../public/images/theatre.png')} style={{maxWidth: "3em", maxHeight: "3em"}}></img>
      </div>
    </NavLink>
  </header>
);

export default NavHeader;