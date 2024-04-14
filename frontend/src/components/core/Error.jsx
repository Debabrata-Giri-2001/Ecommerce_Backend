import React from 'react'
import Lottie from 'react-lottie';
import Error from '../../assets/gif/error.json';

const Error = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
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
