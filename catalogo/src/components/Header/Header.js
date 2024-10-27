import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Header.scss';

import logo from '../../assets/logo-atacasa-horizontal.png';

function Header() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <header className='header'>
            <div className='menu'>
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </div>

            <img className='logo' src={logo} alt='logo atacasa' />
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="search-bar"
                    value={query}
                    onChange={handleInputChange}
                />
            </div>
        </header>
    );
}

export default Header;
