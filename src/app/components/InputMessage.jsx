import { useState } from "react";
import { BiLink, BiSolidSend } from "react-icons/bi";
import { FaRegSmileBeam } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const InputMessage = ({ message, setMessage, sendMessage }) => {

    const [showEmoji, setShowEmoji] = useState(false)
    const [showLink, setShowLink] = useState(false)

    const toggleEmoji = () => {
        setShowEmoji(!showEmoji)
    }

    const toggleLink = () => {
        setShowLink(!showLink)
    }

    const printEmoji = (emoji) => {
        setMessage(message + emoji.native)
    }

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
        setFile(e.target.files[0]);
        }
    };

    const removeFile = () => {
        setFile(null);
    };


    return (<>

        
        <div className="bg-white flex p-2 space-x-3 items-center relative border">

            {showLink && <div className="absolute flex w-full">
                <div className="bg-white rounded-full p-3 relative -top-16 border flex space-x-3">
                    <button onClick={toggleEmoji}>
                        <FaRegSmileBeam className="text-2xl" />
                    </button>
                    
                    <label htmlFor="file">
                        <HiPhotograph className="text-2xl" />
                    </label>
                    <input type="file" id="file" className="hidden"  onChange={handleFileChange} />

                </div>

                {showEmoji && <div className="absolute bottom-32 z-30">
                    <Picker data={data} onEmojiSelect={printEmoji} />
                </div>}

            </div>}

            {file && <div className="absolute bottom-16 overflow-hidden right-4 rounded w-32 h-32 bg-white border flex items-center justify-center">
                <img src={URL.createObjectURL(file)} alt="preview" className="" />
                <button className="absolute z-20 top-0 right-0" onClick={removeFile} >
                    <AiFillDelete className="text-2xl text-red-600" />
                </button>
            </div>}

            <button onClick={toggleLink} className="relative">
                <BiLink className="text-2xl" />
            </button>

            <input
                className="p-2 flex-1 z-50"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && sendMessage(e)}
            />

            <button onClick={(e) => sendMessage(e)}>
                <BiSolidSend className="text-2xl" />
            </button>
        </div>
    </>);
}

export default InputMessage;