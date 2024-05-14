import React from "react";
import Navigation from "../composent/Navigation";
import Accueil from "../composent/Accueil";
import EcoIndexBadge from './EcoIndexBadge';
import BannerFin from './BannerFin';
import ContactFooter from './ReseauBanner';
import "../Style/Style.css";
import logo from '../assets/logo_webcup.webp';
import baniere from '../assets/header_background.jpg';
import fond from '../assets/test.gif';
import Team from './Team'

const Home = () => {
  return (
    <div className="image-container">
      <Accueil />
      <Navigation />
      <EcoIndexBadge />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={baniere} className="banner" alt="banner" />
      <img src={fond} className="fond-gif" alt="fond" />
      <h1 id="about" className="text" style={{ fontFamily: 'Lato, sans-serif'}}>À propos</h1>
      <p className="text2" style={{ fontFamily: 'Lato, sans-serif'}}>La Webcup, c'est comme une effervescence numérique qui s'empare d'un lieu pendant quelques jours. Imaginez un rassemblement bouillonnant où les esprits créatifs se rencontrent pour un marathon d'idées et de codage. C'est une célébration de l'innovation, où des équipes se forment, chacune avec son lot d'expertises diverses, prêtes à relever le défi de créer quelque chose de nouveau, de novateur, et surtout, de fonctionnel, en un temps record.<br></br><br></br>Dans l'atmosphère électrique d'une Webcup, on ressent cette énergie palpitante qui émane des équipes plongées dans la conception et le développement. Les claviers cliquettent, les écrans scintillent, et les discussions fusent alors que les participants jonglent avec les langages de programmation, les frameworks et les API pour donner vie à leurs idées.
        Mais la Webcup, ce n'est pas seulement une compétition technique. C'est aussi un terrain fertile pour l'apprentissage, le partage et la collaboration. Les participants échangent des connaissances, se défient mutuellement et s'entraident pour surmonter les obstacles qui se dressent sur leur chemin vers l'innovation.
        <br></br><br></br>Enfin, vient le moment où les juges délibèrent et désignent les vainqueurs. Mais au-delà des prix et des récompenses, ce qui compte le plus, c'est cette expérience collective, cette communion d'idées et cette passion partagée pour la technologie qui font de chaque Webcup un événement inoubliable.
      </p>
      <h1 id="about" className="TeamTitle" style={{ fontFamily: 'Lato, sans-serif'}}>Notre équipe</h1>
      <Team />
      <BannerFin />
      <ContactFooter />
    </div>
  );
};

export default Home;
