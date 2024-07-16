import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Branch from "../Components/Branch/Branch";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Lavash from "../Components/Lavash";
import Desert from "../Components/Desert";
import Set from "../Components/Set";
import Xaggi from "../Components/Xaggi";
import Burger from "../Components/Burger";
import Pizza from "../Components/Pizza";
import Sendvich from "../Components/Sendvich";
import Donar from "../Components/Donar";
import Xotdog from "../Components/Xotdog";
import Free from "../Components/Free";
import Drink from "../Components/Drink";
import Salad from "../Components/Salad";
import Bread from "../Components/Bread";
import Sauce from "../Components/Sauce";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                children: [
                    {
                        path: "/",
                        element: <Lavash/>,
                    },
                    {
                        path: "/desert",
                        element: <Desert/>,
                    },
                    {
                        path: "/set",
                        element: <Set/>,
                    },
                    {
                        path: "/xaggi",
                        element: <Xaggi/>,
                    },
                    {
                        path: "/burger",
                        element: <Burger/>,
                    },
                    {
                        path: "/pizza",
                        element: <Pizza/>,
                    },
                    {
                        path: "/sendvich",
                        element: <Sendvich/>,
                    },
                    {
                        path: "/donar",
                        element: <Donar/>,
                    },
                    {
                        path: "/xotdog",
                        element: <Xotdog/>,
                    },
                    {
                        path: "/free",
                        element: <Free/>,
                    },
                    {
                        path: "/drink",
                        element: <Drink/>,
                    },
                    {
                        path: "/salad",
                        element: <Salad/>,
                    },
                    {
                        path: "/bread",
                        element: <Bread/>,
                    },
                    {
                        path: "/sauce",
                        element: <Sauce/>,
                    },
                ]
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