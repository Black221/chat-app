


const Message = ({ message, user }) => {

    let isSentByCurrentUser = false;

    const trimmedName = user.trim().toLowerCase();

    if (message.user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="flex w-full mt-4 mr-2 justify-end">
                    <div>
                        <div className="bg-white border w-fit max-w-[280px] rounded-md p-2">
                            <p className="message-text color-dark max-w-[280px] break-words">{message.text}</p>
                        </div>
                        <p className="text-sm text-end font-semibold">vous</p>
                    </div>
                </div>
            )
            : (
                <div className="flex w-full ml-2 mt-4 justify-start">
                    <div>
                        <div className="bg-white border w-fit max-w-[280px] rounded-md p-2">
                            <p className="message-text color-dark max-w-[280px] break-words">{message.text}</p>
                        </div>
                        <p className="text-sm font-semibold">{message.user}</p>
                    </div>
                </div>
            )
    );
}

export default Message;