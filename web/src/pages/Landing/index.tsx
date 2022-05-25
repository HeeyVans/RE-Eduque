import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../images/logoeco.svg'

// import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Re-Eduque"/>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite pontos de coleta e descarte e mude o meio ambiente.</p>
      </main>

      <div className="location">
        <strong>Recife</strong>
        <span>Pernambuco</span>
      </div>

      <Link to="app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </div>
   </div>
  )
}

export default Landing;