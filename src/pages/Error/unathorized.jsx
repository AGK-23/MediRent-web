import { useNavigate } from "react-router-dom";
import ErrorImg from '../../assets/svg/unauthorized.svg';

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return <div
        className='h-screen flex justify-center flex-col items-center w-full'

    >
        <div className='bg-white p-3 max-w-sm'>
            <div className=' mb-7'>
                <img alt="" src={ErrorImg} className="text-[1px]" />
            </div>

            <div className='w-full '>
                <div className='text-zinc-800 font-semibold text-sm'>
                    Sorry you have been Unauthorized:
                </div>
                <div className='font-light text-[#353535] text-xs leading-[20px] mb-7'>
                I am sorry, but it seems like you are not authorized to access this page. Please check your login credentials or contact the website administrator for further assistance.
                </div>

                <span className="text-white font-medium text-sm text-center w-full mt-8 ">
                    <button className="rounded-lg bg-sky-500 py-2 px-5" onClick={goBack}>Go Back</button>
                </span>
            </div>

        </div>

        
    </div>;
}

export default Unauthorized