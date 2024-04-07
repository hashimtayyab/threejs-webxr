import { OrbitControls } from "@react-three/drei";
import { Interactive, RayGrab, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Table from "./Table";
import { useThree } from "@react-three/fiber";

const XrHitModel = () => {
const reticleRef = useRef();
const [models, setModels] = useState([]);

const {isPresenting} = useXR();

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

  return (
    <>
        <OrbitControls/>
        <ambientLight/>

        {isPresenting && 
          models.map(({position, id})=>{
            return <Table key={id} position={position}/>
          })}
        {isPresenting &&(
         <Interactive onSelect={palceModel}>
        <mesh ref={reticleRef} rotation-x = {-Math.PI/2}>
            <ringGeometry args={[0.1, 0.25, 32]}/>
            <meshStandardMaterial color={"white"}/>
        </mesh>
        </Interactive>
        )}
        {!isPresenting && <Table/>}
    </>
  )
}

export default XrHitModel