'use client'

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function StarsBackground() {
  return (
    <div className='fixed inset-0 z-0 w-full h-full'>
      <Canvas>
        <Stars radius={50} fade speed={2} count={2500} depth={100} />
      </Canvas>
    </div>
  );
}