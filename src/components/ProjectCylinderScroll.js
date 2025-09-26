import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

// Transform the portfolioData projects to match the component structure
const transformedProjects = projects.items.map(project => ({
  title: project.name,
  description: project.description,
  image: project.image,
  link: project.links.github,
  technologies: project.technologies,
  features: project.features
}));

const ProjectCylinderScroll = () => {
  const [yRotation, setYRotation] = useState(0);
  const [frontProjectIndex, setFrontProjectIndex] = useState(0);
  const sectionRef = useRef(null);

  // Debug logging
  console.log('ProjectCylinderScroll component is rendering');

  // Handle horizontal scroll events on the section container
  useEffect(() => {
    const handleScroll = (event) => {
      // Only handle scroll events when hovering over the section
      if (!sectionRef.current?.contains(event.target)) return;
      
      event.preventDefault();
      
      // Use deltaX for horizontal scrolling (trackpad horizontal gestures, shift+scroll)
      // If deltaX is not available, use deltaY as fallback but treat it as horizontal
      const deltaX = event.deltaX || event.deltaY;
      const rotationIncrement = deltaX * 0.15; // Smooth rotation factor
      
      setYRotation(prev => {
        const newRotation = prev + rotationIncrement;
        
        // Calculate which project is facing front (closest to 0 degrees)
        const normalizedRotation = ((newRotation % 360) + 360) % 360;
        const projectAngle = 60; // 360 / 6 panels
        const closestProject = Math.round(normalizedRotation / projectAngle) % 6;
        setFrontProjectIndex(closestProject);
        
        return newRotation;
      });
    };

    // Handle keyboard navigation
    const handleKeyDown = (event) => {
      if (!sectionRef.current?.contains(event.target)) return;
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setYRotation(prev => {
          const newRotation = prev + 60; // Rotate to next project
          const normalizedRotation = ((newRotation % 360) + 360) % 360;
          const projectAngle = 60;
          const closestProject = Math.round(normalizedRotation / projectAngle) % 6;
          setFrontProjectIndex(closestProject);
          return newRotation;
        });
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setYRotation(prev => {
          const newRotation = prev - 60; // Rotate to previous project
          const normalizedRotation = ((newRotation % 360) + 360) % 360;
          const projectAngle = 60;
          const closestProject = Math.round(normalizedRotation / projectAngle) % 6;
          setFrontProjectIndex(closestProject);
          return newRotation;
        });
      }
    };

    // Handle touch events for mobile (horizontal swipes)
    let touchStartX = 0;
    
    const handleTouchStart = (event) => {
      if (!sectionRef.current?.contains(event.target)) return;
      touchStartX = event.touches[0].clientX;
    };
    
    const handleTouchMove = (event) => {
      if (!sectionRef.current?.contains(event.target)) return;
      event.preventDefault();
      
      const touchEndX = event.touches[0].clientX;
      
      const deltaX = touchEndX - touchStartX;
      
      // Use horizontal swipe for rotation
      const rotationIncrement = deltaX * 0.3;
      
      setYRotation(prev => {
        const newRotation = prev + rotationIncrement;
        const normalizedRotation = ((newRotation % 360) + 360) % 360;
        const projectAngle = 60;
        const closestProject = Math.round(normalizedRotation / projectAngle) % 6;
        setFrontProjectIndex(closestProject);
        return newRotation;
      });
      
      touchStartX = touchEndX;
    };

    // Add event listeners to the section container
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('wheel', handleScroll, { passive: false });
      sectionElement.addEventListener('keydown', handleKeyDown);
      sectionElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      sectionElement.addEventListener('touchmove', handleTouchMove, { passive: false });
      sectionElement.setAttribute('tabindex', '0'); // Make it focusable for keyboard events
    }

    // Cleanup
    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('wheel', handleScroll);
        sectionElement.removeEventListener('keydown', handleKeyDown);
        sectionElement.removeEventListener('touchstart', handleTouchStart);
        sectionElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  // Calculate panel positions for cylinder (6 panels, 60 degrees apart)
  const getPanelTransform = (index) => {
    const angle = index * 60; // 0deg, 60deg, 120deg, 180deg, 240deg, 300deg
    const radius = 450; // translateZ distance
    
    return {
      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      transformStyle: 'preserve-3d'
    };
  };

  return (
        <section 
          ref={sectionRef}
          className="Project-Section"
          style={{
            width: '100%',
            height: '80vh',
            position: 'relative',
            perspective: '2000px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '2rem 0 4rem 0',
            padding: '1rem',
            borderRadius: '20px'
          }}
        >
      {/* Section Title */}
      <div 
        style={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          textAlign: 'center'
        }}
      >
        <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow-2xl tracking-wide hover:scale-105 transition-transform duration-300">
          My <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
      </div>

      {/* Fixed Central Text - Dynamic Project Description */}
      <div 
        className="Center-Text"
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100,
          textAlign: 'center',
          maxWidth: '800px',
          pointerEvents: 'none'
        }}
      >
        <motion.h1 
          key={`title-${frontProjectIndex}`}
          className="Main-Title"
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '3px',
            lineHeight: '1.2',
            fontFamily: 'cursive'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {transformedProjects[frontProjectIndex]?.title || 'Loading...'}
        </motion.h1>
        <motion.p 
          key={`desc-${frontProjectIndex}`}
          className="Main-Description"
          style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            lineHeight: '1.6',
            fontWeight: '300',
            letterSpacing: '1px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {transformedProjects[frontProjectIndex]?.description || 'Loading project description...'}
        </motion.p>
        
        {/* Project Technologies */}
        <motion.div 
          key={`tech-${frontProjectIndex}`}
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {transformedProjects[frontProjectIndex]?.technologies?.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={techIndex}
              style={{
                background: 'rgba(96, 165, 250, 0.2)',
                color: '#60a5fa',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid rgba(96, 165, 250, 0.3)'
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3D Cylinder Container */}
      <div 
        className="Cylinder-Container"
        style={{
          position: 'relative',
          transform: `rotateY(${yRotation}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Project Panels */}
        {transformedProjects.slice(0, 6).map((project, index) => (
          <motion.div
            key={index}
            className="Panel"
            style={{
              position: 'absolute',
              width: '400px',
              height: '600px',
              ...getPanelTransform(index)
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div 
              className="Panel-Content"
              style={{
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Project Image */}
              <div 
                className="Panel-Image"
                style={{
                  position: 'relative',
                  height: '60%',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div 
                  className="Image-Overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '2rem'
                  }}
                >
                  <motion.div
                    className="Overlay-Content"
                    style={{ color: 'white' }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.9 }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      style={{
                        background: '#007bff',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'background 0.3s ease'
                      }}
                    >
                      View Project
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Project Details */}
              <div 
                className="Panel-Details"
                style={{
                  padding: '2rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h2 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem' }}>
                  {project.title}
                </h2>
                <p style={{ color: '#cccccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.5rem' }}>Key Features:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        style={{ 
                          color: '#cccccc', 
                          marginBottom: '0.25rem', 
                          position: 'relative', 
                          paddingLeft: '1rem' 
                        }}
                      >
                        <span style={{ color: '#007bff', position: 'absolute', left: 0 }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.5rem' }}>Technologies:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="Scroll-Indicator"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          textAlign: 'center',
          color: '#cccccc',
          transition: 'opacity 0.3s ease'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>
          Horizontal scroll or arrow keys to rotate
        </div>
        <div 
          style={{ 
            fontSize: '1.5rem',
            animation: 'bounce 2s infinite',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <span>←</span>
          <span>→</span>
        </div>
      </motion.div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .Panel-Content:hover .Image-Overlay {
          opacity: 1;
        }
        
        .Panel-Content:hover img {
          transform: scale(1.05);
        }
        
        .Panel-Content:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default ProjectCylinderScroll;
