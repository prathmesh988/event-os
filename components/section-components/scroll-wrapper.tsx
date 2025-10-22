"use client";

import { Element } from "react-scroll";
import { ReactNode } from "react";

interface ScrollElementProps {
  name: string;
  className?: string;
  children: ReactNode;
}

export function ScrollElement({
  name,
  className,
  children,
}: ScrollElementProps) {
  return (
    <Element name={name} className={className}>
      {children}
    </Element>
  );
}
