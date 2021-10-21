import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarItemProps {
  title: string;
  link: string;
}

function NavbarLink({ title, link }: NavbarItemProps) {
  return (
    <li className='navbar-link-container'>
      <NavLink
        exact
        to={link}
        className='navbar-link'
        activeClassName='navbar-link-active'
      >
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default NavbarLink;
