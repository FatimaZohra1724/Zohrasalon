import React, { Component } from 'react';

import Koreanfacial from '../assets/media/Koreanfacial.jpg';
import ChoosingHaircolor from '../assets/media/ChoosingHaircolor.jpg';
import Massage from '../assets/media/Massage.jpg';
import Spa from '../assets/media/Spa.jpg';
import Hair from '../assets/media/Hair.jpg';
import Manicure from '../assets/media/Manicure.jpg';

export class Gallery extends Component {
  render() {
    const images = [Koreanfacial, ChoosingHaircolor, Massage, Spa, Hair, Manicure];

    return (
      <section className="Gallery" id="gallery">
        <h2>Salon Gallery</h2>
        <p>See a few of our favorite hair, nail and beauty transformations.</p>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <figure key={index} className="gallery-item">
              <img src={src} alt={`Salon work ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>
    );
  }
}

export default Gallery;

