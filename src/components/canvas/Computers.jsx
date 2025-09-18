import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [enableRotate, setEnableRotate] = useState(true);
  const touchInfo = React.useRef({ x: 0, y: 0, isHorizontal: false });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Custom touch handlers for mobile
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    touchInfo.current = { x: touch.clientX, y: touch.clientY, isHorizontal: false };
    setEnableRotate(false); // Disable rotation until we know it's a horizontal drag
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - touchInfo.current.x);
    const dy = Math.abs(touch.clientY - touchInfo.current.y);
    // If horizontal drag is greater, enable rotation; else, keep disabled
    if (!touchInfo.current.isHorizontal && (dx > 10 || dy > 10)) {
      if (dx > dy) {
        touchInfo.current.isHorizontal = true;
        setEnableRotate(true);
      } else {
        setEnableRotate(false);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setEnableRotate(true); // Reset after gesture ends
  };

  return (
    <div
      style={{ height: "100vh", touchAction: isMobile ? "pan-y" : "auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ height: "100vh" }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
            enableRotate={enableRotate}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
