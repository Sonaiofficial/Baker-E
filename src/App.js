import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reservation from './components/Reservation';
import Bakers from './components/Bakers';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/bakers' element={<Bakers />} />
        </Routes>
      </Router>
      
  );
}

export default App;
