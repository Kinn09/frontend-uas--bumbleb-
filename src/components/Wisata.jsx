import React from "react";
import { Link } from "react-router-dom";

const Wisata = ({ images, nama, id }) => {
    return (
        <>
            <div>
                <img src={images} alt="" className="w-60 sm:72 lg:w-96" />
                <div>
                    <h2 className="font-bold">{nama}</h2>
                </div>
                <div className="mb-4">
                    <Link to={`/detail/${id}`} className="px-1 text-white ">
                        <button className="hover:scale-110 duration-300 bg-blue-500 rounded-md">Detail</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Wisata;