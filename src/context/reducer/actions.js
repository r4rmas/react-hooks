export const toggleTheme = () => {
  return { type: "toggle_theme" };
};

export const toggleFavorite = (favorite) => {
  return { type: "toggle_favorite", favorite: favorite };
};
