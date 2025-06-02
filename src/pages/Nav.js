import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/kontak">Kontak</Link></li>
        <li><Link to="/sejarah">Sejarah</Link></li>
        <li><Link to="/tentangan">Tentangan</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;