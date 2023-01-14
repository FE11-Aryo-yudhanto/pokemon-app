import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useState, useMemo, useEffect} from 'react'

import MyPokemon from "../pages/MyPokemon";
import DetailsPokemon from "../pages/DetailsPokemon";
import CatchPokemon from "../pages/CatchPokemon";
import Home from "../pages"

import { ThemeContext } from "../utils/context";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail/:id_pokemon/:name_pokemon",
        element: <DetailsPokemon />,
    },
    {
        path: "/catch/:name_pokemon",
        element: <CatchPokemon />,
    },
    {
        path: "/mypokemon",
        element: <MyPokemon />,
    },
])

const App = () => {
    const [theme, setTheme] = useState("light")
    const background = useMemo(() => ({ theme, setTheme }), [theme])

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);
    return (
        <ThemeContext.Provider value={background}>
            <RouterProvider router={router} />
        </ThemeContext.Provider>        
    )
}
export default App