import { useCallback, useState, useEffect, useRef } from "react";

import ProfileList from "./ProfileList";
import InputSearch from "./InputSearch";
import SidebarHead from "./SidebarHead";
import useDebounce from "../../hooks/useDebounce";


const Sidebar = ({visible = false, closeSidebar}) => {


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

    //Close sidebar when click outside
    const sidebar = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebar.current && !sidebar.current.contains(e.target)) {
                closeSidebar()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebar]);



    return (<>
        {visible && <div ref={sidebar} className="w-64 bg-gray-100 p-4 absolute z-[1000] h-screen">
            <SidebarHead />

            <InputSearch onChange={onChange} value={search} />

            <ProfileList data={profiles} />
        </div>}
    </>)
}

export default Sidebar;