import React from 'react'
import React from 'react'
import Lottie from 'react-lottie';
import NotFoundGif from '../../assets/gif/NotFound.json';

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFound,
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

export default NotFound
