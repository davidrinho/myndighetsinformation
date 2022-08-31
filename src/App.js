import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Picker from './pages/Picker';
import Subpicker from './pages/Subpicker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/myndighetsstatistik" element={<Picker />}/>
        <Route caseSensitive path="/myndighet/:myndighet" element={<Subpicker />}/>
      </Routes>
    </Router>
  );
}

export default App;
