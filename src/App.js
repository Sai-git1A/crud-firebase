import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Post from './Components/Post';
import Read from './Components/Read';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/read' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
