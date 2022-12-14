import React from 'react'
import image from "../assets/bill.jpg"
import images from "../assets/IMG_20211030_141751.jpg"
import What from "../assets/whatsapp.svg"
import ig from "../assets/instagram.svg"


const About = () => {
    return (
        <>
            <div className='md:flex md:space-x-10 justify-center items-center mt-10'>
                <div className='item-center justify-center'>
                    <img src={image} alt="" className='w-96' />
                    <div className='item-center'>
                        <h2 className='text-base md:text-xl lg:text-2xl font-bold'>Billy Wirjosusanto</h2>
                        <h3>26 April 2003</h3>
                        <h3>Role: Frontend</h3>
                        <div className='flex space-x-2'>
                            <img src={What} alt="" className='w-6' />
                            <p>0895-3262-12345</p>
                        </div>
                        <div className='flex space-x-2'>
                            <img src={ig} alt="" className='w-5' />
                            <p>billy_wirjosusanto</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img src={images} alt="" className="w-72" />
                    <div>
                        <h2 className='text-base md:text-xl lg:text-2xl font-bold'>Brooklyn Ignacio Kairupan</h2>
                        <h3>9 Agustus 2002</h3>
                        <h3>Role: Backend</h3>
                        <div className='flex space-x-2'>
                            <img src={What} alt="" className='w-6' />
                            <p>0821-9115-9876</p>
                        </div>
                        <div className='flex space-x-2'>
                            <img src={ig} alt="" className='w-5' />
                            <p>brooklyn_kairupan</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;