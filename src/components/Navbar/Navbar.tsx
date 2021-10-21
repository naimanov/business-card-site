import React from 'react';

import NavbarLink from './NavbarLink';

function Navbar() {
  const navList = [
    { title: 'Обо мне', link: '/' },
    { title: 'Проекты', link: '/projects' },
    { title: 'Контакты', link: '/contacts' },
  ];

  return (
    <nav className='navbar-container'>
      <ul className='navbar'>
        {navList.map((item) => {
          return (
            <NavbarLink title={item.title} key={item.title} link={item.link} />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
