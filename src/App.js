import React from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Theme from "./components/Theme";

const App = () => {
  return (
    <Theme>
      <Header />
      <Characters />
    </Theme>
  );
};

export default App;
