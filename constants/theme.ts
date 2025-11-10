/**
 * Theme Constants
 * Central location for all design tokens, spacing, and styling constants
 * Following iOS/Android UI/UX guidelines with minimum 44pt touch targets
 */

/**
 * SPACING SYSTEM
 * Based on 8px grid system for consistent rhythm
 */
export const spacing = {
  // Extra Small (4px increments)
  xs: "1", // 4px - Tight spacing for inline elements
  sm: "2", // 8px - Small gaps between related items

  // Medium (12-16px) - Most common spacing
  md: "4", // 16px - Standard spacing between elements

  // Large (20-32px) - Section spacing
  lg: "6", // 24px - Large gaps between sections
  xl: "8", // 32px - Extra large section spacing

  // 2X Large (48-64px) - Major section dividers
  "2xl": "12", // 48px - Major section spacing
  "3xl": "16", // 64px - Hero/major divisions

  // 3X Large (96-128px) - Page level spacing
  "4xl": "24", // 96px - Large page sections
  "5xl": "32", // 128px - Maximum page spacing
} as const;

/**
 * RESPONSIVE SPACING
 * Mobile-first responsive spacing patterns
 */
export const responsiveSpacing = {
  // Section vertical padding
  sectionY: "py-16 md:py-24 lg:py-32",

  // Container horizontal padding
  containerX: "px-4 md:px-6 lg:px-8",

  // Content spacing (between title and description)
  contentGap: "space-y-4 md:space-y-6",

  // Card/Component spacing
  cardGap: "space-y-6 md:space-y-8",

  // Large content blocks
  blockGap: "space-y-8 md:space-y-12",

  // Section header margin bottom
  headerMargin: "mb-12 md:mb-16",
} as const;

/**
 * TYPOGRAPHY SCALE
 * Responsive font sizes following modular scale
 */
export const typography = {
  // Display sizes (Hero headings)
  display: {
    "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl", // Hero main
    xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl", // Hero secondary
    lg: "text-3xl md:text-4xl lg:text-5xl", // Section hero
    md: "text-2xl md:text-3xl lg:text-4xl", // Sub-section hero
    sm: "text-xl md:text-2xl lg:text-3xl", // Component heading
  },

  // Heading sizes
  heading: {
    h1: "text-3xl md:text-4xl lg:text-5xl", // Main page heading
    h2: "text-2xl md:text-3xl lg:text-4xl", // Section heading
    h3: "text-xl md:text-2xl lg:text-3xl", // Sub-section heading
    h4: "text-lg md:text-xl lg:text-2xl", // Card heading
    h5: "text-base md:text-lg lg:text-xl", // Small heading
  },

  // Body text
  body: {
    xl: "text-lg md:text-xl lg:text-2xl", // Large body
    lg: "text-base md:text-lg lg:text-xl", // Medium-large body
    base: "text-base md:text-lg", // Standard body
    sm: "text-sm md:text-base", // Small body
    xs: "text-xs md:text-sm", // Extra small text
  },

  // Weight
  weight: {
    light: "font-light", // 300
    normal: "font-normal", // 400
    medium: "font-medium", // 500
    semibold: "font-semibold", // 600
    bold: "font-bold", // 700
    black: "font-black", // 900
  },
} as const;

/**
 * BUTTON SIZES
 * Following accessibility guidelines (min 44pt touch target)
 */
export const buttonSizes = {
  // Touch target sizes
  touchTarget: {
    minimum: "min-h-[44px]", // iOS/Android minimum
    comfortable: "min-h-[48px]", // Comfortable touch
    large: "min-h-[56px]", // Premium/CTA buttons
    xl: "min-h-[64px]", // Extra large emphasis
  },

  // Button padding combinations
  padding: {
    sm: "px-4 py-2", // Small button
    md: "px-6 py-2.5", // Medium button (44px min)
    lg: "px-8 py-3", // Large button
    xl: "px-8 md:px-12 py-4 md:py-6", // Extra large (responsive)
  },

  // Complete button size classes
  sizes: {
    sm: "min-h-[44px] px-4 py-2 text-sm md:text-base",
    md: "min-h-[44px] px-6 py-2.5 text-base md:text-lg",
    lg: "min-h-[44px] px-8 py-3 text-base md:text-lg",
    xl: "min-h-[56px] px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl",
  },
} as const;

/**
 * GAP SIZES
 * Spacing between elements/components
 */
export const gaps = {
  // Element gaps (buttons, chips, tags)
  element: {
    tight: "gap-2", // 8px
    normal: "gap-3", // 12px
    comfortable: "gap-4", // 16px
    spacious: "gap-6", // 24px
  },

  // Responsive element gaps
  responsive: {
    sm: "gap-2 md:gap-3",
    md: "gap-3 md:gap-4",
    lg: "gap-4 md:gap-6",
    xl: "gap-6 md:gap-8",
  },

  // Grid gaps
  grid: {
    tight: "gap-4",
    normal: "gap-6",
    comfortable: "gap-6 md:gap-8",
    spacious: "gap-8 md:gap-12",
  },
} as const;

/**
 * BORDER RADIUS
 * Rounded corner sizes
 */
export const radius = {
  none: "rounded-none",
  sm: "rounded-sm", // 2px
  base: "rounded", // 4px
  md: "rounded-md", // 6px
  lg: "rounded-lg", // 8px
  xl: "rounded-xl", // 12px
  "2xl": "rounded-2xl", // 16px
  "3xl": "rounded-3xl", // 24px
  full: "rounded-full", // Circle/pill
} as const;

/**
 * SHADOW DEPTHS
 * Elevation system for visual hierarchy
 */
export const shadows = {
  none: "shadow-none",
  sm: "shadow-sm", // Subtle depth
  base: "shadow", // Standard elevation
  md: "shadow-md", // Lifted element
  lg: "shadow-lg", // Prominent element
  xl: "shadow-xl", // High emphasis
  "2xl": "shadow-2xl", // Maximum depth

  // Special shadows
  inner: "shadow-inner", // Inset depth

  // Colored shadows (for glass morphism/premium effects)
  glow: {
    primary: "shadow-lg shadow-primary/20",
    pink: "shadow-2xl shadow-pink-500/30",
    purple: "shadow-xl shadow-purple-500/20",
  },
} as const;

/**
 * CONTAINER CONSTRAINTS
 * Max widths for content areas
 */
export const containers = {
  sm: "max-w-2xl", // 672px - Narrow content
  md: "max-w-3xl", // 768px - Standard prose
  lg: "max-w-4xl", // 896px - Wide content
  xl: "max-w-5xl", // 1024px - Extra wide
  "2xl": "max-w-6xl", // 1152px - Full width content
  "3xl": "max-w-7xl", // 1280px - Maximum content
  full: "max-w-full", // No constraint
} as const;

/**
 * Z-INDEX LAYERS
 * Stacking order for elements
 */
export const zIndex = {
  background: "z-0", // Background elements (video, images)
  content: "z-10", // Main content layer
  dropdown: "z-20", // Dropdown menus
  sticky: "z-30", // Sticky elements
  overlay: "z-40", // Modal overlays
  navigation: "z-50", // Navigation bar
  modal: "z-50", // Modals and dialogs
  popover: "z-50", // Popovers and tooltips
  toast: "z-50", // Toast notifications
} as const;

/**
 * ICON SIZES
 * Standard icon dimensions
 */
export const iconSizes = {
  xs: "w-3 h-3", // 12px
  sm: "w-4 h-4", // 16px
  base: "w-5 h-5", // 20px
  md: "w-6 h-6", // 24px
  lg: "w-7 h-7", // 28px
  xl: "w-8 h-8", // 32px
  "2xl": "w-10 h-10", // 40px
  "3xl": "w-12 h-12", // 48px

  // Responsive icon sizes
  responsive: {
    sm: "w-4 h-4 md:w-5 md:h-5",
    md: "w-5 h-5 md:w-6 md:h-6",
    lg: "w-6 h-6 md:w-7 md:h-7",
    xl: "w-7 h-7 md:w-8 md:h-8",
    "2xl": "w-10 h-10 md:w-12 md:h-12",
  },
} as const;

/**
 * ANIMATION DURATIONS
 * Standard timing for transitions
 */
export const durations = {
  fastest: "duration-75", // 75ms - Instant feedback
  fast: "duration-150", // 150ms - Quick transitions
  base: "duration-200", // 200ms - Standard
  medium: "duration-300", // 300ms - Smooth animations
  slow: "duration-500", // 500ms - Deliberate animations
  slowest: "duration-700", // 700ms - Emphasis animations
} as const;

/**
 * TRANSITION EFFECTS
 * Common transition patterns
 */
export const transitions = {
  all: "transition-all",
  colors: "transition-colors",
  opacity: "transition-opacity",
  transform: "transition-transform",

  // Combined transitions
  smooth: "transition-all duration-300 ease-out",
  fast: "transition-all duration-150 ease-out",
  slow: "transition-all duration-500 ease-out",
} as const;

/**
 * BACKDROP BLUR
 * Glass morphism effects
 */
export const backdropBlur = {
  none: "backdrop-blur-none",
  sm: "backdrop-blur-sm", // Subtle blur
  base: "backdrop-blur", // Standard blur
  md: "backdrop-blur-md", // Medium blur
  lg: "backdrop-blur-lg", // Strong blur
  xl: "backdrop-blur-xl", // Maximum blur
} as const;

/**
 * ASPECT RATIOS
 * Common media aspect ratios
 */
export const aspectRatios = {
  square: "aspect-square", // 1:1
  video: "aspect-video", // 16:9
  portrait: "aspect-[3/4]", // 3:4
  landscape: "aspect-[4/3]", // 4:3
  wide: "aspect-[21/9]", // Ultra wide
} as const;

/**
 * GRID COLUMNS
 * Responsive grid layouts
 */
export const gridCols = {
  single: "grid-cols-1",
  double: "grid-cols-1 md:grid-cols-2",
  triple: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  quad: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",

  // Custom breakpoints
  responsive: {
    "2-3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "2-4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    "3-6": "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
  },
} as const;

/**
 * OPACITY LEVELS
 * Standard opacity values
 */
export const opacity = {
  0: "opacity-0",
  5: "opacity-5",
  10: "opacity-10",
  20: "opacity-20",
  30: "opacity-30",
  40: "opacity-40",
  50: "opacity-50",
  60: "opacity-60",
  70: "opacity-70",
  80: "opacity-80",
  90: "opacity-90",
  95: "opacity-95",
  100: "opacity-100",
} as const;

/**
 * GLASS EFFECT
 * Pre-configured glass morphism styles
 */
export const glassEffect = {
  light: "backdrop-blur-md bg-white/10 border border-white/20",
  medium: "backdrop-blur-lg bg-white/20 border border-white/30",
  strong: "backdrop-blur-xl bg-white/30 border border-white/40",

  // Dark variants
  dark: {
    light: "backdrop-blur-md bg-black/10 border border-black/20",
    medium: "backdrop-blur-lg bg-black/20 border border-black/30",
    strong: "backdrop-blur-xl bg-black/30 border border-black/40",
  },
} as const;

/**
 * COMMON COMPONENT STYLES
 * Reusable component styling patterns
 */
export const components = {
  // Card styles
  card: {
    base: `${radius["2xl"]} ${shadows.md} p-6 md:p-8`,
    glass: `${glassEffect.medium} ${radius["2xl"]} p-6 md:p-8`,
    bordered: `${radius["2xl"]} border p-6 md:p-8`,
  },

  // Input styles
  input: {
    base: `${buttonSizes.touchTarget.minimum} ${radius.lg} px-4 py-2.5`,
    large: `${buttonSizes.touchTarget.comfortable} ${radius.lg} px-4 py-3`,
  },

  // Section header
  sectionHeader: {
    container: `text-center ${responsiveSpacing.headerMargin} ${responsiveSpacing.contentGap}`,
    title: `${typography.heading.h1} ${typography.weight.bold}`,
    description: `${typography.body.lg} text-foreground/80 ${containers.md} mx-auto`,
  },
} as const;

/**
 * EXPORT ALL THEME CONSTANTS
 */
export const theme = {
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
  durations,
  transitions,
  backdropBlur,
  aspectRatios,
  gridCols,
  opacity,
  glassEffect,
  components,
} as const;

// Type exports for TypeScript autocomplete
export type Spacing = keyof typeof spacing;
export type Typography = typeof typography;
export type ButtonSize = keyof typeof buttonSizes.sizes;
export type Radius = keyof typeof radius;
export type Shadow = keyof typeof shadows;
export type Container = keyof typeof containers;
export type ZIndex = keyof typeof zIndex;
