import React from 'react';
import baniere from '../assets/header_background.jpg';

class BannerFin extends React.Component {
  render() {
    return (
      <div>
        <img src={baniere} className="team_banner" alt="banner" />
        <img src={baniere} className="banner_fin2" alt="banner" />
      </div>
    );
  }
}

export default BannerFin;
