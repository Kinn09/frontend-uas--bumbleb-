import React from 'react'
import Wisata from '../components/Wisata';

const Utama = () => {
    return (
        <div className=''>
            <div className='md:flex'>
                <Wisata />
                <Wisata />
                <Wisata />
            </div>
            <div className='md:flex'>
                <Wisata />
                <Wisata />
                <Wisata />
            </div>
            <div className='md:flex'>
                <Wisata />
                <Wisata />
                <Wisata />
            </div>
        </div>

    )
}

export default Utama;
