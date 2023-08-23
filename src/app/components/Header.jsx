import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import Popup from './Popup';

const Header = ({ room = "Global", openSidebar }) => {

	const [showPopup, setShowPopup] = useState(true);
	
	const onpenPopup = () => {
		setShowPopup(true)
	}

	const closePopup = () => {
		setShowPopup(false)
	}

	return (<>
    
		<div className="bg-white flex items-center space-x-3 justify-between p-2">
			<button onClick={openSidebar}>
				<HiMenuAlt1 className='text-3xl'/>
			</button>        

			<div className='ring-offset-2 divide-gray-100  text-2xl flex-1 capitalize'>{room}</div>

			<div className="flex items-center space-x-3 text-black ">
			
				<div className='flex-wrap'>
					<div className='text-sm'>MEKA</div>  
					<button onClick={onpenPopup}>
						<BiEditAlt className='text-2xl'/>
					</button>
				</div>
				<img className='w-12 h-12 rounded-full' src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" />
			</div>
			
		</div>

		<Popup open={showPopup} close={closePopup} />

	</>)
}
export default Header;