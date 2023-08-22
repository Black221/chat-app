


const Profile = ({ data = { name : "John Doe"} }) => {

    return (<>
        <div className="my-2 p-2 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://picsum.photos/200/300" alt="profile" />
            </div>
            <div className="text-base font-semibold ml-2">
                <h1>{data.name}</h1>
            </div>
        </div>
    </>)
}


export default Profile;
