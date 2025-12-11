import React, { Component } from 'react'
import Startmakeup from '../assets/media/Startmakeup.jpg';
export class Hero extends Component {
  render() {
    return (
            <section className="Hero" id = "hero">
            <div className ="Hero-box">
                        <h1>Zohra Salon</h1>
                        <p>Experience luxury and elegance at Zohra Salon</p>

                        <button className = "btn-primary" onClick={() => document 
                        .getElementById('Contact')
                        .scrollIntoView({ behavior: 'smooth' })
                        }
                        >
                        Book Appoinment</button>
            </div>
            <div className="Hero-image">
              <img src={Startmakeup} alt="Hero Image" />
            </div>
            </section>
    );
  }
}

export default Hero
