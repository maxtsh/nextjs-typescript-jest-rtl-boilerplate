import type { NextPage } from "next";
import { useEffect } from "react";
// import Counter from "../components/Counter";
// import Items from "../components/SetTimeOut";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  useEffect(() => {
    document.cookie = "id=a3fWa; Secure; HttpOnly;";
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "400%", fontWeight: 900, textAlign: "center" }}>
        React Testing Library
      </h1>
      {/* <Counter defaultValue={0} min={0} /> */}
      {/* <Items /> */}
      <Gallery />
    </div>
  );
};

export default Home;
