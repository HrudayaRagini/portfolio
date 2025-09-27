import React, { useEffect, useRef, useState } from 'react';
import { education, skills, experience, certifications, animations, skillColors } from '../data/portfolioData';

const Sections = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all section elements
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to render skill category
  const renderSkillCategory = (category) => {
    const colors = skillColors[category.color];
    return (
      <div className="p-3 sm:p-4 md:p-5 bg-black/30 rounded-xl sm:rounded-2xl backdrop-blur-sm shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 ${colors.text} text-center drop-shadow-lg`}>{category.title}</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {category.items.map((item, index) => (
            <span key={index} className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 ${colors.bg} border ${colors.border} rounded-full text-xs sm:text-sm ${colors.text} font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:brightness-110`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const sections = {
    education: {
      title: education.title,
      icon: education.icon,
      content: (
        <div className="space-y-4 sm:space-y-5 flex justify-center">
          {education.items.map((item, index) => (
            <div key={index} className="p-3 sm:p-4 md:p-6 bg-black/30 rounded-xl sm:rounded-2xl border-l-4 sm:border-l-6 border-blue-500 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-blue-500/30 w-full max-w-4xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">{item.degree}</h3>
              <p className="text-lg sm:text-xl text-blue-400 mb-2 sm:mb-3 font-semibold">{item.institution}</p>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 font-medium">{item.location} | {item.date}</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      )
    },
    skills: {
      title: skills.title,
      icon: skills.icon,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {skills.categories.map((category, index) => (
            <div key={index}>
              {renderSkillCategory(category)}
            </div>
          ))}
        </div>
      )
    },
    experience: {
      title: experience.title,
      icon: experience.icon,
      content: (
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {experience.items.map((item, index) => (
            <div key={index} className="p-4 sm:p-6 md:p-8 bg-black/30 rounded-xl sm:rounded-2xl border-l-4 sm:border-l-6 border-cyan-500 backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-cyan-500/30">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">{item.position}</h3>
              <p className="text-lg sm:text-xl text-cyan-400 mb-2 sm:mb-3 font-semibold">{item.company}</p>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 font-medium">{item.duration}</p>
              <ul className="space-y-3 sm:space-y-4 text-gray-300">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start text-sm sm:text-base md:text-lg">
                    <span className="text-cyan-400 mr-3 sm:mr-4 mt-1 text-lg sm:text-xl">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    achievements: {
      title: certifications.title,
      icon: certifications.icon,
      content: (
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {certifications.items.map((cert, index) => (
            <div key={index} className="p-4 sm:p-6 md:p-8 bg-black/30 rounded-xl sm:rounded-2xl border-l-4 sm:border-l-6 border-red-500 backdrop-blur-sm shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-red-500/30">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">{cert.name}</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">{cert.description}</p>
              <p className="text-red-400 font-semibold text-sm sm:text-base">{cert.provider}</p>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <div className="sections-container py-4 sm:py-5 px-4 sm:px-6 md:px-8">
      {Object.entries(sections).map(([key, section], index) => {
        const animationClass = animations.sections[index] || 'animate__fadeInUp';
        const isVisible = visibleSections.has(key);
        
        return (
          <div 
            key={key} 
            id={key}
            ref={(el) => (sectionRefs.current[key] = el)}
            className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible 
                ? `animate__animated ${animationClass}` 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              animationDuration: '1s',
              animationFillMode: 'both'
            }}
          >
            {/* Decorative Section Divider */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              <div className="mx-4 sm:mx-6 md:mx-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            </div>
            
            {/* Section Header with Decorative Elements */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
              </div>
              
              {/* Icon with Enhanced Styling */}
              <div className="relative z-10 p-2 sm:p-3 md:p-4 bg-black/20 rounded-full border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl filter brightness-110 hover:scale-110 transition-transform duration-300">{section.icon}</span>
              </div>
              
              {/* Title with Enhanced Typography */}
              <h2 className="relative z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow-2xl tracking-wide hover:scale-105 transition-transform duration-300">
                {section.title}
              </h2>
            </div>
            
            {/* Section Content with Decorative Container */}
            <div className={`masked-section ${key} relative`}>
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 rounded-2xl sm:rounded-3xl blur-sm"></div>
              
              {/* Content Container */}
              <div className="relative section-content max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
                <div className="bg-black/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  {section.content}
                </div>
              </div>
            </div>
            
            {/* Bottom Decorative Element */}
            <div className="flex items-center justify-center mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;



