"use client";
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Galaxy() {
  const ref = useRef();
  const points = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 3000; i++) {
      const r = Math.random() * 50;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(positions);
  }, []);

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const AnimatedCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 60], fov: 75 }}>
        <Suspense fallback={null}>
          <Galaxy />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AnimatedCanvas;
