import React from 'react';
import ButtonM from '../ButtonM/ButtonM';
import MenuH from '../MenuH/MenuH';
import '../../styles/CSS/style.css'

function Homepage() {
  return (
    <div className="home">
      <ButtonM />
      <MenuH />
      <h1>Ez a címünk</h1>
    </div>
  )
}

export default Homepage;
