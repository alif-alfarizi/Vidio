import React from 'react';
// import '../App.css'; -- Anda bisa menghapus ini jika hanya menggunakan inline styles

// Definisi gaya CSS sebagai objek JavaScript di luar fungsi komponen
const kontakStyles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'lightgray'
  },
  heading: {
    color: '#282c34',
    fontSize: '2rem',
    marginBottom: '15px'
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.5'
  }
};

function Kontak() {
  return (
    <div style={kontakStyles.container}>
      <h1 className="title">Kontak SMK REVIT</h1>
      <p style={kontakStyles.paragraph}>Sidoarjo.</p>
    </div>
  );
}

export default Kontak;