import React from 'react';
import iconf from '../assets/icon-facebook.png';
import iconi from '../assets/icon-insta.webp';
import iconw from '../assets/icon-Webcup.png';
import icont from '../assets/twitter.webp';

const ContactFooter = () => {
  return (
    <div className="end-section">
      <h2 style={{ fontFamily: 'Lato, sans-serif'}}>Contactez-nous</h2>
      <p style={{ fontFamily: 'Lato, sans-serif'}}>Pour toute demande d'information, n'hésitez pas à nous contacter :</p>
      <ul className="social-links">
        <li style={{ fontFamily: 'Lato, sans-serif'}}><a href="mailto:contact@webcup.com">contact@webcup.com</a></li>
        <li style={{ fontFamily: 'Lato, sans-serif'}}><a href="tel:+0262 71 33 51">+0262 71 33 51</a></li>
      </ul>
      <div className="social-icons">
        <h2 style={{ fontFamily: 'Lato, sans-serif'}}>Nous suivre</h2>
        <a href="https://www.facebook.com/webcup.officiel?locale=fr_FR">
          <img src={iconf} className="taille-icon" alt="Facebook" />
          <span className="social-link-text" style={{ fontFamily: 'Lato, sans-serif'}}>Facebook</span>
        </a>
        <br></br>
        <br></br>
        <a href="https://www.instagram.com/web_cup/">
          <img src={iconi} className="taille-icon" alt="Instagram" />
          <span className="social-link-text2" style={{ fontFamily: 'Lato, sans-serif'}}>Instagram</span>
        </a>
        <br></br>
        <br></br>
        <a href="https://www.webcup.fr/">
          <img src={iconw}  className="taille-icon" alt="Webcup" />
          <span className="social-link-text3" style={{ fontFamily: 'Lato, sans-serif'}}>Webcup.fr</span>
        </a>
        <br></br>
        <br></br>
        <a href="https://twitter.com/Web_Cup">
          <img src={icont}  className="taille-icon" alt="twitter" />
          <span className="social-link-text4" style={{ fontFamily: 'Lato, sans-serif'}}>Twitter</span>
        </a>
      </div>
      <h1 className="text-de-fin"  style={{ fontFamily: 'Lato, sans-serif'}}>Webcup 2024<br></br>L'esprit de compétition, s'amuser et coder pendant 24h</h1>
    </div>
  );
};

export default ContactFooter;
