// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Layout/Navbar';
import { TaskProvider } from './context/TaskContext';
import { useDarkMode } from './hooks/useDarkMode';
import { useMouseEffect } from './hooks/useMouseEffect';

const  App = ()=>  {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { position, isVisible } = useMouseEffect();
  
  return (
    <TaskProvider>
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Home />
        </main>
        
        {/* Custom mouse follower effect */}
        {isVisible && (
          <div
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
              left: position.x - 100,
              top: position.y - 100,
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0) 70%)',
              transition: 'transform 0.1s ease-out'
            }}
          />
        )}
      </div>
    </TaskProvider>
  );
}

export default App;