import React from 'react'
import Wpotrait from '../components/Wpotrait'


const Detail1 = () => {
    return (
        <div className='md:flex mx-8 space-x-3'>
            <div>
                <Wpotrait />
            </div>
            <div>
                <h1 className='font-bold'>Taman Nasional Bunaken</h1>
                <p className=''>
                    Taman Nasional Bunaken adalah taman laut yang terletak di Sulawesi Utara, Indonesia.
                    Taman ini terletak di Segitiga Terumbu Karang yang menjadi habitat bagi 390 spesies terumbu karang
                    dan juga berbagai spesies ikan, moluska, reptil, dan mamalia laut. Taman Nasional Bunaken merupakan
                    perwakilan ekosistem laut br Indonesia, meliputi padang rumput laut, terumbu karang, dan ekosistem pantai.
                </p>
            </div>
        </div>
    )
}

export default Detail1;