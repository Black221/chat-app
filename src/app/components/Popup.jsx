import { useRef, useEffect } from 'react'

const Popup = ({open, close}) => {

	//Close on click outside
	const popupRef = useRef();

	useEffect(() => {
		const checkIfClickedOutside = e => {
			if (open && popupRef.current && !popupRef.current.contains(e.target)) {
				close()
			}
		}
		document.addEventListener("mousedown", checkIfClickedOutside)
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [open])


	return (<>
	
		{open && <div className='absolute w-screen h-screen bg-white-100 bg-opacity-30 z-[100] flex items-center justify-center'>

			<div ref={popupRef} className='p-3 px-4 flex flex-col justify-center space-y-6 bg-white rounded-xl'>
				<div className='text-xl font-bold'>Profile</div>
				<img className='w-20 h-20 rounded-full mx-auto' src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" />
				<div className="relative">
					<label htmlFor="name font-semibold">Name</label>
					<input type="text" name="name" id="name" className='border-2 border-gray-300 rounded-md p-1 block' />
				</div>
				<div>
					<button className='bg-blue-500 text-white rounded-md p-1'>Join</button>
				</div>
			</div>
		</div>}
		
	</>)
}

export default Popup;