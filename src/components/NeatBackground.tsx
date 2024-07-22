"use client";

import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";
import { gradientConfig } from "@/lib/gradientConfig";

export const GradientComponent = () => {
  const gradientRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (gradientRef.current) {
      const neat = new NeatGradient({
        ref: gradientRef.current,
        ...gradientConfig,
      });

      // Change the config dynamically
      neat.speed = 6;

      // Cleanup on component unmount
      return () => {
        neat.destroy();
      };
    }
  }, []);

  return (
    <canvas
      id="gradient"
      ref={gradientRef}
      className="absolute inset-0 z-10 w-full min-h-screen animate-fade-in"
    />
  );
};
