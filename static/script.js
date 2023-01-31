import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

(function ( $ ) {
    'use strict';

    $(".home_square").tilt ({
        maxTilt: 7.5,
        scale: 1.05,
        speed: 400,
        glare: true,
        maxGlare: 0.25,
        gyroscope: false,
        // ...options
    });
    }(jQuery) );



// Courtesy of the Hack Club

// const hoverEffect = ({ options = {}, children, ...props}) => {
//     const root = useRef(null)
//     useEffect (() => {
//         VanillaTilt.init(root.current, {
//             max: 7.5,
//             scale: 1.05,
//             speed: 400,
//             glare: true,
//             'max-glare': 0.25,
//             gyroscope: false,
//             ...options
//         })
//     }, []);
//     return React.cloneElement(children, {ref: root});
// }

// export default Tilt