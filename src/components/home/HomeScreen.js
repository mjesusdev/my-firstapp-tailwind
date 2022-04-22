import React from 'react'

import logo from '../../assets/logo.svg';
import '../../assets/App.css';
import '../../assets/index.css';
import NavBar from '../ui/NavBar';

const handleClick = () => {
    alert('My First Alert in Tailwind 🚀🚀');
    // px - left & right padding
}

export const HomeScreen = () => {
  return (
    <div className="App">
        <header className="App-header">
            <NavBar />

            <img src={logo} className="App-logo" alt="React Icon 🚀" />
            <div className='text-5xl font-extrabold mb-5'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Hello world
                </span>
            </div>
            <button onClick={handleClick}
                className="bg-sky-500 font-bold tracking-tighter rounded padding shadow-lg shadow-sky-500/50 hover:bg-sky-700 p-2">
                Open an Alert 🙈
            </button>
        </header>
        {/* // TODO: Create components & Footer to add the repository & more */}
    </div>
  )
}
