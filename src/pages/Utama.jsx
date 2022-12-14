import React, { useState, useEffect } from 'react'
import Wisata from '../components/Wisata';
import axios from 'axios';

const Utama = () => {
    const [utama, setUtama] = useState([]);

    const getUtama = async () => {
        const response = await axios.get("http://localhost:5000/lokasis");
        setUtama(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getUtama();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-max mx-auto items-center space-y-3 space-x-6'>
            {
                utama.map((item) => (
                    <Wisata
                        images={item.url}
                        nama={item.nama}
                        alamat={item.alamat}
                        deskripsi={item.deskripsi}
                        id={item.id}
                    />
                ))
            }
        </div>
    )
}

export default Utama;
