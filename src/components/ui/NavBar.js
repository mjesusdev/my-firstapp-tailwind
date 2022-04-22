import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  // Extract pathanme from location
  /* const { pathname } = useLocation(); */

  return (
    <nav className="flex sm:justify-center space-x-4">
      <NavLink 
        className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
        to="/"
        i/* sActive={() => ['/', '/'].includes(pathname) } */
      >
          Home
      </NavLink>
      <NavLink 
        className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
        to="/cards"
        /* isActive={() => ['/cards', '/cards'].includes(pathname) } */
      >
          Cards
      </NavLink>
      <NavLink 
        className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
        to="/"
        /* isActive={() => ['/', '/'].includes(pathname) } */
      >
          Forms
      </NavLink>
    </nav>
  )
}