import React from 'react'

import logo from '../../assets/logo.svg';
import '../../assets/App.css';
import '../../assets/index.css';
import NavBar from '../ui/NavBar';

export const FormsScreen = () => {
  return (
    <header className="App-header">
        <NavBar />

        <img src={logo} className="App-logo 2xl:object-scale-down" alt="React Icon 🚀" />
        <div className='text-5xl font-extrabold mb-5'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                Form
            </span>
            <form>
              <div className="grid grid-cols-1 gap-6 mt-5">
                <label className="block text-left">
                  <span className="text-white-700 text-sm">Username</span>
                  <input type="text" className="
                      form-control
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder="Username" data-ddg-inputtype="identities.fullName" />
                </label>
                <label className="block text-left">
                  <span className="text-white-700 text-sm">Email address</span>
                  <input type="email" className="
                      form-control
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder="user@user.com" data-ddg-inputtype="identities.emailAddress" data-ddg-autofill="true" />
                </label>
              </div>
            </form>
        </div>
    </header>
    // TODO: Create components & Footer to add the repository & more
  )
}
