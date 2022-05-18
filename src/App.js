import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.scss';
import Header from './components/Header/Header';
import About from './pages/About/About';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Project from './pages/Project/Project';

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16
      const y = e.clientY - 16
      setCursorXY({ x, y })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])
    

  return (
    <div className="App">
        <Router>
        <div 
          className="cursor" 
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }}
        />
        <Header />

            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/portfolio' element={<Portfolio />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/project/:projectSlug' element={<Project />}/>
            </Routes>

        </Router>
    </div>
  );
}

export default App;
