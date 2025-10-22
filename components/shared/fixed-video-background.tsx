"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FixedVideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Track scroll progress of the entire page
  const { scrollYProgress } = useScroll();

  // Create parallax effect: video moves slower than scroll
  // Adjust these values to control the parallax intensity

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.video
        ref={videoRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_1080p_1-5dkqZz1EBNE3L0TfRUOQYdqdKvop72.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
