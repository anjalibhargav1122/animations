import React, { useRef } from 'react';

import { Fireworks } from 'fireworks-js';

function Phtakhe() {
  const canvasRef = useRef(null);
  const fireworksRef = useRef(null);

  const handleClick = () => {
    if (fireworksRef.current) {
      fireworksRef.current.stop();
    }

    fireworksRef.current = new Fireworks(canvasRef.current, {
     
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1,
      particles: 100,
      sound: true
    });

    fireworksRef.current.start();
  };

  return (
    <div className="text-center">
      <h1 className="mt-5">Fireworks Show</h1>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        🎆 Show Fireworks
      </button>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default Phtakhe;


