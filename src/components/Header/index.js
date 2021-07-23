import React, { useContext, useEffect } from "react";
import ThemeContext from "../../context";
import { toggleTheme } from "../../context/actions";
import { Container } from "./styles";

const Header = () => {
  const [theme, dispatch] = useContext(ThemeContext);

  useEffect(() => console.log(theme), []);

  return (
    <Container>
      <h1>ReactHooks</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? "☀️" : "🌘"}
      </button>
    </Container>
  );
};

export default Header;
