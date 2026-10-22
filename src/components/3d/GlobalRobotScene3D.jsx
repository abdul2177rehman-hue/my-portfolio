import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural 3D Robot Character Mesh & Shader Component
const RobotModel = ({ scrollProgressRef, mousePosRef }) => {
  const robotGroupRef = useRef();
  const headRef = useRef();
  const eyesRef = useRef();
  const bezelRef = useRef();
  const chestLedsRef = useRef();

  // Smooth interpolated position/rotation targets
  const targetPos = useRef(new THREE.Vector3(2.2, -0.2, 0));
  const targetRot = useRef(new THREE.Euler(0, -0.25, 0));

  useFrame((state) => {
    const p = scrollProgressRef.current; // 0 to 1
    const mouse = mousePosRef.current;
    const time = state.clock.elapsedTime;

    // Calculate section-driven target positions and rotations based on scroll progress p
    if (p < 0.2) {
      // Hero section: Prominently centered over giant wordmark matching reference composition
      const t = p / 0.2;
      targetPos.current.set(
        THREE.MathUtils.lerp(0.0, -0.8, t),
        THREE.MathUtils.lerp(-0.1, -0.25, t),
        THREE.MathUtils.lerp(0.5, -0.2, t)
      );
      targetRot.current.set(0.02, THREE.MathUtils.lerp(0.0, -0.3, t), 0);
    } else if (p < 0.45) {
      // About section: Shifts slightly back and observes About story
      const t = (p - 0.2) / 0.25;
      targetPos.current.set(
        THREE.MathUtils.lerp(2.0, -1.8, t),
        THREE.MathUtils.lerp(-0.3, -0.1, t),
        THREE.MathUtils.lerp(-0.3, -1.0, t)
      );
      targetRot.current.set(0.08, THREE.MathUtils.lerp(-0.4, 0.45, t), 0);
    } else if (p < 0.7) {
      // Skills section: Centers with slight elevation and observes skills
      const t = (p - 0.45) / 0.25;
      targetPos.current.set(
        THREE.MathUtils.lerp(-1.8, 2.3, t),
        THREE.MathUtils.lerp(-0.1, -0.2, t),
        THREE.MathUtils.lerp(-1.0, -0.6, t)
      );
      targetRot.current.set(0.02, THREE.MathUtils.lerp(0.45, -0.35, t), 0);
    } else if (p < 0.88) {
      // Projects section: Sits alongside the horizontal project showcase
      const t = (p - 0.7) / 0.18;
      targetPos.current.set(
        THREE.MathUtils.lerp(2.3, -1.9, t),
        THREE.MathUtils.lerp(-0.2, -0.3, t),
        THREE.MathUtils.lerp(-0.6, -0.8, t)
      );
      targetRot.current.set(0.05, THREE.MathUtils.lerp(-0.35, 0.38, t), 0);
    } else {
      // Contact section: Approaches front-right welcoming collaboration
      const t = (p - 0.88) / 0.12;
      targetPos.current.set(
        THREE.MathUtils.lerp(-1.9, 1.8, t),
        THREE.MathUtils.lerp(-0.3, -0.2, t),
        THREE.MathUtils.lerp(-0.8, 0.1, t)
      );
      targetRot.current.set(0, THREE.MathUtils.lerp(0.38, -0.25, t), 0);
    }

    if (robotGroupRef.current) {
      // Smooth lerping for position
      const lerpSpeed = 0.06;
      robotGroupRef.current.position.lerp(targetPos.current, lerpSpeed);

      // Idle breathing floating motion
      const hoverOffset = Math.sin(time * 1.5) * 0.08;
      robotGroupRef.current.position.y += hoverOffset * 0.05;

      // Smooth lerping for rotation
      robotGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        robotGroupRef.current.rotation.x,
        targetRot.current.x + (-mouse.y * 0.15),
        lerpSpeed
      );
      robotGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        robotGroupRef.current.rotation.y,
        targetRot.current.y + (mouse.x * 0.25),
        lerpSpeed
      );
      robotGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        robotGroupRef.current.rotation.z,
        Math.sin(time * 1.2) * 0.02,
        lerpSpeed
      );
    }

    // Head subtle micro-movement (natural inverted coordinate mapping)
    if (headRef.current) {
      headRef.current.rotation.x = (-mouse.y * 0.25) + Math.sin(time * 2.0) * 0.03;
      headRef.current.rotation.y = (mouse.x * 0.3) + Math.cos(time * 1.5) * 0.04;
    }

    // Glowing eyes blinking / soft pulse
    if (eyesRef.current) {
      const eyeScaleY = Math.sin(time * 0.8) > 0.98 ? 0.1 : 1.0;
      eyesRef.current.scale.y = eyeScaleY;
    }
  });

  return (
    <group ref={robotGroupRef} scale={[1.25, 1.25, 1.25]}>
      {/* ─── ROBOT HEAD ASSEMBLY ─── */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        {/* Main Head Chassis (Rounded Box) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.35, 1.2]} />
          <meshStandardMaterial
            color="#E2E8F0"
            roughness={0.25}
            metalness={0.85}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Head Top Cap Trim */}
        <mesh position={[0, 0.68, 0]}>
          <boxGeometry args={[1.4, 0.05, 1.1]} />
          <meshStandardMaterial
            color="#1E293B"
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>

        {/* Visor Bezel Gradient Rim (Glowing Frame) */}
        <mesh ref={bezelRef} position={[0, 0, 0.58]}>
          <boxGeometry args={[1.26, 1.12, 0.08]} />
          <meshStandardMaterial
            color="#E11D48"
            emissive="#E11D48"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Recessed Dark Visor Screen */}
        <mesh position={[0, 0, 0.62]}>
          <boxGeometry args={[1.1, 0.95, 0.04]} />
          <meshStandardMaterial
            color="#08080C"
            roughness={0.08}
            metalness={0.95}
          />
        </mesh>

        {/* Glowing Robot Eyes */}
        <group ref={eyesRef} position={[0, 0, 0.65]}>
          {/* Left Eye */}
          <mesh position={[-0.26, 0.02, 0]}>
            <circleGeometry args={[0.1, 32]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          {/* Right Eye */}
          <mesh position={[0.26, 0.02, 0]}>
            <circleGeometry args={[0.1, 32]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Left Ear Audio Dial */}
        <mesh position={[-0.82, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.16, 32]} />
          <meshStandardMaterial
            color="#0F172A"
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>

        {/* Right Ear Audio Dial */}
        <mesh position={[0.82, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.16, 32]} />
          <meshStandardMaterial
            color="#0F172A"
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* ─── NECK SWIVEL JOINT ─── */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.25, 32]} />
        <meshStandardMaterial
          color="#0F172A"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* ─── TORSO / CHEST ASSEMBLY ─── */}
      <group position={[0, -0.2, 0]}>
        {/* Main Chest Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.35, 1.15, 0.95]} />
          <meshStandardMaterial
            color="#E2E8F0"
            roughness={0.25}
            metalness={0.85}
          />
        </mesh>

        {/* Chest Central Inset Panel */}
        <mesh position={[0, 0.05, 0.48]}>
          <boxGeometry args={[0.85, 0.75, 0.04]} />
          <meshStandardMaterial
            color="#0F172A"
            roughness={0.5}
            metalness={0.7}
          />
        </mesh>

        {/* 3 Status LEDs on Chest */}
        <group ref={chestLedsRef} position={[0, 0.3, 0.51]}>
          <mesh position={[-0.18, 0, 0]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#FB7185" />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#E11D48" />
          </mesh>
          <mesh position={[0.18, 0, 0]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#BE123C" />
          </mesh>
        </group>

        {/* Left Shoulder Articulation Joint */}
        <mesh position={[-0.82, 0.25, 0]}>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial
            color="#0F172A"
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>

        {/* Right Shoulder Articulation Joint */}
        <mesh position={[0.82, 0.25, 0]}>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial
            color="#0F172A"
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>
      </group>
    </group>
  );
};

export const GlobalRobotScene3D = () => {
  const scrollProgressRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        scrollProgressRef.current = Math.min(1, Math.max(0, window.scrollY / docHeight));
      }
    };

    const handleMouseMove = (e) => {
      mousePosRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePosRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.85} />
        {/* Key Lighting with Warm Red Rim Backlights */}
        <directionalLight position={[6, 8, 6]} intensity={1.9} color="#FFFFFF" />
        <directionalLight position={[-6, 4, -4]} intensity={2.6} color="#E11D48" />
        <pointLight position={[3, -2, 2]} intensity={1.8} color="#FB7185" />
        <pointLight position={[-4, 3, 2]} intensity={1.4} color="#BE123C" />

        <RobotModel scrollProgressRef={scrollProgressRef} mousePosRef={mousePosRef} />
      </Canvas>
    </div>
  );
};
