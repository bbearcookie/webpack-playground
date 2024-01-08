import React, { useEffect, useState } from 'react';
import path from 'path';
import './main.css';
import Counter from '@/components/Counter';
import Bear from './assets/bearbear.jpg';

class MyClassHaha {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <img src={Bear} alt="assets 곰" />
      <div className="flex h-52 w-full bg-red-200">어서오세요! App이에요</div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
