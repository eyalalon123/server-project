
import './App.css';
import Home from './component/Home';
import Drive from './component/Drive'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/drive" element={<Drive />} />
      </Routes>
    </div>
  );
}

export default App;
