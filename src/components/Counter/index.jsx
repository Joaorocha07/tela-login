import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((actualCount) => actualCount + 1);
  };

  const handleDecrement = () => {
    setCount((actualCount) => actualCount - 1);
  };

  return (
    <div>
      <p>
        Contador:
        {count}
      </p>
      <input type="button" onClick={handleIncrement} value="+" />
      <input type="button" onClick={handleDecrement} value="-" />
    </div>
  );
};

export default Counter;
