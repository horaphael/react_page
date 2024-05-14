import React, { Component } from 'react';

class EcoIndexBadge extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js";
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="ecoindex-badge" className='eco-index'></div>
    );
  }
}

export default EcoIndexBadge;
