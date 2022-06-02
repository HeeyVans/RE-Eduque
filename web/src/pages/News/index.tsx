import React, { useState } from 'react';
import './styles.css';
import NewsList from './NewsList';
import { Link } from "react-router-dom";
import btnInicio from '../../images/btnInicio.png'

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
                <div>
                    <Link to="/">
                        <img src={btnInicio} alt="logo" width='50px'/>
                    </Link>
                </div>
                <h1>Notícias</h1>
            </div>
            <NewsList />
        </div>

    )
}

export default News;