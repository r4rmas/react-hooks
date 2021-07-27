import React, { useReducer } from "react";
import Context from "../../context";
import reducer from "../../context/reducer";
import InitialState from "../../context/reducer/InitialState";

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
