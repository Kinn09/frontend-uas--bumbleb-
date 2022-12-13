import React, { useState, useEffect } from 'react'
import Wisata from '../components/Wisata';
import axios from 'axios';

const Utama = () => {
    const [utama, setUtama] = useState([]);

    const getUtama = async () => {
        const response = await axios.get("http://localhost:5000/lokasis");
        setUtama(response.data);
        console.log(utama);
    }


    useEffect(() => {
        getUtama();
    }, []);

    return (

        <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                utama.map((item) => (
                    <Wisata
                        images={item.url}
                        nama={item.nama}
                        alamat={item.alamat}
                        deskripsi={item.deskripsi}
                    />
                ))
            }
        </div>
    )
}

// const Utama = () => {
//     return (
//         <div className=''>
//             <div className='md:flex'>
//                 <Wisata />
//                 <Wisata />
//                 <Wisata />
//             </div>
//             <div className='md:flex'>
//                 <Wisata />
//                 <Wisata />
//                 <Wisata />
//             </div>
//             <div className='md:flex'>
//                 <Wisata />
//                 <Wisata />
//                 <Wisata />
//             </div>
//         </div>

//     )
// }

export default Utama;
