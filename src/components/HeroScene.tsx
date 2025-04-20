import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Lion: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1 + 1;
    }
  });

  return (
    <group ref={groupRef} position={[-2, 0, 0]}>
      {/* Lion Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 2, 16]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.6} />
      </mesh>
      
      {/* Lion Head */}
      <mesh position={[0, 1.5, 0.5]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.6} />
      </mesh>
      
      {/* Lion Mane */}
      <mesh position={[0, 1.5, 0.3]}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <meshStandardMaterial color="#B8860B" roughness={0.7} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.5, -0.3, 0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.6} />
      </mesh>
      <mesh position={[0.5, -0.3, 0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.6} />
      </mesh>
      <mesh position={[-0.5, -0.3, -0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.6} />
      </mesh>
      <mesh position={[0.5, -0.3, -0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.6} />
      </mesh>
    </group>
  );
};

const Tiger: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1 + 1;
    }
  });

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* Tiger Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.7, 0.9, 2, 16]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.6} />
      </mesh>
      
      {/* Tiger Head */}
      <mesh position={[0, 1.5, 0.5]}>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.6} />
      </mesh>
      
      {/* Tiger Stripes */}
      {[0, 0.4, 0.8, 1.2, 1.6].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[0.9, 0.03, 8, 12, Math.PI]} />
          <meshStandardMaterial color="#000000" roughness={0.7} />
        </mesh>
      ))}
      
      {/* Legs */}
      <mesh position={[-0.5, -0.3, 0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.6} />
      </mesh>
      <mesh position={[0.5, -0.3, 0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.6} />
      </mesh>
      <mesh position={[-0.5, -0.3, -0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.6} />
      </mesh>
      <mesh position={[0.5, -0.3, -0.5]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.6} />
      </mesh>
    </group>
  );
};

const IndianPillar: React.FC<{ position: [number, number, number] }> = ({ position }) => (
  <group position={position}>
    <mesh position={[0, -3, 0]}>
      <boxGeometry args={[1.5, 0.3, 1.5]} />
      <meshStandardMaterial color="#FFFFFF" roughness={0.7} />
    </mesh>
    <mesh position={[0, -1, 0]}>
      <cylinderGeometry args={[0.5, 0.6, 4, 16]} />
      <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
    </mesh>
    {[-2.5, -2, -1.5, 0.5, 1].map((y, i) => (
      <mesh key={i} position={[0, y, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 24]} />
        <meshStandardMaterial color="#FFD700" metalness={0.7} roughness={0.3} />
      </mesh>
    ))}
    <group position={[0, 0, 0.5]} scale={0.2}>
      <mesh>
        <boxGeometry args={[2, 1, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.8} />
      </mesh>
    </group>
    <mesh position={[0, 1.5, 0]}>
      <cylinderGeometry args={[0.8, 0.5, 0.5, 16]} />
      <meshStandardMaterial color="#FFFFFF" roughness={0.6} />
    </mesh>
  </group>
);

const TajMahal: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group position={[0, 0, -3]}>
      {/* Main Building */}
      <mesh ref={meshRef}>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* Dome */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* Spire */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Corner Towers */}
      <mesh position={[-1.8, 0.5, -1.8]}>
        <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      <mesh position={[-1.8, 2.3, -1.8]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      
      <mesh position={[1.8, 0.5, -1.8]}>
        <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      <mesh position={[1.8, 2.3, -1.8]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      
      <mesh position={[-1.8, 0.5, 1.8]}>
        <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      <mesh position={[-1.8, 2.3, 1.8]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      
      <mesh position={[1.8, 0.5, 1.8]}>
        <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      <mesh position={[1.8, 2.3, 1.8]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
    </group>
  );
};

const RedFort: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[-4, 0, -5]} scale={0.5}>
      {/* Main Wall */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[8, 2, 1]} />
        <meshStandardMaterial color="#FF4500" roughness={0.7} />
      </mesh>
      
      {/* Towers */}
      <mesh position={[-3.5, 1.5, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 3, 16]} />
        <meshStandardMaterial color="#FF4500" roughness={0.7} />
      </mesh>
      <mesh position={[-3.5, 3.3, 0]}>
        <coneGeometry args={[1, 1, 16]} />
        <meshStandardMaterial color="#FF4500" roughness={0.7} />
      </mesh>
      
      <mesh position={[3.5, 1.5, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 3, 16]} />
        <meshStandardMaterial color="#FF4500" roughness={0.7} />
      </mesh>
      <mesh position={[3.5, 3.3, 0]}>
        <coneGeometry args={[1, 1, 16]} />
        <meshStandardMaterial color="#FF4500" roughness={0.7} />
      </mesh>
      
      {/* Gate */}
      <mesh position={[0, 0.5, 0.1]}>
        <boxGeometry args={[2, 1, 1.2]} />
        <meshStandardMaterial color="#8B0000" roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.5, 0.1]}>
        <boxGeometry args={[2, 1, 0.2]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
};

const GoldenTemple: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[4, 0, -5]} scale={0.5}>
      {/* Water Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#1E90FF" roughness={0.3} opacity={0.8} transparent />
      </mesh>
      
      {/* Temple Platform */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.5, 4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>
      
      {/* Main Temple */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3, 1.5, 3]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Dome */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Entry Bridge */}
      <mesh position={[3, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>
    </group>
  );
};

const IndiaSculpture: React.FC = () => {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1 + 4;
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={[0, 4, -2]}>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[2.4, 0.8, 0.1]} />
        <meshStandardMaterial color="#FF9933" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.2, 0, 0]}>
        <boxGeometry args={[3, 0.8, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-1.5, -1, 0]} scale={0.7}>
        <boxGeometry args={[5, 0.8, 0.05]} />
        <meshStandardMaterial color="#138808" metalness={0.3} roughness={0.5} />
      </mesh>
      
      {/* Ashoka Chakra */}
      <mesh position={[0.2, 0, 0.1]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 24]} />
        <meshStandardMaterial color="#000080" metalness={0.5} roughness={0.3} />
      </mesh>
      {Array.from({ length: 24 }).map((_, i) => (
        <mesh key={i} position={[0.2, 0, 0.15]} rotation={[0, 0, (Math.PI * 2 / 24) * i]}>
          <boxGeometry args={[0.02, 0.25, 0.01]} />
          <meshStandardMaterial color="#000080" metalness={0.5} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const EnvironmentSetup: React.FC = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 2, 8);
  }, [camera]);

  return (
    <>
      <color attach="background" args={['#FFFFFF']} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      <IndianPillar position={[-8, 0, -5]} />
      <IndianPillar position={[8, 0, -5]} />
      <Lion />
      <Tiger />
      <TajMahal />
      <RedFort />
      <GoldenTemple />
      <IndiaSculpture />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const HeroScene: React.FC = () => {
  const { t } = useLanguage();
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen-dvh overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={45} />
          <fog attach="fog" args={['#FFFFFF', 12, 30]} />
          <EnvironmentSetup />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 flex flex-col justify-center items-center px-6 z-10">
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-4 text-black leading-tight">
            {t('hero.title').split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'authentic' ? 'text-orange-600' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-black">{t('hero.subtitle')}</p>
          <motion.button onClick={scrollToAbout} className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {t('hero.cta')}
          </motion.button>
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout} animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="text-black w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroScene;