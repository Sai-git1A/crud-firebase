import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
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
    )
}