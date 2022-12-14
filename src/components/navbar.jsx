import React from 'react'
import Nav from '../assets/menu.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#2D8CE3] mb-4 justify-between flex px-1 py-1 space-x-2'>

            <div className='py-1 px-1'>
                <h1 className='font-bold text-white '>WISMA</h1>
            </div>

            <div className='text-white ml-40 lg:ml-60 px-1 py-1 w-max'>
                <ul className='hidden sm:flex ml-24 lg:ml-32 space-x-10 lg:space-x-16 '>
                    <li className='hover:scale-110 duration-300'><Link to={'/'}>Home</Link></li>
                    <li className='hover:scale-110 duration-300'><Link to={'/detail1'}>About</Link></li>
                </ul>
                <div>
                    <img src={Nav} alt="" className='md:hidden px-2 py-2 w-9' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;