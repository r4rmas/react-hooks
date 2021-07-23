export const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_theme":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const initialState = {
  theme: "light",
};
