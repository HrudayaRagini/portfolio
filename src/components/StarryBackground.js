import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarryBackground() {
  const particlesInit = async (engine) => {
    // loads the slim version → smaller bundle
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        backgroundColor: "transparent",
      }}
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 3 },
            repulse: { distance: 150, duration: 0.6 },
          },
        },
        particles: {
          color: { value: ["#3b82f6", "#06b6d4", "#ffffff", "#8b5cf6", "#a855f7"] },
          move: { 
            enable: true, 
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: true,
              rotateX: 800,
              rotateY: 1600
            }
          },
          number: { value: 100, density: { enable: true, area: 400 } },
          opacity: { value: { min: 0.8, max: 1.0 }, random: true },
          shape: { 
            type: ["circle"],
          },
          size: { value: { min: 1, max: 3 }, random: true },
          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.08,
              opacity: 1
            }
          },
          life: {
            count: 0,
            delay: {
              value: 0,
              sync: false
            },
            duration: {
              value: 0,
              sync: false
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
}
