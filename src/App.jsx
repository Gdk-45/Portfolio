import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/MainPage';
import QuoteAnimation from './Pages/WordPullup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuoteAnimation/>} />
        <Route path="/MainPage" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
