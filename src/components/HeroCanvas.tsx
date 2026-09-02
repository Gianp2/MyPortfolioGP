import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroCanvasProps {
  onStatusUpdate?: (status: { x: string; y: string; radius: string; merges: number; fps: number }) => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ onStatusUpdate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statusCallbackRef = useRef(onStatusUpdate);
  statusCallbackRef.current = onStatusUpdate;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;
    
    // Optimized pixel ratio: 1.0 on mobile for 60fps locked, max 1.5 on desktop
    const pixelRatio = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        precision: isMobile ? 'mediump' : 'highp',
        depth: false,
        stencil: false
      });
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    // Dynamic blob positions & target
    const pointerPos = new THREE.Vector2(0.5, 0.5);
    const smoothPointer = new THREE.Vector2(0.5, 0.5);
    let isTouching = false;
    let autoTimer = 0;

    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 60;
    let activeMerges = 0;

    // Fast, ultra-smooth 2.5D Analytical Liquid Metaball Shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uIsMobile: { value: isMobile ? 1.0 : 0.0 },
        uIsActive: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        ${isMobile ? 'precision mediump float;' : 'precision highp float;'}
        
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uPointer;
        uniform float uIsMobile;
        uniform float uIsActive;
        
        varying vec2 vUv;
        
        #define PI 3.14159265359
        
        // Smooth minimum for organic liquid blending
        float smin(float a, float b, float k) {
          float h = max(k - abs(a - b), 0.0) / k;
          return min(a, b) - h * h * k * 0.25;
        }
        
        // Sphere SDF in 2D
        float circleSDF(vec2 p, vec2 center, float radius) {
          return length(p - center) - radius;
        }

        void main() {
          // Normalized aspect-corrected coordinates
          vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
          vec2 pointerCoord = (uPointer * uResolution.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
          
          float t = uTime * 0.7;
          
          // Organic floating blobs configured for both mobile portrait and desktop widescreen
          float isMob = uIsMobile;
          
          // Base scale adaptation for mobile portrait
          float scale = isMob > 0.5 ? 0.85 : 1.0;
          
          // 1. Primary corner liquid blobs (Anchor points)
          vec2 blob1Pos = vec2(-0.85 * scale, 0.75 * scale) + vec2(sin(t * 0.5) * 0.12, cos(t * 0.4) * 0.1);
          float blob1 = circleSDF(uv, blob1Pos, 0.48 * scale);
          
          vec2 blob2Pos = vec2(0.85 * scale, -0.75 * scale) + vec2(cos(t * 0.45) * 0.12, sin(t * 0.55) * 0.1);
          float blob2 = circleSDF(uv, blob2Pos, 0.52 * scale);
          
          // 2. Dynamic floating orbital blobs
          vec2 blob3Pos = vec2(
            sin(t * 0.6) * 0.65 * scale,
            cos(t * 0.4) * 0.45 * scale
          );
          float blob3 = circleSDF(uv, blob3Pos, 0.32 * scale);
          
          vec2 blob4Pos = vec2(
            cos(t * 0.5 + 2.1) * 0.75 * scale,
            sin(t * 0.7 + 1.2) * 0.55 * scale
          );
          float blob4 = circleSDF(uv, blob4Pos, 0.26 * scale);
          
          vec2 blob5Pos = vec2(
            sin(t * 0.4 + 4.2) * 0.5 * scale,
            sin(t * 0.6 + 3.1) * 0.65 * scale
          );
          float blob5 = circleSDF(uv, blob5Pos, 0.28 * scale);
          
          // 3. User interactive cursor / touch blob
          float cursorRadius = mix(0.24, 0.32, sin(t * 2.0) * 0.5 + 0.5) * scale;
          float cursorBlob = circleSDF(uv, pointerCoord, cursorRadius);
          
          // Smooth blend all metaballs together
          float blendDist = 0.35 * scale;
          float d = smin(blob1, blob2, blendDist);
          d = smin(d, blob3, blendDist);
          d = smin(d, blob4, blendDist);
          d = smin(d, blob5, blendDist);
          d = smin(d, cursorBlob, 0.45 * scale);
          
          // Normal approximation via analytical gradient
          float eps = 0.005;
          vec2 grad = vec2(
            (circleSDF(uv + vec2(eps, 0.0), pointerCoord, cursorRadius) - circleSDF(uv - vec2(eps, 0.0), pointerCoord, cursorRadius)),
            (circleSDF(uv + vec2(0.0, eps), pointerCoord, cursorRadius) - circleSDF(uv - vec2(0.0, eps), pointerCoord, cursorRadius))
          );
          
          // 3D Normal for glossy liquid surface
          vec3 normal = normalize(vec3(-grad * 25.0, 1.0));
          vec3 lightDir = normalize(vec3(0.4, 0.8, 0.9));
          vec3 viewDir = vec3(0.0, 0.0, 1.0);
          
          // Liquid Lighting
          float diff = max(dot(normal, lightDir), 0.0);
          vec3 halfDir = normalize(lightDir + viewDir);
          float spec = pow(max(dot(normal, halfDir), 0.0), 16.0);
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);
          
          // Deep, Subtle Emerald Color Scheme (Darker for optimal text contrast)
          vec3 emeraldCore = vec3(0.008, 0.06, 0.03);       // Deep dark emerald base
          vec3 emeraldBright = vec3(0.02, 0.30, 0.16);     // Muted rich emerald
          vec3 emeraldCyan = vec3(0.05, 0.40, 0.25);       // Soft emerald tone
          vec3 specularColor = vec3(0.35, 0.60, 0.45);     // Toned-down subtle specular shine
          
          // Surface mask
          float surfaceMask = 1.0 - smoothstep(-0.02, 0.03, d);
          
          // Inner body color
          vec3 bodyColor = mix(emeraldCore, emeraldBright, diff * 0.6 + fresnel * 0.4);
          bodyColor += spec * specularColor * 0.6;
          bodyColor += fresnel * emeraldCyan * 0.4;
          
          // Outer Atmospheric & Glow Halo (subtle and dark)
          float glow1 = exp(-max(d, 0.0) * 5.2) * 0.25;
          float glow2 = exp(-max(d, 0.0) * 2.2) * 0.12;
          
          // Interactive cursor proximity extra aura
          float distToCursor = length(uv - pointerCoord);
          float cursorAura = exp(-distToCursor * 2.5) * 0.18;
          
          vec3 auraColor = mix(emeraldBright, emeraldCyan, sin(t + uv.y * 2.0) * 0.5 + 0.5);
          vec3 totalGlow = (glow1 * emeraldBright + glow2 * auraColor + cursorAura * emeraldCyan);
          
          // Final composite
          vec3 finalColor = bodyColor * surfaceMask + totalGlow * (1.0 - surfaceMask * 0.4);
          
          // Alpha calculation for seamless blending with dark background (subdued opacity)
          float alpha = clamp(surfaceMask * 0.75 + (glow1 + glow2 + cursorAura) * 0.5, 0.0, 0.75);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Pointer tracker
    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const nx = (clientX - rect.left) / (rect.width || window.innerWidth);
      const ny = 1.0 - (clientY - rect.top) / (rect.height || window.innerHeight);
      
      pointerPos.x = Math.max(0, Math.min(1, nx));
      pointerPos.y = Math.max(0, Math.min(1, ny));
      material.uniforms.uIsActive.value = 1.0;
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
      isTouching = true;
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      isTouching = true;
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    // Attach listeners to window & container to capture all interactions smoothly
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    const onWindowResize = () => {
      if (!renderer || !container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      const isMobNow = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;
      
      const newRatio = isMobNow ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(newRatio);

      material.uniforms.uResolution.value.set(newWidth, newHeight);
      material.uniforms.uIsMobile.value = isMobNow ? 1.0 : 0.0;
    };

    window.addEventListener('resize', onWindowResize, { passive: true });

    // Initial center position
    pointerPos.set(0.5, 0.5);
    smoothPointer.set(0.5, 0.5);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const currentTime = performance.now();
      frameCount++;

      const elapsedTime = clock.getElapsedTime();

      // If user isn't actively moving mouse/touch, animate pointer in a smooth natural figure-8 loop
      if (!isTouching && material.uniforms.uIsActive.value < 0.1) {
        autoTimer += 0.015;
        const autoX = 0.5 + Math.sin(autoTimer * 0.8) * 0.28;
        const autoY = 0.5 + Math.sin(autoTimer * 1.6) * 0.2;
        pointerPos.set(autoX, autoY);
      }

      // Smooth pointer interpolation for fluid movement
      const lerpFactor = isMobile ? 0.18 : 0.12;
      smoothPointer.x += (pointerPos.x - smoothPointer.x) * lerpFactor;
      smoothPointer.y += (pointerPos.y - smoothPointer.y) * lerpFactor;

      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uPointer.value.copy(smoothPointer);

      // Measure FPS & status updates
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Calculate simulated proximity merges
        const distFromCenter = Math.hypot(smoothPointer.x - 0.5, smoothPointer.y - 0.5);
        activeMerges = distFromCenter < 0.25 ? 3 : (distFromCenter < 0.45 ? 2 : 1);

        if (statusCallbackRef.current) {
          statusCallbackRef.current({
            x: (smoothPointer.x * 2 - 1).toFixed(2),
            y: (smoothPointer.y * 2 - 1).toFixed(2),
            radius: (0.16 + (1 - distFromCenter) * 0.08).toFixed(2),
            merges: activeMerges,
            fps: Math.min(fps, 60)
          });
        }
        frameCount = 0;
        lastTime = currentTime;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onWindowResize);

      if (renderer) {
        renderer.dispose();
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" />;
};
