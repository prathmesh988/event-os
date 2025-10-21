"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoBackgroundProps {
  show?: boolean;
  className?: string;
  videoUrl?: string;
}

export function VideoBackground({
  show = true,
  className = "",
  videoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_1080p_1-5dkqZz1EBNE3L0TfRUOQYdqdKvop72.mp4",
}: VideoBackgroundProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({ target: wrapRef });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  if (!show) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
    >
      <motion.video
        ref={videoRef}
        style={{ y }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* Soft overlay using theme token for readability */}
      <div className="absolute inset-0 bg-background/10" />
    </div>
  );
}

// Default export for standalone use (same behavior)
export default function VideoBackgroundDefault() {
  return <VideoBackground />;
}

// For sections that don't need video
export function FullScreenVideoBackground() {
  return null; // Remove the always-on video background
}
