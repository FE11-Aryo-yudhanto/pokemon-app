import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailsPokemon from "../pages/DetailsPokemon";
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
])

const App = () =>{
    return (
        <RouterProvider router={router}/>
    )
}
export default App