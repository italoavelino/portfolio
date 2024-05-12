import { Route, Routes, createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import App from "../App"

const APP_PATHS = {
    ROOT: '/',
    ABOUT: '/sobre',
    INFORMATION: '/informacao',
    PROJECTS: '/projetos',
    EXPERIENCES: '/experiencia',
    CONTACTS: '/contatos',
    FAQ: '/faq'
}

export const AppRoutes = () => (
    <Routes>
        <Route path={APP_PATHS.ROOT} element={<Home />} />
        <Route path={APP_PATHS.PROJECTS} element={<Projects />} />
    </Routes>
)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/projetos',
        element: <Projects />
    }
])