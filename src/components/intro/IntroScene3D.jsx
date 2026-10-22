import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const IntroScene3D = ({ progress, stage, onComplete }) => {
  // References for animated meshes
  const characterRef = useRef();
  const headRef = useRef();
  const torsoRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef();
  const blanketRef = useRef();
  const pcFanRef = useRef();
  const pcGlowRef = useRef();
  const monitorScreenRef = useRef();
  const deskLampLightRef = useRef();
  const monitorLightRef = useRef();
  const chairRef = useRef();

  // Positions in 3D space:
  // Bed is at x: -2.2, z: -0.5
  // Desk is at x: 1.2, z: -0.8
  // Chair is at x: 1.2, z: 0.1

  // Dynamic procedural canvas texture for the monitor displaying the booting portfolio
  const monitorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 576;
    const ctx = canvas.getContext('2d');

    const updateTexture = (t) => {
      // Background
      ctx.fillStyle = '#07090e';
      ctx.fillRect(0, 0, 1024, 576);

      if (t < 9.5) {
        // Monitor off
        ctx.fillStyle = '#05070a';
        ctx.fillRect(0, 0, 1024, 576);
      } else if (t < 11.0) {
        // Booting sequence
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, 1024, 576);

        // Grid
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.lineWidth = 1;
        for (let x = 0; x < 1024; x += 40) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 576); ctx.stroke();
        }
        for (let y = 0; y < 576; y += 40) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
        }

        // Terminal boot text
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 28px monospace';
        ctx.fillText('> SYSTEM BOOT: DEV_ENVIRONMENT_v2026', 80, 120);
        ctx.fillStyle = '#a855f7';
        ctx.font = '22px monospace';
        ctx.fillText('> Initializing Three.js WebGL Core...', 80, 180);
        ctx.fillText('> Loading React 19 Components & Dynamic Shaders...', 80, 220);
        ctx.fillText('> Connecting High-Performance Audio & Physics Engine...', 80, 260);

        // Progress bar
        const bootProg = Math.min(1, Math.max(0, (t - 9.5) / 1.5));
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.fillRect(80, 320, 864, 24);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(80, 320, 864 * bootProg, 24);
        ctx.fillStyle = '#f8fafc';
        ctx.font = '18px monospace';
        ctx.fillText(`STATUS: ${(bootProg * 100).toFixed(0)}% READY`, 80, 380);
      } else {
        // Live Portfolio Preview on 3D Monitor (Actual Current Redesigned Light Site)
        ctx.fillStyle = '#F8F9FA';
        ctx.fillRect(0, 0, 1024, 576);

        // Soft Ambient Rose & Amber Glow
        const bgGlow = ctx.createRadialGradient(512, 280, 20, 512, 280, 350);
        bgGlow.addColorStop(0, 'rgba(225, 29, 72, 0.08)');
        bgGlow.addColorStop(0.6, 'rgba(244, 63, 94, 0.03)');
        bgGlow.addColorStop(1, 'rgba(248, 249, 250, 0)');
        ctx.fillStyle = bgGlow;
        ctx.fillRect(0, 0, 1024, 576);

        // Subtle geometric background dots
        ctx.fillStyle = 'rgba(15, 23, 42, 0.04)';
        for (let x = 20; x < 1024; x += 28) {
          for (let y = 20; y < 576; y += 28) {
            ctx.beginPath();
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Single Central Hanging Cable for Navbar
        ctx.strokeStyle = '#64748B';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(512, 0);
        ctx.lineTo(512, 28);
        ctx.stroke();

        // Hanging Mount Bracket
        ctx.fillStyle = '#334155';
        ctx.fillRect(507, 24, 10, 5);

        // Hanging Glass Pill Navbar
        ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.roundRect(260, 28, 504, 38, 19);
        ctx.fill();
        ctx.strokeStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        // Navbar Monogram
        ctx.fillStyle = '#E11D48';
        ctx.beginPath();
        ctx.arc(282, 47, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('AR', 282, 51);

        // Navbar Brand Text
        ctx.textAlign = 'left';
        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('Abdul Rehman', 302, 45);
        ctx.fillStyle = '#E11D48';
        ctx.font = '600 8px monospace';
        ctx.fillText('MERN Developer', 302, 54);

        // Navbar Links
        ctx.fillStyle = '#475569';
        ctx.font = '500 10px sans-serif';
        ctx.fillText('Home    About    Skills    Projects    Services    Contact', 415, 51);

        // Navbar CTA Button
        ctx.fillStyle = '#E11D48';
        ctx.beginPath();
        ctx.roundRect(690, 36, 64, 22, 11);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Get in touch', 722, 50);

        // Layer 1: Giant Background Wordmark "ABDUL REHMAN"
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(203, 213, 225, 0.65)';
        ctx.font = '900 96px sans-serif';
        ctx.fillText('ABDUL REHMAN', 512, 200);

        // Layer 2: Slanted Crimson Script Tagline "MERN Stack Developer"
        ctx.save();
        ctx.translate(512, 230);
        ctx.rotate(-0.05);
        ctx.fillStyle = '#E11D48';
        ctx.shadowColor = 'rgba(225, 29, 72, 0.35)';
        ctx.shadowBlur = 18;
        ctx.shadowOffsetY = 4;
        ctx.font = 'italic 900 52px serif';
        ctx.fillText('MERN Stack Developer', 0, 0);
        ctx.restore();

        // Subtitle Description Line
        ctx.textAlign = 'center';
        ctx.fillStyle = '#1E293B';
        ctx.font = '600 15px sans-serif';
        ctx.fillText('Architecting modern MERN Stack web applications, scalable REST APIs, and interactive 3D digital experiences.', 512, 275);

        // 3D Robot Mascot Center Stage Drawing
        ctx.save();
        ctx.translate(512, 380);
        // Robot Head
        ctx.fillStyle = '#E2E8F0';
        ctx.beginPath();
        ctx.roundRect(-42, -50, 84, 60, 10);
        ctx.fill();
        ctx.strokeStyle = '#94A3B8';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Robot Visor Screen
        ctx.fillStyle = '#0F172A';
        ctx.beginPath();
        ctx.roundRect(-34, -42, 68, 44, 6);
        ctx.fill();
        ctx.strokeStyle = '#E11D48';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Glowing Robot Eyes
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-16, -20, 6, 0, Math.PI * 2);
        ctx.arc(16, -20, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#E11D48';
        ctx.beginPath();
        ctx.arc(-16, -20, 2.5, 0, Math.PI * 2);
        ctx.arc(16, -20, 2.5, 0, Math.PI * 2);
        ctx.fill();
        // Ears / Dials
        ctx.fillStyle = '#334155';
        ctx.fillRect(-50, -32, 8, 24);
        ctx.fillRect(42, -32, 8, 24);
        // Torso
        ctx.fillStyle = '#CBD5E1';
        ctx.beginPath();
        ctx.roundRect(-36, 16, 72, 50, 8);
        ctx.fill();
        // Chest Screen & LEDs
        ctx.fillStyle = '#1E293B';
        ctx.fillRect(-22, 25, 44, 32);
        ctx.fillStyle = '#FB7185';
        ctx.beginPath();
        ctx.arc(-10, 36, 3, 0, Math.PI * 2);
        ctx.arc(0, 36, 3, 0, Math.PI * 2);
        ctx.arc(10, 36, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Bottom-Left Status Card
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.roundRect(40, 440, 230, 95, 16);
        ctx.fill();
        ctx.strokeStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.arc(58, 460, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#BE123C';
        ctx.font = 'bold 9px monospace';
        ctx.fillText('AVAILABLE FOR HIRE', 68, 463);
        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('MERN Stack & Frontend Roles', 54, 484);
        ctx.fillStyle = '#64748B';
        ctx.font = '10px sans-serif';
        ctx.fillText('Production-ready MERN systems.', 54, 505);

        // Bottom-Right Highlight Card
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.roundRect(754, 440, 230, 95, 16);
        ctx.fill();
        ctx.strokeStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        ctx.fillStyle = '#BE123C';
        ctx.font = 'bold 9px monospace';
        ctx.fillText('SELECTED WORKS', 770, 463);
        ctx.fillStyle = '#94A3B8';
        ctx.fillText('2026 EDITION', 910, 463);
        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('Interactive 3D Web & MERN', 770, 484);
        ctx.fillStyle = '#E11D48';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('Explore Projects →', 770, 510);
      }

      texture.needsUpdate = true;
    };

    const texture = new THREE.CanvasTexture(canvas);
    texture.updateFn = updateTexture;
    updateTexture(0);
    return texture;
  }, []);

  // Update loop for character, camera, and props based on intro elapsed time
  useFrame((state) => {
    const t = progress; // from 0 to 14.5 seconds

    // Update dynamic monitor canvas
    if (monitorTexture.updateFn) {
      monitorTexture.updateFn(t);
    }

    // 1. BED & SLEEPING (t: 0 to 2.2s)
    // 2. WAKING UP (t: 2.2 to 4.5s)
    // 3. GETTING OUT OF BED & WALKING (t: 4.5 to 7.0s)
    // 4. SITTING IN CHAIR (t: 7.0 to 9.2s)
    // 5. TURNING ON PC & SCREEN BOOT (t: 9.2 to 11.2s)
    // 6. ZOOMING INTO SCREEN (t: 11.2 to 14.5s)

    const camera = state.camera;

    if (characterRef.current && torsoRef.current && leftArmRef.current && rightArmRef.current && leftLegRef.current && rightLegRef.current && headRef.current) {
      if (t < 2.2) {
        // Asleep in bed
        characterRef.current.position.set(-2.2, 0.65, -0.5);
        characterRef.current.rotation.set(0, Math.PI / 2, 0);

        torsoRef.current.rotation.x = Math.PI / 2; // lying down flat
        headRef.current.rotation.x = 0.1 * Math.sin(state.clock.elapsedTime * 2); // breathing
        torsoRef.current.position.y = 0.03 * Math.sin(state.clock.elapsedTime * 2);

        leftArmRef.current.rotation.set(0.2, 0, 0.3);
        rightArmRef.current.rotation.set(0.2, 0, -0.3);
        leftLegRef.current.rotation.set(0, 0, 0);
        rightLegRef.current.rotation.set(0, 0, 0);

        if (blanketRef.current) {
          blanketRef.current.position.set(-2.2, 0.72, -0.2);
          blanketRef.current.scale.set(1, 1, 1);
        }

        // Camera wide view
        camera.position.set(4.8, 3.8, 5.2);
        camera.lookAt(-0.5, 1.2, -0.5);
      } else if (t < 4.5) {
        // Waking up & sitting up in bed
        const wakeP = (t - 2.2) / 2.3; // 0 to 1
        const easeWake = THREE.MathUtils.smoothstep(wakeP, 0, 1);

        characterRef.current.position.set(-2.2, 0.65 + easeWake * 0.15, -0.5);
        characterRef.current.rotation.set(0, Math.PI / 2, 0);

        // Sit up: rotate torso from Math.PI/2 to 0
        torsoRef.current.rotation.x = (Math.PI / 2) * (1 - easeWake);
        headRef.current.rotation.x = -0.3 * (1 - easeWake) + 0.1 * Math.sin(t * 4);
        headRef.current.rotation.y = 0.4 * Math.sin(easeWake * Math.PI);

        // Arms stretch
        leftArmRef.current.rotation.set(-0.8 * easeWake, 0, 0.4);
        rightArmRef.current.rotation.set(-0.8 * easeWake, 0, -0.4);

        if (blanketRef.current) {
          blanketRef.current.position.set(-2.2, 0.65, -0.2 + easeWake * 0.4);
          blanketRef.current.scale.set(1, 1, 1 - easeWake * 0.4);
        }

        // Camera smoothly glides closer
        camera.position.lerp(new THREE.Vector3(3.8, 3.2, 4.2), 0.05);
        camera.lookAt(-0.8, 1.3, -0.5);
      } else if (t < 7.0) {
        // Getting out of bed and walking to desk
        const walkP = (t - 4.5) / 2.5; // 0 to 1
        const easeWalk = THREE.MathUtils.smoothstep(walkP, 0, 1);

        // Interpolate character position from bed (-2.2, 0, -0.5) to desk front (1.2, 0, 0.3)
        const startPos = new THREE.Vector3(-2.2, 0, -0.5);
        const midPos = new THREE.Vector3(-0.5, 0, 0.6);
        const endPos = new THREE.Vector3(1.2, 0, 0.3);

        let currentPos = new THREE.Vector3();
        if (easeWalk < 0.5) {
          currentPos.lerpVectors(startPos, midPos, easeWalk * 2);
        } else {
          currentPos.lerpVectors(midPos, endPos, (easeWalk - 0.5) * 2);
        }

        characterRef.current.position.set(currentPos.x, 0.85, currentPos.z);
        characterRef.current.rotation.set(0, Math.PI / 2 + Math.PI / 4, 0);

        torsoRef.current.rotation.x = 0;

        // Walking leg & arm swing
        const walkCycle = Math.sin(walkP * 24);
        leftLegRef.current.rotation.x = walkCycle * 0.6;
        rightLegRef.current.rotation.x = -walkCycle * 0.6;
        leftArmRef.current.rotation.x = -walkCycle * 0.5;
        rightArmRef.current.rotation.x = walkCycle * 0.5;
        headRef.current.rotation.y = 0.2 * Math.sin(walkP * 6);

        // Chair moves back slightly to receive character
        if (chairRef.current) {
          chairRef.current.position.set(1.2, 0, 0.5);
        }

        // Camera follows character movement
        camera.position.lerp(new THREE.Vector3(3.2, 2.6, 3.2), 0.05);
        camera.lookAt(currentPos.x, 1.3, currentPos.z);
      } else if (t < 9.2) {
        // Sitting in chair & placing hands on keyboard/mouse
        const sitP = (t - 7.0) / 2.2; // 0 to 1
        const easeSit = THREE.MathUtils.smoothstep(sitP, 0, 1);

        characterRef.current.position.set(1.2, 0.85 - easeSit * 0.3, 0.3 - easeSit * 0.2);
        characterRef.current.rotation.set(0, Math.PI, 0); // Face desk

        // Legs bend into sitting position
        leftLegRef.current.rotation.x = (Math.PI / 2) * easeSit;
        rightLegRef.current.rotation.x = (Math.PI / 2) * easeSit;

        // Arms reach toward desk / keyboard
        leftArmRef.current.rotation.set(-0.9 * easeSit, 0.2 * easeSit, 0.2);
        rightArmRef.current.rotation.set(-0.9 * easeSit, -0.2 * easeSit, -0.2);
        headRef.current.rotation.set(0.15 * easeSit, 0, 0);

        if (chairRef.current) {
          chairRef.current.position.set(1.2, 0, 0.5 - easeSit * 0.4);
        }

        // Camera moves to behind/side of workstation
        camera.position.lerp(new THREE.Vector3(2.4, 2.1, 2.2), 0.06);
        camera.lookAt(1.2, 1.45, -0.8);
      } else if (t < 11.2) {
        // Hand clicks mouse, PC powers up, monitor turns on
        const clickP = (t - 9.2) / 2.0;

        characterRef.current.position.set(1.2, 0.55, 0.1);
        characterRef.current.rotation.set(0, Math.PI, 0);

        // Right hand clicks mouse
        rightArmRef.current.rotation.set(-0.95, -0.2, -0.2);
        rightArmRef.current.position.y = 0.02 * Math.sin(clickP * 12);

        // PC Fans spin & light up
        if (pcFanRef.current) {
          pcFanRef.current.rotation.z += 0.3;
        }
        if (pcGlowRef.current) {
          pcGlowRef.current.material.opacity = Math.min(1, clickP * 2);
        }
        if (monitorLightRef.current) {
          monitorLightRef.current.intensity = Math.min(2.5, clickP * 3.5);
        }

        // Camera starts framing the monitor screen
        camera.position.lerp(new THREE.Vector3(1.4, 1.6, 0.9), 0.06);
        camera.lookAt(1.2, 1.45, -0.8);
      } else {
        // Zooming directly into the monitor screen to fill the entire viewport
        const zoomP = Math.min(1, (t - 11.2) / 3.3);
        const easeZoom = Math.pow(zoomP, 2.5); // accelerating cinematic zoom

        if (pcFanRef.current) {
          pcFanRef.current.rotation.z += 0.4;
        }

        // Target position right at center of the monitor screen
        const targetCamPos = new THREE.Vector3(1.2, 1.48, -0.72);
        const startCamPos = new THREE.Vector3(1.4, 1.6, 0.9);

        camera.position.lerpVectors(startCamPos, targetCamPos, easeZoom);
        camera.lookAt(1.2, 1.48, -0.85);

        if (monitorLightRef.current) {
          monitorLightRef.current.intensity = 2.5 + easeZoom * 3.0;
        }

        if (zoomP >= 0.98 && onComplete) {
          onComplete();
        }
      }
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#38bdf8" />
      <directionalLight position={[5, 8, 5]} intensity={0.8} color="#f8fafc" castShadow />
      
      {/* Window Moonlight / Dawn Light */}
      <pointLight position={[-4, 3, 2]} intensity={1.2} color="#818cf8" distance={10} />
      
      {/* Cozy Desk Lamp Light */}
      <pointLight ref={deskLampLightRef} position={[0.4, 1.9, -0.8]} intensity={1.8} color="#f59e0b" distance={4} />

      {/* Dynamic Monitor Glowing Light */}
      <pointLight ref={monitorLightRef} position={[1.2, 1.5, -0.7]} intensity={0} color="#06b6d4" distance={5} />

      {/* Room Floor */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[9, 0.1, 9]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 3, -4.5]} receiveShadow>
        <boxGeometry args={[9, 6, 0.1]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>

      {/* Left Wall with Window */}
      <mesh position={[-4.5, 3, 0]} receiveShadow>
        <boxGeometry args={[0.1, 6, 9]} />
        <meshStandardMaterial color="#0b0f19" roughness={0.8} />
      </mesh>

      {/* Window Frame & Sky */}
      <group position={[-4.44, 3, 1]}>
        <mesh>
          <boxGeometry args={[0.05, 2.5, 2]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.08, 2.6, 2.1]} />
          <meshStandardMaterial color="#334155" wireframe />
        </mesh>
      </group>

      {/* Wall Posters */}
      <mesh position={[1.2, 3.2, -4.44]}>
        <planeGeometry args={[1.6, 1.1]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.4} />
      </mesh>
      <mesh position={[-1.8, 3.2, -4.44]}>
        <planeGeometry args={[1.2, 1.4]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.4} />
      </mesh>

      {/* Bookshelf */}
      <group position={[-3.2, 2.2, -4.2]}>
        <mesh>
          <boxGeometry args={[1.6, 0.08, 0.4]} />
          <meshStandardMaterial color="#475569" />
        </mesh>
        {/* Books */}
        <mesh position={[-0.5, 0.25, 0]}>
          <boxGeometry args={[0.15, 0.42, 0.3]} />
          <meshStandardMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[-0.3, 0.22, 0]}>
          <boxGeometry args={[0.12, 0.36, 0.28]} />
          <meshStandardMaterial color="#ec4899" />
        </mesh>
        <mesh position={[-0.1, 0.28, 0]}>
          <boxGeometry args={[0.18, 0.48, 0.32]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
        {/* Small plant */}
        <mesh position={[0.5, 0.15, 0]}>
          <cylinderGeometry args={[0.12, 0.09, 0.2, 16]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
        <mesh position={[0.5, 0.35, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
      </group>

      {/* ================= BED SETUP ================= */}
      <group position={[-2.2, 0, -0.5]}>
        {/* Bed frame */}
        <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.4, 2.6]} />
          <meshStandardMaterial color="#334155" roughness={0.6} />
        </mesh>
        {/* Mattress */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <boxGeometry args={[1.7, 0.2, 2.5]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.9} />
        </mesh>
        {/* Pillow */}
        <mesh position={[0, 0.6, -0.9]} castShadow>
          <boxGeometry args={[1.2, 0.15, 0.5]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
        </mesh>
        {/* Blanket */}
        <mesh ref={blanketRef} position={[0, 0.58, 0.2]} castShadow>
          <boxGeometry args={[1.72, 0.12, 1.8]} />
          <meshStandardMaterial color="#2563eb" roughness={0.7} />
        </mesh>
        {/* Nightstand */}
        <mesh position={[1.2, 0.3, -1.0]} castShadow>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        {/* Digital Clock */}
        <mesh position={[1.2, 0.65, -1.0]}>
          <boxGeometry args={[0.25, 0.1, 0.15]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
      </group>

      {/* ================= WORKSTATION DESK SETUP ================= */}
      <group position={[1.2, 0, -0.8]}>
        {/* Desk top */}
        <mesh position={[0, 1.0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.4, 0.08, 1.1]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.2} />
        </mesh>
        {/* Desk Legs */}
        <mesh position={[-1.1, 0.5, -0.45]} castShadow>
          <boxGeometry args={[0.06, 1.0, 0.06]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} />
        </mesh>
        <mesh position={[1.1, 0.5, -0.45]} castShadow>
          <boxGeometry args={[0.06, 1.0, 0.06]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} />
        </mesh>
        <mesh position={[-1.1, 0.5, 0.45]} castShadow>
          <boxGeometry args={[0.06, 1.0, 0.06]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} />
        </mesh>
        <mesh position={[1.1, 0.5, 0.45]} castShadow>
          <boxGeometry args={[0.06, 1.0, 0.06]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} />
        </mesh>

        {/* Desk Mat */}
        <mesh position={[0, 1.045, 0.05]} receiveShadow>
          <boxGeometry args={[1.5, 0.01, 0.6]} />
          <meshStandardMaterial color="#0f172a" roughness={0.9} />
        </mesh>

        {/* Mechanical Keyboard */}
        <mesh position={[-0.1, 1.06, 0.15]} castShadow>
          <boxGeometry args={[0.55, 0.025, 0.2]} />
          <meshStandardMaterial color="#334155" roughness={0.5} />
        </mesh>

        {/* RGB Mouse */}
        <mesh position={[0.35, 1.06, 0.15]} castShadow>
          <boxGeometry args={[0.1, 0.025, 0.15]} />
          <meshStandardMaterial color="#06b6d4" roughness={0.4} />
        </mesh>

        {/* Central Main Monitor */}
        <group position={[0, 1.04, -0.15]}>
          {/* Monitor Stand */}
          <mesh position={[0, 0.2, -0.05]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.4, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.01, -0.05]} castShadow>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>

          {/* Monitor Bezel Frame */}
          <mesh position={[0, 0.45, 0]} castShadow>
            <boxGeometry args={[1.4, 0.82, 0.06]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
          </mesh>

          {/* Active 3D Monitor Screen Texture */}
          <mesh ref={monitorScreenRef} position={[0, 0.45, 0.032]}>
            <planeGeometry args={[1.34, 0.76]} />
            <meshBasicMaterial map={monitorTexture} toneMapped={false} />
          </mesh>
        </group>

        {/* Secondary Vertical Monitor */}
        <group position={[-0.88, 1.04, -0.08]} rotation={[0, 0.35, 0]}>
          <mesh position={[0, 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.4, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.48, 0.03]} castShadow>
            <boxGeometry args={[0.5, 0.88, 0.05]} />
            <meshStandardMaterial color="#0f172a" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.48, 0.06]}>
            <planeGeometry args={[0.46, 0.84]} />
            <meshBasicMaterial color="#0f172a" />
          </mesh>
        </group>

        {/* High-Tech PC Case Tower with RGB */}
        <group position={[0.92, 1.04, -0.05]}>
          {/* Main Case Body */}
          <mesh position={[0, 0.35, 0]} castShadow>
            <boxGeometry args={[0.3, 0.65, 0.6]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Glass Side Panel */}
          <mesh position={[-0.152, 0.35, 0]}>
            <planeGeometry args={[0.58, 0.62]} />
            <meshPhysicalMaterial color="#38bdf8" transmission={0.7} roughness={0.1} transparent opacity={0.6} />
          </mesh>
          {/* Spinning RGB Fan */}
          <mesh ref={pcFanRef} position={[-0.05, 0.4, 0.12]}>
            <torusGeometry args={[0.1, 0.02, 16, 32]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
          {/* Internal Glow */}
          <mesh ref={pcGlowRef} position={[-0.05, 0.35, 0]}>
            <boxGeometry args={[0.15, 0.4, 0.4]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
          </mesh>
        </group>

        {/* Desk Lamp */}
        <group position={[-0.8, 1.04, 0.1]}>
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.6} />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.5, 8]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.6} />
          </mesh>
          <mesh position={[0.08, 0.5, 0]} rotation={[0, 0, -0.6]}>
            <coneGeometry args={[0.12, 0.18, 16, 1, true]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.6} />
          </mesh>
        </group>
      </group>

      {/* ================= ERGONOMIC DESK CHAIR ================= */}
      <group ref={chairRef} position={[1.2, 0, 0.4]} rotation={[0, Math.PI, 0]}>
        {/* Base Wheel Hub */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 5]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.35, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
        {/* Seat Cushion */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.55, 0.1, 0.52]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        {/* Backrest */}
        <mesh position={[0, 0.85, 0.22]} castShadow>
          <boxGeometry args={[0.5, 0.65, 0.08]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
      </group>

      {/* ================= PROCEDURAL 3D CHARACTER ================= */}
      <group ref={characterRef} position={[-2.2, 0.65, -0.5]}>
        {/* Torso Group (Pivot at hips) */}
        <group ref={torsoRef} position={[0, 0.35, 0]}>
          {/* Main Chest/Body */}
          <mesh position={[0, 0.25, 0]} castShadow>
            <boxGeometry args={[0.42, 0.5, 0.24]} />
            <meshStandardMaterial color="#3b82f6" roughness={0.6} />
          </mesh>

          {/* Neck & Head */}
          <group ref={headRef} position={[0, 0.56, 0]}>
            {/* Head Face */}
            <mesh position={[0, 0.15, 0]} castShadow>
              <sphereGeometry args={[0.16, 16, 16]} />
              <meshStandardMaterial color="#fcd34d" roughness={0.8} />
            </mesh>
            {/* Hair */}
            <mesh position={[0, 0.24, -0.04]}>
              <sphereGeometry args={[0.17, 16, 16]} />
              <meshStandardMaterial color="#1e293b" roughness={0.9} />
            </mesh>
            {/* Developer Glasses */}
            <mesh position={[0, 0.16, 0.14]}>
              <boxGeometry args={[0.22, 0.06, 0.04]} />
              <meshStandardMaterial color="#06b6d4" roughness={0.2} metalness={0.8} />
            </mesh>
          </group>

          {/* Left Arm & Hand */}
          <group ref={leftArmRef} position={[-0.26, 0.42, 0]}>
            <mesh position={[0, -0.22, 0]} castShadow>
              <cylinderGeometry args={[0.06, 0.05, 0.44, 8]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.6} />
            </mesh>
            <mesh position={[0, -0.46, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color="#fcd34d" />
            </mesh>
          </group>

          {/* Right Arm & Hand */}
          <group ref={rightArmRef} position={[0.26, 0.42, 0]}>
            <mesh position={[0, -0.22, 0]} castShadow>
              <cylinderGeometry args={[0.06, 0.05, 0.44, 8]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.6} />
            </mesh>
            <mesh position={[0, -0.46, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color="#fcd34d" />
            </mesh>
          </group>
        </group>

        {/* Left Leg */}
        <group ref={leftLegRef} position={[-0.12, 0.35, 0]}>
          <mesh position={[0, -0.25, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
            <meshStandardMaterial color="#1e293b" roughness={0.7} />
          </mesh>
          <mesh position={[0, -0.52, 0.05]}>
            <boxGeometry args={[0.1, 0.08, 0.18]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.5} />
          </mesh>
        </group>

        {/* Right Leg */}
        <group ref={rightLegRef} position={[0.12, 0.35, 0]}>
          <mesh position={[0, -0.25, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.06, 0.5, 8]} />
            <meshStandardMaterial color="#1e293b" roughness={0.7} />
          </mesh>
          <mesh position={[0, -0.52, 0.05]}>
            <boxGeometry args={[0.1, 0.08, 0.18]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.5} />
          </mesh>
        </group>
      </group>
    </>
  );
};
