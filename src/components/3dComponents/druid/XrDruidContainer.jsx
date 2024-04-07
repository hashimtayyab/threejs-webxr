import { Canvas } from "@react-three/fiber";
import { ARButton, RayGrab, XR } from "@react-three/xr";
import React from "react";
import XrHitModel from "./XrDruid";

const XrHitDruidContainer = () => {

  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"],
      }} />
      <Canvas>
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    </>
  )
}

export default XrHitDruidContainer