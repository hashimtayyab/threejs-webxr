import { Canvas } from "@react-three/fiber";
import { ARButton, RayGrab, XR } from "@react-three/xr";
import React from "react";
import XrHitBox from "./XrHitBox";

const XrHitBoxContainer = () => {

  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"],
      }} />
      <Canvas>
        <XR>
          <XrHitBox />
        </XR>
      </Canvas>
    </>
  )
}

export default XrHitBoxContainer