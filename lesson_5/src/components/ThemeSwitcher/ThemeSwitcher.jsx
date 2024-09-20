import { useDispatch, useSelector } from "react-redux";
import "./themeSwitcher.css"

function ThemeSwitcher() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    }
    return (
        <div className={theme.theme}>
            <h1>На этой странице, вы можете изменить тему</h1>
            <button onClick={toggleTheme}>
                Нажми
            </button>
            <p>Сменить тему на {theme.theme === "light" ? "темную" : "светлую"}</p>
        </div>
    );
}

export default ThemeSwitcher;