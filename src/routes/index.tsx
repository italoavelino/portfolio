import { createBrowserRouter } from "react-router-dom"
import Projects from "../pages/Projects"
import Root from "../pages/Root"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

export const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projetos',
                element: <Projects />
            }
        ]
    }
])