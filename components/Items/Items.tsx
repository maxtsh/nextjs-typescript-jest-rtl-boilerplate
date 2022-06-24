import { useState } from "react";
import { Container } from "./Items.styles";

const Items: React.FC = () => {
  const [name, setName] = useState<string>("First");

  const handleClick = () => setTimeout(() => setName("Second"), 200);

  return (
    <Container>
      <h1 className="title">Items</h1>
      <h2 className="timeout-value" role="to-value">
        {name}
      </h2>
      <button onClick={handleClick} className="btn" role="call-timeout">
        Call Timeout
      </button>
    </Container>
  );
};
export default Items;
