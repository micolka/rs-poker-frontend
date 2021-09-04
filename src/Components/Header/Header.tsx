import './Header.scss';

import type { FunctionComponent, HTMLAttributes } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: FunctionComponent<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className="header-menu">
      <ul className="header--menu_container">
        <li>
          <Link to="/" className="header-link">
            Main
          </Link>
        </li>
        <li>
          <Link to="/lobby" className="header-link">
            Lobby
          </Link>
        </li>
        <li>
          <Link to="/game" className="header-link">
            Game
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
