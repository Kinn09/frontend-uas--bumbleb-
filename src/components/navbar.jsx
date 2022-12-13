import React from 'react'
import Nav from '../assets/menu.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#2D8CE3] mb-4'>
            <div className='flex justify-between px-1 py-1 space-x-2'>
                <div className='hidden md:block py-1 px-1'>
                    <h1 className='font-bold text-white'>WISMA</h1>
                </div>
                <div className='md:hidden px-2 py-2'>
                    <img src={Nav} alt="" className='w-5' />
                </div>
                <nav className='hidden sm:block justify-between text-white ml-40 lg:ml-60 px-1 py-1'>
                    <ul className='flex ml-24 lg:ml-32 space-x-10 lg:space-x-16 '>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/detail1'}>Wisata</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;