import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Home.css';

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
        <header id='home-header'>
            <nav id='home-navbar' className='navbar'>
            <div className='nav-brand'>
            <Link to='/' className='nav-link'>
            <img id='home-nav-icon' className='nav-icon' src='post.png' alt='nav-icon' />
            <h1 id='home-nav-title' className='nav-title'>Information</h1>
            </Link>
            </div>
            <div className='nav-content'>
            <button className='nav-button'>Post</button>
            </div>
            </nav>
        </header>
        <div id='body' className='main-body'>
        <button className='btn-post' onClick={() => navigate('post')}>Post Page</button>
        <button className='btn-read' onClick={() => navigate('read')}>Read Page</button>
        </div>
        </>
    )
}