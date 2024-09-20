const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

const defaultTheme = { theme: "light" };

const themeReducer = (state = defaultTheme, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export default themeReducer;