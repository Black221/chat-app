import { useState } from 'react';

const SidebarHead = ({onlineCount = 0}) => {

    const [count, setCount] = useState(onlineCount);

    return (<>
        <h1 className='text-2xl font-bold my-4 '>Rooms</h1>
        <div className="flex mb-4 space-x-2">
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://picsum.photos/200/300" alt="profile" />
            </div>
            <div>
                <h1 className="text-xl font-medium">Global chat</h1>
                <div className='flex items-center space-x-1'>
                    <span className='bg-[#1BED30] inline-block w-2 h-2 rounded-full'></span>
                    <span className='font-medium'>Online</span> 
                    <span> {count}</span>
                </div>
            </div>
        </div>
    </>)
}

export default SidebarHead;