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

  return (
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
          {...(isMobile && {
            enableRotate: true,
            // Only allow horizontal (azimuthal) rotation on mobile
            minAzimuthAngle: -Infinity,
            maxAzimuthAngle: Infinity,
            minPolarAngle: Math.PI / 2,
            maxPolarAngle: Math.PI / 2,
            // Custom touch event handler to only rotate on horizontal drag
            onTouchStart: (e) => {
              e.target.dataset.startY = e.touches[0].clientY;
              e.target.dataset.startX = e.touches[0].clientX;
            },
            onTouchMove: (e) => {
              const startY = Number(e.target.dataset.startY);
              const startX = Number(e.target.dataset.startX);
              const deltaY = Math.abs(e.touches[0].clientY - startY);
              const deltaX = Math.abs(e.touches[0].clientX - startX);
              // If vertical movement is greater, let the page scroll
              if (deltaY > deltaX) {
                e.stopPropagation();
                e.preventDefault();
              }
            },
          })}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
