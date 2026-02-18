"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
// explicit import path for reliability if possible, or just standard
// If maath isn't installed, I'll use a simple custom buffer. 
// Just in case, let's stick to simple Three.js or standard math to avoid extra deps if I didn't install maath.
// I installed three, @react-three/fiber, @react-three/drei.
// I will implement a custom particle field without maath to be safe.

import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Generate particles - Memoized for performance
    const particlesCount = 1500; // Reduced slightly for better mobile performance
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10; // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#0070f3"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Scene3D() {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}
