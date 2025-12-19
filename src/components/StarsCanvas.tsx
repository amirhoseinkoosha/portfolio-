import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

const Stars = (props: any) => {
  const ref = useRef<any>();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    const targetX = state.pointer.x * 0.1;
    const targetY = state.pointer.y * 0.1;

    if (state.camera) {
      state.camera.position.x += (targetX - state.camera.position.x) * 0.02;
      state.camera.position.y += (targetY - state.camera.position.y) * 0.02;
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Points
      ref={ref}
      positions={sphere}
      stride={3}
      frustumCulled
      rotation={[0, 0, Math.PI / 4]}
      {...props}
    >
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.005}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

export default function StarsCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}

