
import './App.css';
import Home from './component/Home';
import Drive from './component/Drive';
import Register from './component/Register';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path='/login' element={<Home />} />
        <Route path="/drive" element={<Drive />} />
      </Routes>
    </div>
  );
}

export default App;
