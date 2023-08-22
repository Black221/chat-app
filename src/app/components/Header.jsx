import { HiMenuAlt1 } from 'react-icons/hi';
import { AiFillEdit} from 'react-icons/ai';


const Head = () => {
  
  
  return (
    <>
    


    <nav className="bg-[bisque] border-gray-200 ">
        <div className="flex justify-between mx-auto max-w-screen-xl p-4">
        <HiMenuAlt1 className='  w-auto h-[40px]'/>        <div className='ring-offset-2 divide-gray-100  text-2xl'>ChatRoom</div>
            <div className="flex text-black ">
        
            <div className='flex-wrap'>
                  MEKA  
                  <AiFillEdit  className=' w-auto h-[30px]'/>
              </div>
                <button data-collapse-toggle="navbar-hamburger" type="button" className=" flex-wrap inline-flex  justify-center p-42 w-12 h-12 ml-39 text-sm text-gray-500 rounded-full bg-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " >
              
              </button>
            </div>
        </div>
    </nav>
    <nav className="bg-gray-50 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            
        </div>
    </nav>

    </>
  )
}
export default Head 