import { OrbitControls } from "@react-three/drei";
import { Interactive, RayGrab, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useModelContext } from "../context/ModelContext";
import Druid from "./3dComponents/druid/Druid";
import Table from "./3dComponents/table/Table";
import Bench from "./3dComponents/bench/Bench"
import * as THREE from 'three';
import XrBox from "./3dComponents/xr-hit-box/XrBox";

const Gallery = () => {


const reticleRef = useRef();
const modelRef = useRef();
const arrowRef = useRef();

const [models, setModels] = useState([]);

const {isPresenting} = useXR();
const {currentModel, setCurrentModel} = useModelContext();

const [selected, setSelected] = useState();
const [scale, setScale] = useState([1,1,1]);

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


// useFrame((state, delta) => {
//   if (modelRef.current) {
//     modelRef.current.rotation.y += delta;
//   }
// });


const rotateModel = (e) => {
  const axis = new THREE.Vector3(0, 1, 0);
  modelRef.current.rotateOnAxis(axis, THREE.MathUtils.degToRad(10));
}

const zoomModel = () => {
  // setScale(scale-0.1);
  modelRef.current.scale.set(0.5,0.5,0.5);
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
                <Interactive onSelect={rotateModel} onSqueezeStart={zoomModel}>
                  <mesh scale={scale} ref={modelRef} position={position}>
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
        {/* {isPresenting &&
        (
         <Interactive>
        <mesh ref={arrowRef} >
            <boxGeometry args={[0.1, 0.25, 32]}/>
            <meshStandardMaterial color={"mediumpurple"}/>
        </mesh>

        </Interactive>
        )        
      }
 */}

        {!isPresenting && currentModel === "druid" && <Druid />}

        {!isPresenting && currentModel === "table" && <Table />}

        {!isPresenting && currentModel === "bench" && <Bench />}


    </>
  )
}

export default Gallery