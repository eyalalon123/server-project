
import './App.css';
import Home from './component/Home';
import Drive from './component/Drive';
import Register from './component/Register';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [userOnline , setUserOnline] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register setUserOnline = {setUserOnline} />} />
        <Route path='/login' element={<Home setUserOnline = {setUserOnline} />} />
        <Route path="/drive" element={<Drive userOnline = {userOnline} />} />
      </Routes>
    </div>
  );
}

export default App;
