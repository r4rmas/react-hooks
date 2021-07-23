import React, { useReducer } from "react";
import ThemeContext from "../../context";
import { initialState, reducer } from "../../context/reducer";

const Theme = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={[state.theme, dispatch]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;
