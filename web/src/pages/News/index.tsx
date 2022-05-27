import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import logoIMG from '../../images/logoeco.svg'

function News() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
       <h1> TESTE</h1>

    )
}

export default News;