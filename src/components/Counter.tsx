import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>카운터에요 ({counter})</h1>
      <button onClick={() => setCounter(counter + 1)}>증가</button>
      <button onClick={() => setCounter(counter - 1)}>감소</button>
    </div>
  );
};

export default Counter;
