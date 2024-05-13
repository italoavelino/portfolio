import { Outlet } from "react-router-dom";

const Root = () => (
    <div style={{ height: '100vh' }}>
        <Outlet />
    </div>
)

export default Root;