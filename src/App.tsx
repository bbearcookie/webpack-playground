import Counter from "./components/Counter";

class MyClassHaha {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const App = () => {
  return (
    <div>
      <div>어서오세요! App이에요</div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
