import { Routes, Route } from 'react-router-dom';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentangan from './pages/Tentangan';
import Home from './pages/Home';
import MyComponent from './pages/MyComponent';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/tentangan" element={<Tentangan />} />
        <Route path="/mycomponent" element={<MyComponent />} />
      </Routes>
    </div>
  );
}

export default App;
