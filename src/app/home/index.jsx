import { useState } from "react"
import Sidebar from "../components/Sidebar"
import ChatRoom from "../components/ChatRoom"



const Home = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (<>
        <div className="relative">
            <Sidebar visible={showSidebar} />

            <ChatRoom room={"global"} />
        </div>
    </>)
}

export default Home
