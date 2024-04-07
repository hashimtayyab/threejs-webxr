import { OrbitControls, StatsGl } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import {  useFrame, useThree } from "@react-three/fiber";
import { useModelContext } from "../context/ModelContext";
import Druid from "./3dComponents/druid/Druid";
import Table from "./3dComponents/table/Table";
import Bench from "./3dComponents/bench/Bench"
import * as THREE from 'three';

const Gallery = () => {
  const reticleRef = useRef();
  const modelRef = useRef();

  const [xDir, setXDir] = useState();
  const [yDir, setYDir] = useState();


  

  // useEffect(() => {
  //   const bodyElement = document.querySelector("body");
    
  //   const handleMove = (e) => {
  //     e.preventDefault(); // Prevent scrolling on touch devices
  //     if (e.type === "mousemove") {
  //       calculateDirection(e.pageX, e.pageY);
  //     } else if (e.type === "touchmove") {
  //       const touch = e.touches[0];
  //       if (touch) {
  //         calculateDirection(touch.pageX, touch.pageY);
  //       }
  //     }
  //   };
  
  //   const calculateDirection = (newX, newY) => {
  //     // let newDir = "";
  
  //     // Calculate the direction based on the difference between old and new coordinates
  //     const deltaX = newX - oldX;
  //     if (deltaX > 0) {
  //       setXDir("right")
  //       // newDir = "right";
  //     } else if (deltaX < 0) {
  //       // newDir = "left";
  //       setXDir("left");
  //     }
  
  //     // Update the direction if it's different from the previous one
  //     // if (newDir !== xDir) {
  //     //   setXDir(newDir);
  //     // }
  
  //     // Update old coordinates
  //     oldX = newX;
  //     oldY = newY;
  //   };
  
  //   // Initialize old coordinates
  //   let oldX = 0;
  //   let oldY = 0;
  
  //   // Add event listeners
  //   bodyElement.addEventListener("mousemove", handleMove, false);
  //   bodyElement.addEventListener("touchmove", handleMove, false);
  
  //   // Remove event listeners on component unmount
  //   return () => {
  //     bodyElement.removeEventListener("mousemove", handleMove);
  //     bodyElement.removeEventListener("touchmove", handleMove);
  //   };
  // }, [xDir]);


  useEffect(() => {
    var bodyElement = document.querySelector("body");

    bodyElement.addEventListener("mousemove", handleMove, false);
    bodyElement.addEventListener("touchmove", handleMove, false);

    var xDirection = "";
    var yDirection = "";

    var oldX = 0;
    var oldY = 0;

    function handleMove(e) {
      e.preventDefault();
        if (e.type === "mousemove") {
            calculateDirection(e.pageX, e.pageY);
        } else if (e.type === "touchmove") {
            var touch = e.touches[0];
            if (touch) {
                calculateDirection(touch.pageX, touch.pageY);
            }
        }
    }


    function calculateDirection(newX, newY) {
        // deal with the horizontal case
        if (oldX < newX) {
            xDirection = "right";
        } else {
            xDirection = "left";
        }

        // deal with the vertical case
        if (oldY < newY) {
            yDirection = "down";
        } else {
            yDirection = "up";
        }

        oldX = newX;
        oldY = newY;

        setXDir(xDirection);
        setYDir(yDirection);
        // console.log(xDirection + " " + yDirection);
    }

  

    return () => {
        bodyElement.removeEventListener("mousemove", handleMove);
        bodyElement.removeEventListener("touchmove", handleMove);
    };
}, []);



//   useEffect(() => {
//     var bodyElement = document.querySelector("body");
// bodyElement.addEventListener("touch", getMouseDirection, false);
 
// var xDirection = "";
// var yDirection = "";
 
// var oldX = 0;
// var oldY = 0;
 
// function getMouseDirection(e) {
//     //deal with the horizontal case
//     if (oldX < e.pageX) {
//         xDirection = "right";
//     } else {
//         xDirection = "left";
//     }
 
//     //deal with the vertical case
//     if (oldY < e.pageY) {
//         yDirection = "down";
//     } else {
//         yDirection = "up";
//     }
 
//     oldX = e.pageX;
//     oldY = e.pageY;
 
// setXDir(xDirection);
//     // console.log(xDirection + " " + yDirection);
// }
// return () => {
//   bodyElement.removeEventListener("touchmove", getTouchDirection);
// };
//   }, [])

  // const useMousePosition = ({ includeTouch }) => {
  //   console.log("OMUSE")
  //   const [
  //     mousePosition,
  //     setMousePosition
  //   ] = React.useState({ x: null, y: null });
  //   React.useEffect(() => {
  //     const updateMousePosition = ev => {
  //       let x, y;
  //       if (ev.touches) {
  //         const touch = ev.touches[0];
  //         [x, y] = [touch.clientX, touch.clientY];
  //       } else {
  //         [x, y] = [ev.clientX, ev.clientY];
  //       }
  //       setMousePosition({ x, y });
  //     };
  //     window.addEventListener('mousemove', updateMousePosition);
  //     if (includeTouch) {
  //       window.addEventListener('touchmove', updateMousePosition);
  //     }
  //     return () => {
  //       window.removeEventListener('mousemove', updateMousePosition);
  //       if (includeTouch) {
  //         window.removeEventListener('touchmove', updateMousePosition);
  //       }
  //     };
  //   }, [includeTouch]);
  //   return mousePosition;
  // };


  // const canvasRef = useRef(null);
//   const galRef = useRef();
  // const [touchDown, setTouchDown] = useState(false);
  // const [touchX, setTouchX] = useState(0);
  // const [touchY, setTouchY] = useState(0);
  // useEffect(()=> {
  //   const model = modelRef.current;
  // if (model){

  //   const handleTouchStart = (e) => {
  //     console.log("Touching:",e.changedTouches[0].clientX)
  //     e.preventDefault();
  //     setTouchDown(true);
  //     setTouchX(e.changedTouches[0].pageX);
  //     setTouchY(e.changedTouches[0].pageY);
  //   };

  //       const handleTouchEnd = (e) => {
  //     console.log("Remove touch:", e);
  //     e.preventDefault();
  //     setTouchDown(false);
  //   };

  //   const handleTouchMove = (e) => {
  //     e.preventDefault();

  //     if (!touchDown) {
  //       console.log("first")
  //       return;
  //     }

  //     const deltaX = e.changedTouches[0].pageX - touchX;
  //     const deltaY = e.changedTouches[0].pageY - touchY;
  //     setTouchX(e.changedTouches[0].pageX);
  //     setTouchY(e.changedTouches[0].pageY);

  //     rotateObject(deltaX)
  //   };


  //   modelRef.current.addEventListener('touchstart', handleTouchStart);
  //   modelRef.current.addEventListener('touchend', handleTouchEnd);
  //   modelRef.current.addEventListener('touchmove', handleTouchMove);


  //   //     return () => {
  //   //       modelRef.removeEventListener('touchstart', handleTouchStart);
  //   //       modelRef.removeEventListener('touchend', handleTouchEnd);
  //   //       modelRef.removeEventListener('touchmove', handleTouchMove);

  //   // }
  // }
  // }, [])
  // const rotateObject = (deltaX) => {
  //   console.log("ROTATE OBJ")
  //       // modelRef.current.rotation.x += deltaX;

  //   const axis = new THREE.Vector3(0, 1, 0);
  //   modelRef.current.rotateOnAxis(axis, THREE.MathUtils.degToRad(10));
  // }
// useMousePosition();

// const arrowRef = useRef();

const [models, setModels] = useState([]);

const {isPresenting} = useXR();
const {currentModel, setCurrentModel} = useModelContext();

const [selected, setSelected] = useState();
// const [scale, setScale] = useState([1,1,1]);

useEffect(() => {
  setSelected(currentModel);
  // console.log(selected)
}, [currentModel, setCurrentModel]);


useThree(({camera}) => {
  if(!isPresenting){
    camera.position.z = 3; 
  }
})


useHitTest((hitMatrix, hit) => {
  hitMatrix.decompose(
    reticleRef.current.position,
    reticleRef.current.quaternion,
    reticleRef.current.scale
  );

  reticleRef.current.rotation.set(-Math.PI/2,0,0)
});

const palceModel = (e) => {
  let position = e.intersection.object.position.clone();
  let id = Date.now();
  setModels([{position, id}])

}


// const rotateModel = () => {
//   if(xDir === "right"){
//     rotateModelRight();
//   }
//   else if(xDir === 'left'){
//     rotateModelLeft();
//   }
// }
const rotateModel = () => {
  if (xDir === "right") {
    rotateModelRight();
  } else if (xDir === "left") {
    rotateModelLeft();
  }
}
const rotateModelRight = () => {
  if(xDir === "right"){
    console.log("right")
    modelRef.current.rotation.y += THREE.MathUtils.degToRad(5);
  }
  // else if(xDir === "left"){
  //   modelRef.current.rotation.y -= THREE.MathUtils.degToRad(10);
  // }
}

const rotateModelLeft = () => {
  if(xDir === "left"){
    console.log("left")
    modelRef.current.rotation.y -= THREE.MathUtils.degToRad(5);
  }
  // else if(xDir === "right"){
  //   modelRef.current.rotation.y += THREE.MathUtils.degToRad(10);
  // }
}

// const [pinchDistance, setPinchDistance] = useState();
// const [prevPinchDistance, setPrevPinchDistance] = useState();

// const scaleModel = (e) => {
//   if (pinchDistance > prevPinchDistance) {
//     // Pinch out (zoom in)
//     modelRef.current.scale.multiplyScalar(1.1); // Increase scale by 10%
//   } else {
//     // Pinch in (zoom out)
//     modelRef.current.scale.multiplyScalar(0.9); // Decrease scale by 10%
//   }
// }
// const scaleModel = (pinchDelta) => {
//   console.log(pinchDelta)
//   if (pinchDelta > 0) {
//     // Pinch out (zoom in)
//     modelRef.current.scale.multiplyScalar(1.1); // Increase scale by 10%
//   } else {
//     // Pinch in (zoom out)
//     modelRef.current.scale.multiplyScalar(0.9); // Decrease scale by 10%
//   }
// };
// useEffect(() => {
//   const bodyElement = document.querySelector("body");

//   const handlePinch = (e) => {
//     e.preventDefault(); // Prevent default pinch zoom behavior

//     const touches = e.touches;
//     if (touches.length >= 2) {
//       // Calculate the distance between two touches
//       const touch1 = touches[0];
//       const touch2 = touches[1];
//       const dx = touch1.pageX - touch2.pageX;
//       const dy = touch1.pageY - touch2.pageY;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       // Update pinch distance and scale the model
//       setPinchDistance(distance);
//       scaleModel();
//     }
//   };

//   // Initialize pinch distance
//   let pinchDistance = 0;
//   let prevPinchDistance = 0;

//   // Add event listeners for pinch gesture
//   bodyElement.addEventListener("touchstart", handlePinch, false);
//   bodyElement.addEventListener("touchmove", handlePinch, false);
//   bodyElement.addEventListener("touchend", () => {
//     // Update previous pinch distance when pinch gesture ends
//     prevPinchDistance = pinchDistance;
//     setPrevPinchDistance(prevPinchDistance);
//   }, false);

//   // Remove event listeners on component unmount
//   return () => {
//     bodyElement.removeEventListener("touchstart", handlePinch);
//     bodyElement.removeEventListener("touchmove", handlePinch);
//     bodyElement.removeEventListener("touchend", () => {
//       prevPinchDistance = pinchDistance;
//     });
//   };
// }, []);


const [scale, setScale] = useState(1);

const zoomModel = (e) => {
  // setScale(scale-0.1);
  if(yDir === "down"){
    console.log("DOWN")
    setScale(scale*0.9)
    modelRef.current.scale.set(scale, scale, scale);
  }
  if(yDir === "up"){
    console.log("UP")
    setScale(scale*1.1)
    modelRef.current.scale.set(scale, scale, scale);
  }
}

  return (
    <>
        <OrbitControls/>
        <ambientLight/>
        {isPresenting && 
          models.map(({position, id})=>{
            return (
              
                <Fragment key={id}>   
                {currentModel === 'druid' && <Druid position={position}/>}

                {currentModel === 'table' && 
                
                <Interactive onMove={rotateModel} onHover={zoomModel}>
                  <mesh scale={[scale, scale, scale]} ref={modelRef} position={position}>
                    <Table/>
                  </mesh>
                 </Interactive>
                }

                {currentModel === 'bench' && <Bench position={position}/>}         

          </Fragment>

          );

          })}
        {isPresenting &&
        (
         <Interactive onSelect={palceModel}>
        <mesh ref={reticleRef} rotation-x = {-Math.PI/2}>
            <ringGeometry args={[0.1, 0.25, 32]}/>
            <meshStandardMaterial color={"white"}/>
        </mesh>

        </Interactive>
        )        
      }

        {!isPresenting && currentModel === "druid" && <Druid />}

        {!isPresenting && currentModel === "table" && <Table />}

        {!isPresenting && currentModel === "bench" && <Bench />}


    </>
  )
}

export default Gallery