import React from 'react'
import Lottie from 'react-lottie';
import EmptyGif from '../../assets/gif/EmptyGif.json';

const EmptyData = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EmptyGif,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
            <p className='font-Ubuntu text-xl text-center'>No More Data..</p>
        </div>
    )
}

export default EmptyData
