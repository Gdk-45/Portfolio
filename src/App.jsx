import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/MainPage';
import QuoteAnimation from './Pages/WordPullup';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuoteAnimation/>} />
        <Route path="/MainPage" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
