import Message from "./Message";

const MessagesList = ({ data }) => {

    return (
        <ul>
            {data.map(({message}, index) => (
                <li key={index}>
                    <Message message={message} user={"John Doe"} />
                </li>
            ))}
        </ul>
    );
}

export default MessagesList;