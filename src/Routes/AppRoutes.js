import { createBrowserRouter } from "react-router-dom";
import Home from "../App/Home/Home";
import Docs from "../App/Docs/Docs";


const appRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/docs",
        element:<Docs/>
    }
])

export default appRoutes