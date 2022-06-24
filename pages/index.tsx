import type { NextPage } from "next";
import Counter from "../components/Counter";
import Items from "../components/Items";

const Home: NextPage = () => {
  return (
    <div>
      <h1 style={{ fontSize: "400%", fontWeight: 900, textAlign: "center" }}>
        React Testing Library
      </h1>
      {/* <Counter defaultValue={0} min={0} /> */}
      <Items />
    </div>
  );
};

export default Home;
