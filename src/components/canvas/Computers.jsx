import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF("./dingus_the_cat/scene.gltf");

  return (
      <mesh>
          <hemisphereLight intensity={2.15} groundColor="black" />
          <pointLight intensity={1} />
          <spotLight 
            position={[0, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={0.6}
            castShadow
            shadow-mapSize={1024}
          />
          <primitive
              object={computer.scene}
              scale={0.2}
              position={[0, -2.25, 0]}
              rotation={[-0.01, 0.7, -0.1]}
          />
      </mesh>
  )
}

const ComputersCanvas = () => {
  return (
      <Canvas
          frameloop="demand"
          shadows
          camera={{position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
              />
              <Computers />
          </Suspense>
          {/* <Computers /> */}
          <Preload all />
      </Canvas>
  )
}

export default ComputersCanvas;