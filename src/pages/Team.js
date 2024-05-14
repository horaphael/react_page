import React from 'react';
import "../Style/Style.css";
import maelImage from '../assets/alex_ahyane.webp';
import alexImage from '../assets/mael_mangata.webp';
import image3 from '../assets/mathiscoutaye.jpg';
import image4 from '../assets/raphael_hoarau.jpg';


function Circle({ image }) {
  return (
    <div className="circle">
      <img src={image} alt='circle'/>
    </div>
  );
}

function Team() {
  const images = [maelImage, alexImage, image3, image4];

  return (
      <div className="circle-container">
        <p className='circle_text' style={{ fontFamily: 'Lato, sans-serif'}}>Alexandre Ah-Yane<br></br>Développeur <br></br>Front End</p>
        <p className='circle_text2' style={{ fontFamily: 'Lato, sans-serif'}}>Maël Mangata<br></br>Développeur <br></br>Back End</p>
        <p className='circle_text3' style={{ fontFamily: 'Lato, sans-serif'}}>Mathis Coutaye<br></br>Développeur <br></br>Front End</p>
        <p className='circle_text4' style={{ fontFamily: 'Lato, sans-serif'}}>Raphaël Hoarau<br></br>Développeur <br></br>Front End</p>
      {images.map((image, index) => (
          <Circle key={index} image={image} />
      ))}
    </div>
  );
}
  
export default Team;