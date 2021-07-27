import React, { useEffect, useContext } from "react";
import Header from "./components/Header";
import Characters from "./screens/Characters";
import Context from "./context";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const [{ theme } , dispatch] = useContext(Context);

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header />
      <Characters />
    </>
  );
};

export default App;
