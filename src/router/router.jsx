import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Branch from "../Components/Branch/Branch";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/branch",
                element: <Branch/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }
        ]
    },
    ]    
)
export default router   