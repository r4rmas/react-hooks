const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_theme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "toggle_favorite":
      return {
        ...state,
        favorites: state.favorites.includes(action.favorite)
          ? state.favorites.filter((favorite) => favorite !== action.favorite)
          : [...state.favorites, action.favorite],
      };
    default:
      return state;
  }
};

export default reducer; 
