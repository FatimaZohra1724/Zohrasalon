import React, { Component } from 'react'
import Nails from '../assets/Media/Nails.jpg';
import Haircutting from '../assets/Media/Haircutting.jpg';
import HairColor from '../assets/Media/HairColor.jpg';
import Facial from '../assets/Media/Facial.jpg';
import Waxing from '../assets/Media/Waxing.jpg';
import Wedding from '../assets/Media/Wedding.jpg';

export class Services extends Component {
  render() {
    return (
      <section className="Services" id = "Services">
            <article className="Service-card1">
                        <h3>Nails.Manicure & Pedicure</h3>
                        <p className="Service-intro">
                        Treat your hands and feet to a luxurious manicure and pedicure. Our expert nail technicians use high-quality products to ensure your nails look their best.
                        </p>
                        <img src={Nails} alt="Nail Service" className="Service-image" />
                        <ul className="Service-features" id ="Service-features">
                               <li>
                                 <span>Classic Manicure</span>
                                  <span>AED 70</span>
                              </li>   
                              <li>
                                 <span>Classic Pedicure</span>
                                  <span>AED 90</span>
                              </li>   
                              <li>
                                 <span>Gel Manicure</span>
                                  <span>AED 120</span>
                              </li>   
                              <li>
                                 <span>Spa Mani-Pedi Combo</span>
                                  <span>AED 220</span>
                              </li>   
                        </ul>
            </article>

             {/* Haircuts */}
           <article className="Service-card Service-card--hair">
           <h3>Haircuts & Styling</h3>
           <p className="Service-intro">
            Fresh cuts and styling designed to suit your face shape and lifestyle.
          </p>
         <img src={Haircutting} alt="Hair Service" className="Service-image" />
          <ul className="Service-features">
            <li>
              <span>Basic Trim & Blow‑dry</span>
              <span>AED 120</span>
            </li>
            <li>
              <span>Layered Cut (Medium/Long)</span>
              <span>AED 180</span>
            </li>
            <li>
              <span>Bob / Lob Restyle</span>
              <span>AED 220</span>
            </li>
            <li>
              <span>Wash & Signature Blow‑dry</span>
              <span>AED 110</span>
            </li>
          </ul>
        </article>

        {/* Hair Color */}
        <article className="Service-card Service-card--color">
          <h3>Hair Color & Highlights</h3>
          <p className="Service-intro">
            Glossy, personalized color from soft coverage to full transformations.
          </p>
          <img src={HairColor} alt="Color Service" className="Service-image" />
          <ul className="Service-features">
            <li>
              <span>Root Touch‑up</span>
              <span>AED 220</span>
            </li>
            <li>
              <span>Global Color (Short/Medium)</span>
              <span>AED 320</span>
            </li>
            <li>
              <span>Partial Highlights</span>
              <span>AED 380</span>
            </li>
            <li>
              <span>Balayage / Ombre · from</span>
              <span>AED 650</span>
            </li>
          </ul>
        </article>

        {/* Facials */}
        <article className="Service-card Service-card--facial">
          <h3>Facials & Skin Glow</h3>
          <p className="Service-intro">
            Targeted treatments to hydrate, brighten and calm your skin.
          </p>
            <img src={Facial} alt="Facial Service" className="Service-image" />
          <ul className="Service-features">
            <li>
              <span>Express Cleanup</span>
              <span>AED 150</span>
            </li>
            <li>
              <span>Hydrating Facial</span>
              <span>AED 250</span>
            </li>
            <li>
              <span>Brightening Facial</span>
              <span>AED 320</span>
            </li>
            <li>
              <span>Anti‑Age Ritual</span>
              <span>AED 380</span>
            </li>
          </ul>
        </article>

        {/* Waxing */}
        <article className="Service-card Service-card--waxing">
          <h3>Waxing & Smooth Skin</h3>
          <p className="Service-intro">
            Gentle, hygienic waxing for long‑lasting smoothness.
          </p>
         <img src={Waxing} alt="Waxing Service" className="Service-image" />
          <ul className="Service-features">
            <li>
              <span>Full Arms</span>
              <span>AED 80</span>
            </li>
            <li>
              <span>Full Legs</span>
              <span>AED 120</span>
            </li>
            <li>
              <span>Underarms</span>
              <span>AED 50</span>
            </li>
            <li>
              <span>Full Body (Ladies)</span>
              <span>AED 280</span>
            </li>
          </ul>
        </article>

        <article className="Service-card Service-card--makeup">
       <h3>Makeup · Party & Bridal Looks</h3>
        <p className="Service-intro">
        Soft, camera‑ready looks for every occasion – from a quick party glow to
        full bridal glam.
      </p>

      <img src={Wedding} alt="Makeup Service" className="Service-image" />

     <ul className="Service-features">
      <li>
      <span>Simple Party Makeup</span>
      <span>AED 220</span>
      </li>
    <li>
      <span>Bachelorette / Girls Night Look</span>
      <span>AED 260</span>
    </li>
    <li>
      <span>Engagement Makeup</span>
      <span>AED 380</span>
    </li>
    <li>
      <span>Wedding / Bridal Makeup (in‑salon)</span>
      <span>AED 550</span>
    </li>
  </ul>
</article>


      </section>
    )
  }
}

export default Services
