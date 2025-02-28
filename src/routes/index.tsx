import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root"
import AboutMe from "../pages/AboutMe"
import NotFound from "../pages/NotFound"
import Experiences from "../pages/Experiences"

export const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <AboutMe />
            },
            {
                path: '/experiencias',
                element: <Experiences />
            }
        ]
    }
])