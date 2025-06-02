import React from 'react';
import '../App.css';
import logo from '../logo.svg'; // Menggunakan logo dari src folder

function Sejarah() {
  return (
    <div className="App">
      <h2>Sejarah SMK REVIT</h2>
      <p>isi sejarah.</p>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Sejarah;