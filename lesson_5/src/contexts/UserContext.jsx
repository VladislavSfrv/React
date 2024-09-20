import { createContext } from "react";

export const UserContext = createContext({
    userName: "Guest",
    setUserName: () => {}
})