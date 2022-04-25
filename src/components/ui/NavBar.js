import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  return (
    <nav className="flex sm:justify-center space-x-4">
      <NavLink 
        className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
        to="/"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? '#f7f7f7' : 'transparent',
            color: isActive ? '#000' : '#f7f7f7'
          }
        }}
        >
          Home
      </NavLink>
      <NavLink 
        className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
        to="/cards"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? '#f7f7f7' : 'transparent',
            color: isActive ? '#000' : '#f7f7f7'
          }
        }}
        >
          Cards
      </NavLink>
      <NavLink 
        className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
        to="/"
        >
          Forms
      </NavLink>
    </nav>
  )
}