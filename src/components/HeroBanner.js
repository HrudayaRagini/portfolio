import React, { useEffect, useRef, useState } from 'react';
import VercelGlobe from './VercelGlobe';
import { personalInfo, animations } from '../data/portfolioData';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const heroRef = useRef(null);

  const floatingElements = [
    {
      id: 'phone',
      icon: '📞',
      color: 'blue',
      data: { type: 'contact', value: personalInfo.contact.phone, label: 'Phone Number' },
      delay: '0s',
      radius: '180px',
      duration: '15s',
      layer: 'foreground',
      startAngle: 0
    },
    {
      id: 'email',
      icon: '✉️',
      color: 'cyan',
      data: { type: 'contact', value: personalInfo.contact.email, label: 'Email Address' },
      delay: '0s',
      radius: '220px',
      duration: '18s',
      layer: 'background',
      startAngle: 72
    },
    {
      id: 'linkedin',
      icon: '💼',
      color: 'purple',
      data: { type: 'social', value: personalInfo.socialLinks.linkedin, label: 'LinkedIn Profile' },
      delay: '0s',
      radius: '160px',
      duration: '12s',
      layer: 'foreground',
      startAngle: 144
    },
    {
      id: 'github',
      icon: '🐙',
      color: 'green',
      data: { type: 'social', value: personalInfo.socialLinks.github, label: 'GitHub Profile' },
      delay: '0s',
      radius: '200px',
      duration: '16s',
      layer: 'background',
      startAngle: 216
    },
    {
      id: 'portfolio',
      icon: '🌐',
      color: 'orange',
      data: { type: 'social', value: personalInfo.socialLinks.portfolio, label: 'Portfolio Website' },
      delay: '0s',
      radius: '240px',
      duration: '20s',
      layer: 'foreground',
      startAngle: 288
    }
  ];

  const handleElementClick = (element) => {
    setSelectedData(element.data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedData(null);
  };

  const handleMouseEnter = (elementId) => {
    setHoveredElement(elementId);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const renderDataContent = (data) => {
    if (data.type === 'contact') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-400 mb-4">{data.label}</h3>
          <div className="text-lg text-white font-mono bg-gray-800/50 p-4 rounded-lg border border-blue-500/30">
            {data.value}
          </div>
          <p className="text-sm text-gray-400">
            Click to copy or use this information to get in touch.
          </p>
        </div>
      );
    }

    if (data.type === 'social') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-400 mb-4">{data.label}</h3>
          <div className="text-lg text-white font-mono bg-gray-800/50 p-4 rounded-lg border border-blue-500/30">
            {data.value}
          </div>
          <div className="mt-4">
            <a 
              href={data.value} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Visit {data.label}
            </a>
          </div>
        </div>
      );
    }

    return <div>No data available</div>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Centered Globe */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
          <VercelGlobe />
        </div>
      </div>

      {/* Orbital Elements - Distributed around Globe */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className={`absolute cursor-pointer group pointer-events-auto`}
              style={{
                animation: hoveredElement === element.id ? 'none' : `orbit-${element.id} ${element.duration} linear infinite`,
                animationDelay: element.delay,
                transform: `rotate(${element.startAngle}deg) translateX(${element.radius}) rotate(-${element.startAngle}deg)`,
                transformOrigin: `-${element.radius} 0`,
                zIndex: element.layer === 'foreground' ? 16 : 14
              }}
              onClick={() => handleElementClick(element)}
              onMouseEnter={() => handleMouseEnter(element.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${element.layer === 'foreground' ? 'w-12 h-12' : 'w-10 h-10'} bg-${element.color}-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-${element.color}-500/30 transition-all duration-300 hover:scale-110 hover:bg-${element.color}-500/30 hover:border-${element.color}-500/50 ${element.layer === 'foreground' ? 'shadow-lg' : ''}`}>
                <span className={`text-${element.color}-400 ${element.layer === 'foreground' ? 'text-lg' : 'text-sm'} group-hover:text-${element.color}-300 transition-colors`}>
                  {element.icon}
                </span>
              </div>
              <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-${element.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${element.layer === 'foreground' ? 'font-medium' : ''}`}>
                {element.id.charAt(0).toUpperCase() + element.id.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Left Profile Section */}
      <div ref={heroRef} className="absolute bottom-0 left-0 z-20 bg-transparent">
        <div className="relative h-full flex items-end p-8">
          {/* Profile Photo */}
          <div className={`relative z-30 group transition-all duration-1000 ${
            isVisible 
              ? 'animate__animated animate__fadeInLeft' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="profile-wrapper w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 transition-all duration-300 hover:border-blue-500 hover:scale-105 shadow-2xl">
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} Profile`} 
                className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className={`ml-6 mb-4 text-white transition-all duration-1000 ${
            isVisible 
              ? `animate__animated ${animations.hero.profile}` 
              : 'opacity-0 translate-x-8'
          }`}>
            <h1 className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible 
                ? `animate__animated ${animations.hero.name}` 
                : 'opacity-0 translate-y-8'
            }`}>
              {personalInfo.name}
            </h1>
            <h2 className={`text-xl font-normal mb-3 text-gray-300 transition-all duration-1000 ${
              isVisible 
                ? `animate__animated ${animations.hero.title}` 
                : 'opacity-0 translate-x-8'
            }`}>
              {personalInfo.title}
            </h2>
            <p className={`text-base leading-relaxed text-gray-400 max-w-md transition-all duration-1000 ${
              isVisible 
                ? `animate__animated ${animations.hero.description}` 
                : 'opacity-0 translate-y-8'
            }`}>
              {personalInfo.description}
            </p>
            
            {/* Contact Information */}
            <div className={`mt-6 space-y-2 transition-all duration-1000 ${
              isVisible 
                ? `animate__animated ${animations.hero.contact}` 
                : 'opacity-0 translate-y-8'
            }`}>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/95 border border-blue-500/30 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedData.label}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="text-gray-300">
                {renderDataContent(selectedData)}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HeroBanner;


