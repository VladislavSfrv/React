import React from 'react'
import {Link} from 'react-router-dom';
import "./Header.css"

function Header({headerNav}){
  return (
    <header className='header'>
        {headerNav.map((item, index) => (
            <Link className='header-link' to={item.link} key={index}>{item.text}</Link>
        ))}
        <div className='header-search'>
            <input type='text' placeholder='Поиск' className='header-input'/>
        </div>
    </header>
  )
}

export default Header;
