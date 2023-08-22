import { useCallback, useState, useEffect } from "react";

import ProfileList from "./ProfileList";
import InputSearch from "./InputSearch";
import SidebarHead from "./SidebarHead";
import useDebounce from "../../hooks/useDebounce";


const Sidebar = ({visible = false}) => {

    const [data, setData] = useState([
        {
            name: "John Doe",
        },
        {
            name: "Bamba fdg",
        }
    ]);

    const [profiles, setProfile] = useState(data);

    const [search, setSearch] = useState("")
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const debouncedSearch = useDebounce(search, 500)

    const filterProfile = useCallback(() => {
        return profiles.filter((profile) => {
            return profile.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        })
    }, [debouncedSearch, profiles])


    useEffect(() => {
        if (debouncedSearch) {
            setProfile(filterProfile())
        } else {
            setProfile(data)
        }
    }, [debouncedSearch])



    return (<>
        {visible && <div className="w-64 bg-gray-100 p-4 absolute">
            <SidebarHead />

            <InputSearch onChange={onChange} value={search} />

            <ProfileList data={profiles} />
        </div>}
    </>)
}

export default Sidebar;