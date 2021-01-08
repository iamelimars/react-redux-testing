import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
};

export default App;
