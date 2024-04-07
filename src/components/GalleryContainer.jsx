import { Canvas } from "@react-three/fiber";
import { ARButton, RayGrab, XR } from "@react-three/xr";
import React, { useEffect, useRef, useState } from "react";
import Gallery from "./Gallery";

const GalleryContainer = () => {

//   const canvasRef = useRef(null);
//   const galRef = useRef();
//   const [touchDown, setTouchDown] = useState(false);
//   const [touchX, setTouchX] = useState(0);
//   const [touchY, setTouchY] = useState(0);


//   useEffect(() => {
//     // ... Three.js setup code
//     const canvas = canvasRef.current;
// if (canvas){
//     const handleTouchStart = (e) => {
//       console.log("Touching:",e.changedTouches[0].clientX)
//       e.preventDefault();
//       setTouchDown(true);
//       setTouchX(e.changedTouches[0].pageX);
//       setTouchY(e.changedTouches[0].pageY);
//     };

//     const handleTouchEnd = (e) => {
//       console.log("Remove touch:", e);
//       e.preventDefault();
//       setTouchDown(false);
//     };

//     const handleTouchMove = (e) => {
//       e.preventDefault();

//       if (!touchDown) {
//         return;
//       }

//       const deltaX = e.changedTouches[0].pageX - touchX;
//       const deltaY = e.changedTouches[0].pageY - touchY;
//       setTouchX(e.changedTouches[0].pageX);
//       setTouchY(e.changedTouches[0].pageY);

//       rotateObject(deltaX);
//     };

//     canvasRef.current.addEventListener('touchstart', handleTouchStart);
//     canvasRef.current.addEventListener('touchend', handleTouchEnd);
//     canvasRef.current.addEventListener('touchmove', handleTouchMove);
  
//     return () => {
//       canvas.removeEventListener('touchstart', handleTouchStart);
//       canvas.removeEventListener('touchend', handleTouchEnd);
//       canvas.removeEventListener('touchmove', handleTouchMove);

//     }
  
//   }
//     // ... cleanup function to remove event listeners

//   }, []);

  // const rotateObject = (deltaX) => {
  //   galRef.current.rotation.x += deltaX;
  //   // if (current_object && reticle.visible) {
  //   //   current_object.rotation.y += deltaX / 100;
  //   // }
  // }


  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"],
      }} />
      <Canvas >
        <XR>
            <Gallery/>
        </XR>
      </Canvas>
    </>
  )
}

export default GalleryContainer