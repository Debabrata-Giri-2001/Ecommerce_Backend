import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageSlide = () => {

    return (
        <aside className="w-[100%] overflow-hidden z-0 px-4">
            <Carousel>
                <div>
                    <img className='rounded-md' src="https://images.pexels.com/photos/1616097/pexels-photo-1616097.jpeg" />
                    {/* <p className="legend">Pic 1</p> */}
                </div>
                <div>
                    <img className='rounded-md' src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg" />
                    {/* <p className="legend">Pic 2</p> */}
                </div>
                <div>
                    <img className='rounded-md' src="https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg" />
                    {/* <p className="legend">Pic 3</p> */}
                </div>
            </Carousel>
        </aside>
    );
};

export default ImageSlide;
