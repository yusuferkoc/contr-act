import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';


const Services = () => {
    return (
        <div className='flex w-full justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-200 py-12 px-1'>
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
                    Recent transactions 
                        <br />
                        in Goerli Contract 
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Services;