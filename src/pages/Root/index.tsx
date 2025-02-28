import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css"
import { useEffect, useState } from "react";

const Root = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            })
        })
    })

    console.log(mousePosition)

    return (
        <div className="lg:flex mx-auto min-h-screen max-w-screen-xl animation">
            <Header />
            <main className="my-24 lg:w-1/2">
                <Outlet />
            </main>
            <div className="cursor" style={{ top: mousePosition.y, left: mousePosition.x, }} />
        </div>

    )
}

export default Root;