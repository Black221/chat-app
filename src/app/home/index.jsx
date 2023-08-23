import { useState, useEffect, useRef } from "react"
import Sidebar from "../components/Sidebar"
import ChatRoom from "../components/ChatRoom"

import Header from "../components/Header"
const Home = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    const openSidebar = () => {
        setShowSidebar(true)
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }


    return (<>
        <div className="relative h-screen overflow-hidden flex flex-col">
            <Header room={"global"} openSidebar={openSidebar}/>

            <Sidebar visible={showSidebar} closeSidebar={closeSidebar} />

            <ChatRoom room={"global"} />
        </div>
    </>)
}

export default Home
