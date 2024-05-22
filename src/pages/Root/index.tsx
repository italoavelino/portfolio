import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Root = () => (
    <div className="flex mx-auto min-h-screen max-w-screen-xl">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>

)

export default Root;