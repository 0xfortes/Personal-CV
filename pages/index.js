import { useState, useEffect, useMemo, useCallback } from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import InteractivePhoto from '../components/InteractivePhoto';
import RoleInfo from '../components/RoleInfo';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPhoto, setShowPhoto] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(true);
  const [showRoles, setShowRoles] = useState(false);
  const [greetingComplete, setGreetingComplete] = useState(false);

  const handleRoleClick = useCallback((role) => {
    if (selectedRole === role) {
      setSelectedRole(null);
      setPhotoVisible(true);
    } else {
      setSelectedRole(role);
      setPhotoVisible(false);
    }
  }, [selectedRole]);

  const handleGreetingComplete = () => {
    setGreetingComplete(true);
    setShowPhoto(true);
  };

  useEffect(() => {
    if (showPhoto) {
      const photoTimer = setTimeout(() => {
        setPhotoVisible(true);
      }, 500);

      const rolesTimer = setTimeout(() => {
        setShowRoles(true);
      }, 1500);

      return () => {
        clearTimeout(photoTimer);
        clearTimeout(rolesTimer);
      };
    }
  }, [showPhoto]);

  const rolesSection = useMemo(() => (
    <div className="w-full flex-grow flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
        {showRoles && (
          <>
            <div className={`w-full lg:w-1/3 flex flex-col items-center justify-center transition-all duration-500 ${showRoles ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={() => handleRoleClick('bioengineer')}
                className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer text-center mb-4 text-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-glow"
              >
                BIOLOGICAL ENGINEER
              </button>
              <RoleInfo role="bioengineer" isActive={selectedRole === 'bioengineer'} />
            </div>
            
            <div className={`w-1/3 flex justify-center items-center transition-all duration-1000 mb-8 lg:mb-0 ${photoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <InteractivePhoto />
            </div>
            
            <div className={`w-full lg:w-1/3 flex flex-col items-center justify-center transition-all duration-500 ${showRoles ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={() => handleRoleClick('developer')}
                className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer text-center mb-4 text-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-glow"
              >
                SOFTWARE DEVELOPER
              </button>
              <RoleInfo role="developer" isActive={selectedRole === 'developer'} />
            </div>
          </>
        )}
      </div>
    </div>
  ), [showRoles, photoVisible, selectedRole, handleRoleClick]);

  return (
    <Layout>
      <section id="home" className="min-h-screen flex flex-col justify-between items-start text-left px-4 sm:px-8 md:px-16">
        <div className="pt-8 sm:pt-12 md:pt-16 pl-0 sm:pl-8 md:pl-4 lg:pl-22">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            <AnimatedText text="Hi!" showCursor={false} />
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <AnimatedText text="I am Luis Fortes." delay={500} onComplete={handleGreetingComplete} showCursor={true} />
          </h1>
        </div>
        {greetingComplete && rolesSection}
      </section>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}