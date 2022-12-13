import React from "react";
import { Link } from "react-router-dom";

const WisataSatu = ({ images, nama, }) => {
    return (
        <>
            <div className="w-max h-max m-auto">
                <img src={images} alt="" className="w-60" />
                <div>
                    <h2 className="font-bold">{nama}</h2>
                </div>
                <div className="mb-4">
                    <Link to={`/detail1/`} className="px-1 bg-black text-white">
                        Detail
                    </Link>
                </div>
            </div>

        </>
    )
}

export default WisataSatu;