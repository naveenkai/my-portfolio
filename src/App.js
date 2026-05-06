import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Writing from './Writing';
import Post from './Post';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Post />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
