import React, { useEffect, useState } from 'react';
import path from 'path';
import { Link, Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Counter from '@/components/Counter';
import Bear from './assets/bearbear.jpg';
import './main.css';

class MyClassHaha {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const App = () => {
  return (
    <div>
      <img src={Bear} alt="곰" />
      <div className="flex h-52 w-full bg-red-200">어서오세요! App이에요</div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Link to="/one">One</Link>
      <Link to="/two">Two</Link>
      <Outlet />
    </div>
  );
};

export default App;
