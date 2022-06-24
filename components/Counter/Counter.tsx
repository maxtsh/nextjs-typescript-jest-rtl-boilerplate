import { useState } from "react";
import { Container } from "./Counter.styles";
import type { IProps } from "./Counter.types";

const Counter: React.FC<IProps> = ({ max, min, defaultValue }) => {
  const [num, setNum] = useState<number>(defaultValue);
  const [inc, setInc] = useState<number>(0);

  const handleAdd = () => {
    if (max === num) return null;
    if (max && num < max) setNum((prev) => prev + (inc ? inc : 1));
    if (!max) setNum((prev) => prev + (inc ? inc : 1));
  };

  const handleReduce = () => {
    if (num === min) return null;
    if (min && num > min) setNum((prev) => prev - (inc ? inc : 1));
    if (!min) setNum((prev) => prev - (inc ? inc : 1));
  };

  return (
    <Container>
      <h2 className="title" role="counter-title">
        Counter
      </h2>
      <h3 className="number" role="counter-number">
        {num}
      </h3>
      <label htmlFor="inc">Incrementor</label>
      <input
        value={inc}
        role="incrementor"
        type="number"
        name="inc"
        onChange={(e) => setInc(+e.target.value)}
      />
      <button className="btn" onClick={handleAdd} role="add">
        Add
      </button>
      <button className="btn" onClick={handleReduce} role="reduce">
        Reduce
      </button>
    </Container>
  );
};

export default Counter;
