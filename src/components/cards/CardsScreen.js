import React from 'react'

import logo from '../../assets/logo.svg';
import '../../assets/App.css';
import '../../assets/index.css';
import NavBar from '../ui/NavBar';

export const CardsScreen = () => {
  return (
    <div className="App">
        <header className="App-header">
            <NavBar />

            <img src={logo} className="App-logo" alt="React Icon 🚀" />
            <div className='text-5xl font-extrabold mb-5'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Cards!
                </span>
            </div>
        </header>
        {/* // TODO: Create components & Footer to add the repository & more */}
    </div>
  )
}
