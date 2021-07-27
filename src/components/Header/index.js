import React, { useContext } from "react";
import Context from "../../context";
import { toggleTheme } from "../../context/reducer/actions";
import { Title } from "./styles";

const Header = () => {
  const [{ theme }, dispatch] = useContext(Context);

  return (
    <div>
      <Title theme={theme}>ReactHooks</Title>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? "☀️" : "🌘"}
      </button>
    </div>
  );
}

export default Header;
