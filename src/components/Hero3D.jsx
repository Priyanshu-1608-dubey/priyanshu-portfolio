import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#f43f5e" />

        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1.4, 64, 64]}>
            <MeshDistortMaterial
              color="#4f46e5"
              distort={0.45}
              speed={2}
              roughness={0.15}
              metalness={0.3}
            />
          </Sphere>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}