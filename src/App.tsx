import React from "react";
import Counter from "@/components/Counter";
import Bear from "@/assets/bearbear.jpg";

class MyClassHaha {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const App = () => {
  return (
    <div>
      <img src={Bear} alt="assets 곰" />
      <div className="bg-red-200 w-full h-52">어서오세요! App이에요</div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
