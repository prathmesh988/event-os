"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoBackground() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Framer Motion scroll hook for parallax
  const { scrollYProgress } = useScroll({ target: wrapRef });
  // Map scroll progress to translateY for subtle parallax (range: -8% to 8%)
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // Respect reduced motion via CSS/OS preference in the browser: user can still opt-out

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <motion.video
        ref={videoRef}
        style={{ y }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full object-cover"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_1080p_1-5dkqZz1EBNE3L0TfRUOQYdqdKvop72.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* Soft overlay using theme token for readability */}
      <div className="absolute inset-0 bg-background/0" />
    </div>
  );
}
