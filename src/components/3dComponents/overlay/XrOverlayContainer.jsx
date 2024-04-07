import { Canvas } from "@react-three/fiber";
import { ARButton, RayGrab, XR } from "@react-three/xr";
import React from "react";
import XrHitModel from "./XrTable";

const XrOverlayContainer = () => {

  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"],
      }} />
      <Canvas>
        <XR>
          <XrOverlay/>
        </XR>
      </Canvas>
    </>
  )
}

export default XrOverlayContainer