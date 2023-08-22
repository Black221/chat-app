import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";


const Layout = () => {

    const ref = useRef();

    useEffect(() => {
        console.log(ref);
    },[])

    return (
        <main ref={ref} className="overflow-auto">
            <Outlet />

        </main>
    )
}

export default Layout;