
import './App.css';
import TodoList from './compenents/TodoList';
import React from 'react';
import Horizontal from './compenents/Horizontal';
import Logo from './compenents/Logo';
import Taskbar from './compenents/Taskbar';
import Bigevent from './compenents/Bigevent';
import Bar from './compenents/Bar';
import Promotitional from './compenents/Promotional ';
const App = () => {
  return (
    <div className="App">
      <div className="size">
        <header className="header">
          <Logo />
        </header>
        <nav className='menu'>
          <Horizontal />
        </nav>
        <div className='container'>
          <tp >
            <div>
              <Bar />
            </div>
            <div>
              <Taskbar />
            </div>
          </tp>
          <div className='form'>
            <Bigevent />
          </div>
          <div className='promotional'>
            <Promotitional />
          </div>
        </div>
        <div className='end'>
          <p>End</p>
        </div>

      </div>
    </div>
  );
}

export default App;
