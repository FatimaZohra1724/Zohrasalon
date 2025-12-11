
import React from 'react';
import ThemeToggle from './ThemeToggle';;

export class Navbar extends React.Component {
  render() {
    return (
      <header className="Navbar">
        <div className="Navbar-inner">
          <a href="#hero" className="Navbar-logo">
            Zohra Salon
          </a>

          <nav className="Navbar-links">
            <a href="#about">About</a>
            <a href="#Services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#Experts">Experts</a>
            <a href="#Contact">Contact</a>

            {/* Theme button on the right */}
            <ThemeToggle />
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;

