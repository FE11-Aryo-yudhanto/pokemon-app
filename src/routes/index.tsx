import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MyPokemon from "../pages/MyPokemon";
import DetailsPokemon from "../pages/DetailsPokemon";
import CatchPokemon from "../pages/CatchPokemon";
import Home from "../pages"

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

const App = () =>{
    return (
        <RouterProvider router={router}/>
    )
}
export default App