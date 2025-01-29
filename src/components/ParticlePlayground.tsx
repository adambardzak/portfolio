"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";

export default function ParticlePlayground() {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);

  // Generate random particles in a spherical shape
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  // Create a custom component for particle effects
  function ParticleSystem() {
    // Get mouse position from the Canvas context
    const { mouse } = useThree();

    // Animation logic for rotation and mouse interaction
    useFrame(() => {
      if (ref.current) {
        // Rotation based on mouse movement
        ref.current.rotation.x = mouse.y * 0.5; // Adjust responsiveness
        ref.current.rotation.y = mouse.x * 0.5;

        // Add continuous rotation
        ref.current.rotation.z += 0.002; // Subtle spin for a dynamic effect
      }
    });

    return (
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <PointMaterial
          transparent
          color={hovered ? "#ff0080" : "#00d8ff"} // Change color on hover
          size={hovered ? 0.04 : 0.02} // Increase size on hover
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    );
  }

  return (
    <section className="h-screen bg-black">
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-white">Particle Playground</h2>
        <p className="text-lg text-gray-300 mt-4">
          Move your mouse and explore the 3D particle magic ✨
        </p>
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleSystem />
      </Canvas>
    </section>
  );
}
