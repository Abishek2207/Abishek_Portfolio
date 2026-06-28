"use client";

import { useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";
import { useMemo, useRef, useLayoutEffect } from "react";
import * as THREE from "three";

export default function Experience({ scrollProgress }: { scrollProgress: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // We map scrollProgress (0 to 1) to a Z position (0 to -200)
  useFrame((state) => {
    // Smoothed interpolation could go here, but simple assignment is fine
    const targetZ = -(scrollProgress * 200) + 5;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
  });

  // Set initial fog
  useLayoutEffect(() => {
    // Note: To set fog properly in R3F, we ideally return it in the Canvas or attach it
  }, []);

  // Procedural particles forming a tunnel
  const TunnelParticles = () => {
    const count = 5000;
    const positions = useMemo(() => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const radius = 5 + Math.random() * 15;
        const theta = Math.random() * Math.PI * 2;
        pos[i * 3] = Math.cos(theta) * radius; // x
        pos[i * 3 + 1] = Math.sin(theta) * radius; // y
        pos[i * 3 + 2] = -Math.random() * 200; // z (spread along tunnel)
      }
      return pos;
    }, []);

    return (
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#00f0ff" transparent opacity={0.6} />
      </points>
    );
  };

  // Chapter 3: Neural Network Node Map
  const NeuralNetwork = () => {
    const nodes = useMemo(() => {
      return Array.from({ length: 30 }).map(() => [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        -90 + (Math.random() - 0.5) * 20 // Placed around Z = -90
      ]);
    }, []);

    return (
      <group>
        {nodes.map((pos: any, i) => (
          <Float key={i} speed={2} floatIntensity={2}>
            <mesh position={pos}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshBasicMaterial color="#8b5cf6" />
            </mesh>
            <Text position={[pos[0], pos[1]-0.5, pos[2]]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
              {['PyTorch', 'TensorFlow', 'LLMs', 'OpenCV', 'FastAPI'][i % 5]}
            </Text>
          </Float>
        ))}
      </group>
    );
  };

  // Chapter 4: Floating Planets (Projects)
  const ProjectPlanets = () => {
    const projects = [
      { name: "TulasiHealth", color: "#ff0055", pos: [-5, 2, -120] },
      { name: "Handloom AI", color: "#00ffaa", pos: [5, -2, -125] },
      { name: "Space Apps", color: "#00aaff", pos: [-6, -3, -130] },
      { name: "TulasiAI Core", color: "#aa00ff", pos: [6, 3, -135] }
    ];

    return (
      <group>
        {projects.map((p, i) => (
          <Float key={i} speed={1} floatIntensity={5} rotationIntensity={2}>
            <mesh position={p.pos as [number, number, number]}>
              <sphereGeometry args={[1.5, 32, 32]} />
              <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={0.5} wireframe />
            </mesh>
            <Text position={[p.pos[0], p.pos[1]-2.5, p.pos[2]]} fontSize={1} color="white" outlineWidth={0.05} outlineColor="#000">
              {p.name}
            </Text>
          </Float>
        ))}
      </group>
    );
  };

  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#00f0ff" distance={50} />

      {/* Global Background */}
      <Stars radius={100} depth={200} count={10000} factor={4} saturation={0} fade />
      <TunnelParticles />

      {/* SCENES ALONG Z AXIS */}
      
      {/* Origin */}
      <Float>
        <Text position={[0, 0, -10]} fontSize={3} color="#ffffff" outlineWidth={0.02} outlineColor="#000">
          MADURAI
        </Text>
      </Float>

      {/* Curiosity */}
      <group position={[0, 0, -30]}>
        <Float speed={5} rotationIntensity={2}>
          <mesh position={[-3, 2, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00f0ff" wireframe />
          </mesh>
        </Float>
        <Text position={[0, 0, 0]} fontSize={2} color="#8b5cf6">
          Hello World.
        </Text>
      </group>

      {/* Chennai / Train */}
      <Text position={[0, 0, -60]} fontSize={4} color="#ffffff">
        CHENNAI
      </Text>

      {/* AI Awakening */}
      <NeuralNetwork />
      <Text position={[0, 5, -90]} fontSize={3} color="#ffffff">
        THE AWAKENING
      </Text>

      {/* Missions */}
      <ProjectPlanets />

      {/* TulasiAI */}
      <Text position={[0, 0, -150]} fontSize={5} color="#00f0ff" outlineWidth={0.1} outlineColor="#8b5cf6">
        TULASIAI
      </Text>

      {/* Final Rocket/Future */}
      <group position={[0, 0, -190]}>
        <Float speed={10} rotationIntensity={0}>
          <Text position={[0, 2, 0]} fontSize={4} color="#ffffff">
            ABISHEK R
          </Text>
          <Text position={[0, -1, 0]} fontSize={1.5} color="#8b5cf6">
            FOUNDER & AI ENGINEER
          </Text>
        </Float>
      </group>
    </group>
  );
}
