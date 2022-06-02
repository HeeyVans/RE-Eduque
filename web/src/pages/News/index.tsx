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
        <div className='container-noticiais'>
            <div className='container-header'>
                <h1>Notícias</h1>
            </div>
            <div className='container-news'>
                <div className='container-left'>
                    <h1>Mundo</h1>
                    <img></img>
                    <p>A produção global de plástcos cresceu implacavelmente nas últimas décadas.</p>
                </div>
                <div className='containe-right'>
                    <div>
                        <h1>Brasil</h1>
                        <img></img>
                        <p>Brasil: um pesadelo para a natureza</p>
                    </div>
                    <div>
                        <h1>Dica</h1>
                        <img></img>
                        <p>Instituto Descarte Correto</p>
                    </div>
                    <div>
                        <h1>Lixo</h1>
                        <img></img>
                        <p>Coleta de lixo urbano</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default News;