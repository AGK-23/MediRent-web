
import ErrorImg from '../../assets/svg/Error.svg';
import { Link } from "react-router-dom";


const Error = () => {
    return <div
        className='h-screen flex justify-center flex-col items-center w-full'

    >
        <div className='bg-white p-3 max-w-sm'>
            <div className=' mb-7'>
                <img alt="" src={ErrorImg} className="text-[1px]" />
            </div>

            <div className='w-full '>
                <div className='text-zinc-800 font-semibold text-sm'>
                    Oops! Page Not Found:
                </div>
                <div className='font-light text-[#353535] text-xs leading-[20px] mb-7'>
                    We are sorry, but it seems like the page you are looking for is missing. Please check the URL or try navigating back to the homepage. If you continue to encounter this issue, please contact our support team for further assistance.
                </div>

                <span className="text-sky-500 font-medium text-sm underline flex justify-center text-center w-full mt-8 ">
                    <Link to="/">Go Back To The Home Page</Link>
                </span>
            </div>

        </div>

        
    </div>;
}


export default Error;
