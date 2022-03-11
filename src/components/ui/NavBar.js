import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4">
      <Link to="/">Home</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/">Forms</Link>
    </nav>
  )
}