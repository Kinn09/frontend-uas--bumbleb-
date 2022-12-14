import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Wpotrait from '../components/Wpotrait.jsx';

const Detail = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState("");

    const getMenu = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/lokasi/${id}`);
            setMenu(response.data);
            console.log(menu)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <Wpotrait
            key={menu.key}
            images={menu.url}
            nama={menu.nama}
            alamat={menu.alamat}
            deskripsi={menu.deskripsi}
            id={menu.id}
        />
    );
};

export default Detail;