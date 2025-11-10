"use client";

import React from "react";
import { components as themeComponents } from "@/constants";
import { useAdminStore } from "@/store/admin-store";

type Props = {
  sectionKey: string;
  titleFallback?: string;
  descFallback?: string;
};

export function SectionHeader({
  sectionKey,
  titleFallback,
  descFallback,
}: Props) {
  const section = useAdminStore((s) => s.sections[sectionKey] ?? undefined);

  const title = (section?.title && section.title.trim()) || titleFallback || "";
  const description =
    (section?.description && section.description.trim()) || descFallback || "";

  return (
    <>
      <h2 className={themeComponents.sectionHeader.title}>{title}</h2>
      <p className={themeComponents.sectionHeader.description}>{description}</p>
    </>
  );
}

export default SectionHeader;
