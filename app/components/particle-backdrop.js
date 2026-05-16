"use client";

import { useEffect, useState } from "react";
import Particles from "react-particles";
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const particleOptions = {
  background: {
    color: "transparent",
  },
  fullScreen: {
    enable: false,
  },
  fpsLimit: 60,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.18,
        },
      },
    },
  },
  particles: {
    color: {
      value: ["#d6b37a", "#f4efe8", "#fff7ec"],
    },
    links: {
      color: "#d6b37a",
      distance: 145,
      enable: true,
      opacity: 0.08,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "top",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: 0.7,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 860,
      },
      value: 58,
    },
    opacity: {
      value: { min: 0.16, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.9,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1.4, max: 5.4 },
      animation: {
        enable: true,
        speed: 1.9,
        sync: false,
      },
    },
  },
  responsive: [
    {
      maxWidth: 820,
      options: {
        particles: {
          number: {
            value: 36,
          },
          links: {
            distance: 110,
            opacity: 0.06,
          },
          size: {
            value: { min: 1.1, max: 4.1 },
          },
        },
      },
    },
  ],
};

export default function ParticleBackdrop() {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let active = true;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };
    const subscribeToMotionPreference = mediaQuery.addEventListener
      ? () => mediaQuery.addEventListener("change", syncMotionPreference)
      : () => mediaQuery.addListener(syncMotionPreference);
    const unsubscribeFromMotionPreference = mediaQuery.removeEventListener
      ? () => mediaQuery.removeEventListener("change", syncMotionPreference)
      : () => mediaQuery.removeListener(syncMotionPreference);

    syncMotionPreference();

    loadSlim(tsParticles).then(() => {
      if (active) {
        setReady(true);
      }
    });

    subscribeToMotionPreference();

    return () => {
      active = false;
      unsubscribeFromMotionPreference();
    };
  }, []);

  return (
    <div className="particle-backdrop-shell" aria-hidden="true">
      <span className="particle-glow particle-glow--one" />
      <span className="particle-glow particle-glow--two" />
      <span className="particle-glow particle-glow--three" />
      {ready && !reducedMotion ? (
        <Particles
          id="ambient-particles"
          className="particle-backdrop"
          options={particleOptions}
        />
      ) : null}
    </div>
  );
}
