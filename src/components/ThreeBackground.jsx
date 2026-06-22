import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Floating electric cyan, violet and magenta particles cloud (New Gen Light Mode Version)
 */
function Particles({ count = 220 }) {
  const mesh = useRef();

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      // Mix of high frequency colors: Electric Violet (124, 58, 237), Cyan (59, 130, 246), Magenta (236, 72, 153)
      const rng = Math.random();
      if (rng < 0.33) {
        col[i * 3]     = 0.485; // Violet R
        col[i * 3 + 1] = 0.227; // Violet G
        col[i * 3 + 2] = 0.929; // Violet B
      } else if (rng < 0.66) {
        col[i * 3]     = 0.231; // Cyan R
        col[i * 3 + 1] = 0.510; // Cyan G
        col[i * 3 + 2] = 0.965; // Cyan B
      } else {
        col[i * 3]     = 0.925; // Magenta R
        col[i * 3 + 1] = 0.282; // Magenta G
        col[i * 3 + 2] = 0.599; // Magenta B
      }
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.025) * 0.08;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color"    count={count} array={colors}    itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * Slow-spinning torus (film reel style ring) in Violet
 */
function FloatingRing({ position, speed, color = '#7c3aed', opacity = 0.08, scale = 1 }) {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * speed;
    mesh.current.rotation.z = state.clock.getElapsedTime() * speed * 0.65;
    mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.45 + position[0]) * 0.35;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <torusGeometry args={[1, 0.03, 16, 60]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

/**
 * Slowly rotating film-strip wireframe box in Cyan
 */
function FloatingBox({ position, speed }) {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * speed;
    mesh.current.rotation.y = state.clock.getElapsedTime() * speed * 1.3;
    mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.4) * 0.4;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.06} wireframe />
    </mesh>
  );
}

/**
 * Main exported 3D canvas background (Next-Gen Bright Light Version)
 */
export default function ThreeBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <Particles count={220} />
        <FloatingRing position={[-4, 1.5, -3]}  speed={0.18} opacity={0.10} scale={1.2} />
        <FloatingRing position={[4, -1, -4]}    speed={0.12} opacity={0.07} scale={1.5} color="#ec4899" />
        <FloatingRing position={[1, 2.5, -5]}   speed={0.22} opacity={0.08} scale={0.9} color="#3b82f6" />
        <FloatingRing position={[-2, -2.5, -2]} speed={0.16} opacity={0.09} scale={1.1} />
        <FloatingBox position={[3.5, 1, -3]}    speed={0.2} />
        <FloatingBox position={[-3.5, -1.5, -2]} speed={0.15} />
        <FloatingBox position={[0, -3, -4]}     speed={0.18} />
      </Canvas>
    </div>
  );
}
