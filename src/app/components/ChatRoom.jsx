import { useState } from "react";

import InputMessage from "./InputMessage";
import MessagesList from "./MessagesList";

import bg from "../../assets/bg.png";


const ChatRoom = ({room = "global"}) => {

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")


    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            setMessages([...messages, { id: 1, message: { text : message, user: "John Doe" }}])
            setMessage("")
        }
    }
    

    return (<>
        <div className={`relative bg-cover bg-[url('./bg.png')]  flex-1`}>

            <div className="flex flex-col  overflow-hidden h-full">
                <div className="flex-1 overscroll-y-auto">
                    <MessagesList data={messages} />
                </div>

                <InputMessage message={message} sendMessage={sendMessage} setMessage={setMessage} />
            </div>
        </div>
    </>)
}


export default ChatRoom;