import React from 'react'
import { Link } from 'react-router-dom';

const Wpotrait = ({ images, nama, alamat, deskripsi, }) => {
    return (
        <>

            <div className='mx-8'>
                <div>
                    <img src={images} alt="" className='w-screen rounded-xl' />
                </div>
                <div>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-4xl'>{nama}</h1>
                    <h3 className='text-sm md:text-lg lg:text-2xl'>{alamat}</h3>
                    <p className='mt-6 text-sm md:text-lg lg:text-2xl'>{deskripsi}</p>
                </div>
                <Link to={`/`} className='px-1 text-white mt-2'>
                    <button className='hover:scale-110 duration-300 bg-blue-500 rounded-md'>Back to Home</button>
                </Link>
            </div>
        </>
    );
};

export default Wpotrait;