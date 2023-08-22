import { useState, useEffect } from 'react'
import Profile from "./Profile";


const ProfileList = ({ data }) => {

    const [profiles, setProfile] = useState([]);

    useEffect(() => {
        setProfile(data)
    }, [data])
    
    return (<>
        <h2 className="text-xl font-bold my-3">Participants</h2>
        <div className="profile-list bg-white rounded-xl">
            {profiles.map((profile, index) => {
                return <Profile key={index} data={profile} />
            })}
        </div>
    </>)
}


export default ProfileList;