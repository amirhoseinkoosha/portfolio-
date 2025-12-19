import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import type { Mesh, Group } from "three";
import { skills } from "../data/skills";

interface PlanetProps {
  position: [number, number, number];
  name: string;
  index: number;
}

const Planet: React.FC<PlanetProps> = ({ position, name, index }) => {
  const meshRef = useRef<Mesh>(null);
  const textRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);
  const planetsGroupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.y += delta * 0.5;
    }

    if (groupRef.current) {
      // Orbital rotation - each planet rotates around center at different speeds
      const speed = 0.2 + (index % 3) * 0.1;
      groupRef.current.rotation.y += delta * speed * 0.1;
    }
  });
  useFrame((state, delta) => {
    if (planetsGroupRef.current) {
      // Slow rotation of entire group
      planetsGroupRef.current.rotation.x -= delta / 20;
      planetsGroupRef.current.rotation.y += delta / 25;

      // React to mouse movement (similar to Stars)
      const targetX = state.pointer.x * 0.15;
      const targetY = state.pointer.y * 0.15;

      planetsGroupRef.current.rotation.x +=
        (targetY - planetsGroupRef.current.rotation.x) * 0.01;
      planetsGroupRef.current.rotation.y +=
        (targetX - planetsGroupRef.current.rotation.y) * 0.01;
    }
  });

  const radius = 0.15;
  const segments = 32;

  return (
    <group ref={groupRef} position={position}>
      {/* Planet sphere */}
      <mesh ref={planetsGroupRef}>
        <sphereGeometry args={[radius, segments, segments]} />
        <meshStandardMaterial
          color={index % 2 === 0 ? "#3b82f6" : "#14b8a6"}
          emissive={index % 2 === 0 ? "#1e40af" : "#0f766e"}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Planet name text */}
      <group ref={textRef} position={[0, radius + 0.1, 0]}>
        <Text
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {name}
        </Text>
      </group>
    </group>
  );
};

const Planets: React.FC = () => {
  // Distribute planets in a sphere pattern
  const generatePositions = (count: number, radius: number) => {
    const positions: [number, number, number][] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle for even distribution

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 3; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY * 0.5;
      const z = Math.sin(theta) * radiusAtY;

      positions.push([x * radius, y * radius, z * radius]);
    }

    return positions;
  };

  const positions = generatePositions(skills.length, 2.5);

  return (
    <>
      {skills.map((skill, index) => (
        <Planet
          key={skill.name}
          position={positions[index]}
          name={skill.name}
          index={index}
        />
      ))}
    </>
  );
};

export default Planets;
