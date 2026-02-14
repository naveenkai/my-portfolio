import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Blogs from './Blogs';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blogs/*" element={<Blogs />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
