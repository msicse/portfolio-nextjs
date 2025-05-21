"use client";

import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from 'next-themes';

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // You can add custom functionality once particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: {
          enable: false
        },
        background: {
          color: {
            value: "transparent"
          }
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: isDark ? "#6366F1" : "#4F46E5"
          },
          links: {
            color: isDark ? "#6366F1" : "#4F46E5",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 70
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
}