// import React, { useRef, useState } from 'react';
// import { Fireworks } from 'fireworks-js';

// const ColorExplosion = () => {
//     const canvasRef = useRef(null);
//     const fireworksRef = useRef(null);
//     const [colors] = useState(['red', 'blue', 'green', 'yellow', 'orange', 'purple']);

//     const handleClick = () => {
//         // Fireworks stop and restart
//         if (fireworksRef.current) {
//             fireworksRef.current.stop();
//         }

//         // Random color selection
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         document.body.style.backgroundColor = randomColor;

//         // Start fireworks
//         fireworksRef.current = new Fireworks(canvasRef.current, {
//             speed: 2,
//             acceleration: 1.05,
//             friction: 0.95,
//             gravity: 1,
//             particles: 100,
//             sound: true,
//         });

//         fireworksRef.current.start();
//     };

//     return (
//         <div className="text-center" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//             <h1 className="mt-5">Color Explosion 🎆</h1>
//             <button className="btn btn-primary mt-3" onClick={handleClick}>
//                 Click for Color Explosion!
//             </button>
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     zIndex: -1,
//                 }}
//             />
//         </div>
//     );
// };

// export default ColorExplosion;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColorExplosion = () => {
    const [colors] = useState(['red', 'blue', 'green', 'yellow', 'orange', 'purple']);
    const [currentColor, setCurrentColor] = useState('');

    const handleClick = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(randomColor);
        document.body.style.transition = "background-color 0.5s ease"; // Transition effect
        document.body.style.backgroundColor = randomColor;
    };

    return (
        <div className="text-center" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <h1 className="mt-5">Color Explosion 🌈</h1>
            <button className="btn btn-primary mt-3" onClick={handleClick}>
                Click for Color Explosion!
            </button>
        </div>
    );
};

export default ColorExplosion;
