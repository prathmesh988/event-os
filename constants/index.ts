/**
 * Constants Index
 * Central export point for all application constants
 */

export * from "./theme";
export * from "./content";

// Re-export commonly used constants for convenience
export {
  spacing,
  responsiveSpacing,
  typography,
  buttonSizes,
  gaps,
  radius,
  shadows,
  containers,
  zIndex,
  iconSizes,
  theme,
} from "./theme";

export {
  siteInfo,
  navigation,
  hero,
  bookingHero,
  events,
  packages,
  booking,
  testimonials,
  gallery,
  contact,
  footer,
  seo,
  messages,
  tracking,
} from "./content";
