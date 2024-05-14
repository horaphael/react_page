import React from "react";
import Navigation2 from "./Navigation2";
import img from '../assets/img.png';
import BannerFin from '../pages/BannerFin';
import ContactFooter from '../pages/ReseauBanner';

const Transition = () => {
  return (
    <div>
      <BannerFin />
      <ContactFooter />
      <div className="rectangle">
        <div className="police">
          <h1> Découvrez leur profil et témoignage</h1>
          <ol className="bg">
            <Navigation2 />
          </ol>
        </div>
        <img src={img} className="img" alt="img" />
      </div>
    </div>
  );
};

export default Transition;
