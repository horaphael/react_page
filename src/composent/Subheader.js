import React from "react";

const Subheader = ({ img, title, caption }) => {
  return (
    <div className="Subheader">
      <img className=">Subheader_img" src={img} alt={title} />
      <h3 className="Subheader_title"  style={{ fontFamily: 'Lato, sans-serif'}}>{title}</h3>
      <p className="Subheader_cap"  style={{ fontFamily: 'Lato, sans-serif'}}> {caption}</p>
    </div>
  );
};

export default Subheader;
