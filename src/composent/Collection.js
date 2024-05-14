import React from "react";
import Subheader from "./Subheader";
import host from "../assets/host.webp";

const Collection = () => {
  return (
    <div>
      <Subheader
        img="https://www.lejournaldesarchipels.com/wp-content/uploads/2023/11/webcup-scaled.jpg"
        title="**ANGRY GEEK**"
        caption="L’équipe malgache ANGRY GEEK a remporté la finale régionale de la WebCup en 2023 à Antananarivo, Madagascar. Leur plateforme de prévisions des catastrophes naturelles, basée sur l’intelligence artificielle, a marqué un tournant pour la compétition.
        Félicitations à l’équipe ANGRY GEEK pour cette performance exceptionnelle! 🎉🌐"
      />
      <Subheader
        img="https://www.webcup.fr/wp-content/uploads/2022/10/Equipe-Ylangs-Laureat-Webcup-2022.jpg"
        title="**YLANGS**"
        caption="L’équipe YLANGS, originaire de Mayotte, a remporté la finale internationale de la WebCup 2022. Composée de membres talentueux, elle a brillamment créé un site internet en seulement 24 heures. Leur victoire a été un accomplissement exceptionnel pour Mayotte et a démontré leur passion et leurs compétences en développement web.
        Félicitations à l’équipe YLANGS pour cette performance remarquable! 🎉🌐"
      />
      <Subheader
        img={host}
        title="**HOST**"
        caption="L’équipe HOST Madagascar a remporté la finale de la WebCup en 2021. Le tournoi de développement web de l’océan Indien s’est déroulé en ligne, et HOST a brillamment démontré ses compétences techniques. Leur victoire a été un moment fort pour Madagascar et a mis en avant leur talent dans le domaine du développement web.

        Félicitations à l’équipe HOST pour cette performance exceptionnelle! 🎉🌐"
      />
    </div>
  );
};

export default Collection;