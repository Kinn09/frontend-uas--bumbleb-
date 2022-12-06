import React from "react";
import Gambarsatu from "../assets/Bunaken.png"
import { Link } from "react-router-dom";

const WisataSatu = () => {
    return (
        <>
            <div className="w-max h-max m-auto">
                <img src={Gambarsatu} alt="" className="w-60" />
                <div>
                    <h2 className="font-bold">Taman Nasional Bunaken</h2>
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