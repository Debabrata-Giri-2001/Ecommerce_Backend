import React from 'react'
import Lottie from 'react-lottie';
import ErrorGif from '../../assets/gif/error.json';

const Error = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ErrorGif,
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
        </div>
    )
}

export default Error
