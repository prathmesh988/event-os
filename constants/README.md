# Theme Constants Documentation

This folder contains all design tokens and styling constants for the Event Planner application. Using these constants ensures consistency across the entire application and makes future design changes easier.

## 📁 File Structure

```
constants/
├── theme.ts       # Main theme constants file
├── index.ts       # Export index
└── README.md      # This file
```

## 🎨 Usage Examples

### Basic Import

```typescript
import { spacing, typography, buttonSizes } from "@/constants";
```

### Using Spacing

```tsx
// Instead of hardcoding:
<div className="py-20 px-4 gap-6">

// Use constants:
import { responsiveSpacing, gaps } from "@/constants";
<div className={`${responsiveSpacing.sectionY} ${responsiveSpacing.containerX} ${gaps.responsive.lg}`}>
```

### Using Typography

```tsx
// Instead of:
<h1 className="text-4xl md:text-6xl font-bold">

// Use constants:
import { typography } from "@/constants";
<h1 className={`${typography.heading.h1} ${typography.weight.bold}`}>
```

### Using Button Sizes

```tsx
// Instead of:
<Button className="min-h-[44px] px-8 py-3">

// Use constants:
import { buttonSizes } from "@/constants";
<Button className={buttonSizes.sizes.lg}>
```

### Using Complete Component Styles

```tsx
import { components } from "@/constants";

// Section header
<div className={components.sectionHeader.container}>
  <h2 className={components.sectionHeader.title}>Title</h2>
  <p className={components.sectionHeader.description}>Description</p>
</div>

// Card
<div className={components.card.glass}>
  Card content
</div>
```

## 📏 Design System

### Spacing Scale (8px Grid)

- `xs`: 4px - Tight spacing
- `sm`: 8px - Small gaps
- `md`: 16px - Standard spacing
- `lg`: 24px - Large gaps
- `xl`: 32px - Extra large
- `2xl`: 48px - Major sections
- `3xl`: 64px - Hero sections
- `4xl`: 96px - Page sections
- `5xl`: 128px - Maximum spacing

### Touch Targets (Accessibility)

All interactive elements follow iOS/Android guidelines:

- **Minimum**: 44px × 44px
- **Comfortable**: 48px × 48px
- **Large**: 56px × 56px (for CTAs)
- **XL**: 64px × 64px (for emphasis)

### Typography Hierarchy

1. **Display**: Hero headings (2xl → sm)
2. **Heading**: Section headings (h1 → h5)
3. **Body**: Content text (xl → xs)

### Responsive Breakpoints

Following Tailwind defaults:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔄 Making Global Changes

### Example: Increase all section spacing

```typescript
// In theme.ts, change:
export const responsiveSpacing = {
  sectionY: "py-16 md:py-24 lg:py-32", // Current
  // To:
  sectionY: "py-20 md:py-28 lg:py-36", // New
};
```

This will automatically update all sections using this constant!

### Example: Change button minimum height

```typescript
// In theme.ts, change:
export const buttonSizes = {
  touchTarget: {
    minimum: "min-h-[44px]", // Current
    // To:
    minimum: "min-h-[48px]", // New (more comfortable)
  },
};
```

## 🎯 Best Practices

### ✅ DO

- Use constants for all repeated values
- Import only what you need
- Combine constants with custom classes if needed
- Use responsive variants when available

### ❌ DON'T

- Hardcode spacing values
- Create inconsistent custom spacing
- Override constant values inline
- Mix px values with constants

## 🧪 Testing Changes

When modifying theme constants:

1. **Start dev server**: `pnpm dev`
2. **Check all pages**: Navigate through the app
3. **Test responsive**: Check mobile, tablet, desktop
4. **Verify touch targets**: Use browser dev tools
5. **Check accessibility**: Test with screen readers

## 📊 Constants Reference

### Most Used Constants

```typescript
// Spacing
responsiveSpacing.sectionY; // Section vertical padding
responsiveSpacing.containerX; // Container horizontal padding
responsiveSpacing.headerMargin; // Header bottom margin

// Typography
typography.heading.h1; // Main page heading
typography.heading.h2; // Section heading
typography.body.base; // Standard body text

// Buttons
buttonSizes.sizes.lg; // Large button (44px min)
buttonSizes.sizes.xl; // Extra large button (56px min)

// Layout
gaps.responsive.lg; // Gap between elements
containers.lg; // Content max-width
```

## 🔗 Integration with Existing Code

To migrate existing components:

1. Identify repeated values
2. Find corresponding constant
3. Replace hardcoded value with constant
4. Test component behavior
5. Commit changes

### Migration Example

**Before:**

```tsx
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">Title</h2>
  </div>
</section>
```

**After:**

```tsx
import { responsiveSpacing, typography, components } from "@/constants";

<section className={responsiveSpacing.sectionY}>
  <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
    <h2
      className={`${typography.heading.h1} ${typography.weight.bold} ${responsiveSpacing.headerMargin}`}
    >
      Title
    </h2>
  </div>
</section>;
```

## 🚀 Future Improvements

Potential additions to theme system:

- Color palette constants (once finalized)
- Animation presets
- Breakpoint utilities
- Dark mode variants
- Component variants library

## 📝 Contributing

When adding new constants:

1. Follow existing naming conventions
2. Add JSDoc comments
3. Include usage examples
4. Update this README
5. Test with existing components

## 🐛 Troubleshooting

### Constants not updating?

- Restart dev server
- Clear `.next` cache
- Check import paths

### TypeScript errors?

- Ensure constants are properly typed
- Use `as const` for literal types
- Import types when needed

### Tailwind not applying?

- Constants must use valid Tailwind classes
- Check `tailwind.config.ts` for custom values
- Ensure purge/content paths include constants folder
