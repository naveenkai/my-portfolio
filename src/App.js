import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
