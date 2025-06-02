import React from 'react';

// Definisi konstanta buttonStyle di luar fungsi komponen
const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

// Definisi style untuk container
const containerStyle = {
  backgroundColor: 'green',
  padding: '20px',
  borderRadius: '8px',
  color: 'white'
};

function MyComponent() {
  return (
    <div style={containerStyle}>
      <h1 className="title">Ini adalah MyComponent</h1>
      <p>Konten komponen saya.</p>
      
      {/* Tombol dengan inline style */}
      <button style={buttonStyle}>Klik Saya</button>
      
      {/* Tombol dengan kelas Bootstrap */}
      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-success">Tombol Success</button>
        <button className="btn btn-warning">Tombol Warning</button>
        <button className="btn btn-danger">Tombol Danger</button>
      </div>
    </div>
  );
}

export default MyComponent;