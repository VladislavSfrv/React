import * as React from "react";
import { UserContext } from "../../contexts/UserContext";
import HOC from "../HOC/HOC";

function Main() {
    const [username, setUsername] = React.useState("Guest");
    return (
            <main className="main ">
                <h1>React Context</h1>
                <UserContext.Provider value={{ userName: username, setUserName: setUsername }} />
                <button onClick={() => setUsername(prompt("Напишите свое имя"))}>Click</button>
                <h2>Привет, {username}</h2>
            </main>
    );
}

const MainWithLoading = HOC(Main);
export default MainWithLoading;