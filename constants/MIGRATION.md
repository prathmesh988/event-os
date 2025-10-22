# Theme Constants Migration Guide

Quick guide to migrate existing components to use theme constants.

## 🔄 Common Replacements

### Spacing

| Before      | After                               | Import              |
| ----------- | ----------------------------------- | ------------------- |
| `py-20`     | `${responsiveSpacing.sectionY}`     | `responsiveSpacing` |
| `px-4`      | `${responsiveSpacing.containerX}`   | `responsiveSpacing` |
| `mb-12`     | `${responsiveSpacing.headerMargin}` | `responsiveSpacing` |
| `gap-6`     | `${gaps.responsive.lg}`             | `gaps`              |
| `space-y-4` | `${responsiveSpacing.contentGap}`   | `responsiveSpacing` |

### Typography

| Before                           | After                                                | Import       |
| -------------------------------- | ---------------------------------------------------- | ------------ |
| `text-4xl md:text-5xl font-bold` | `${typography.heading.h1} ${typography.weight.bold}` | `typography` |
| `text-xl md:text-2xl`            | `${typography.heading.h3}`                           | `typography` |
| `text-lg md:text-xl`             | `${typography.body.lg}`                              | `typography` |

### Buttons

| Before                    | After                     | Import        |
| ------------------------- | ------------------------- | ------------- |
| `min-h-[44px] px-8 py-3`  | `${buttonSizes.sizes.lg}` | `buttonSizes` |
| `min-h-[56px] px-12 py-6` | `${buttonSizes.sizes.xl}` | `buttonSizes` |

### Icons

| Before                  | After                        | Import      |
| ----------------------- | ---------------------------- | ----------- |
| `w-6 h-6`               | `${iconSizes.md}`            | `iconSizes` |
| `w-5 h-5 md:w-6 md:h-6` | `${iconSizes.responsive.md}` | `iconSizes` |

## 📝 Step-by-Step Migration

### Step 1: Add Import

```tsx
import {
  responsiveSpacing,
  typography,
  buttonSizes,
  gaps,
  components,
} from "@/constants";
```

### Step 2: Replace Hardcoded Values

**Before:**

```tsx
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">
```

**After:**

```tsx
<section className={responsiveSpacing.sectionY}>
  <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
    <h2 className={`${typography.heading.h1} ${typography.weight.bold} ${responsiveSpacing.headerMargin}`}>
```

### Step 3: Use Component Presets (Optional)

**Even Better:**

```tsx
<section className={responsiveSpacing.sectionY}>
  <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
    <div className={components.sectionHeader.container}>
      <h2 className={components.sectionHeader.title}>
```

## 🎯 Priority Migration Order

1. **High Priority** (Most repeated):

   - Section padding (`py-20` → `responsiveSpacing.sectionY`)
   - Container padding (`px-4` → `responsiveSpacing.containerX`)
   - Button sizes (`min-h-[44px]` → `buttonSizes.sizes.lg`)
   - Header margins (`mb-12` → `responsiveSpacing.headerMargin`)

2. **Medium Priority**:

   - Typography scales
   - Gap spacing between elements
   - Icon sizes

3. **Low Priority** (Can wait):
   - One-off custom spacing
   - Special case styles

## 🧪 Testing After Migration

```bash
# Run dev server
pnpm dev

# Check for:
✅ Visual appearance matches before
✅ Responsive behavior works
✅ Touch targets are correct size
✅ No layout shifts
✅ Animations still smooth
```

## 🚫 Common Mistakes

### ❌ Don't Mix Styles

```tsx
// Bad - mixing constants with hardcoded values
<div className={`${responsiveSpacing.sectionY} mt-5`}>
```

```tsx
// Good - use constants consistently
<div className={`${responsiveSpacing.sectionY} ${spacing.md}`}>
```

### ❌ Don't Override Constants

```tsx
// Bad - overriding constant values
<Button className={`${buttonSizes.sizes.lg} min-h-[48px]`}>
```

```tsx
// Good - use appropriate constant
<Button className={buttonSizes.sizes.xl}>
```

## 📊 Migration Checklist

- [ ] Import theme constants
- [ ] Replace section padding
- [ ] Replace container padding
- [ ] Replace button sizes
- [ ] Replace typography
- [ ] Replace gaps/spacing
- [ ] Replace icon sizes
- [ ] Test component visually
- [ ] Test responsive behavior
- [ ] Test touch targets
- [ ] Remove unused classes
- [ ] Update component tests (if any)

## 💡 Tips

1. **Use Search & Replace carefully**: Pattern match before bulk replacing
2. **Test incrementally**: Migrate one component at a time
3. **Keep commit history**: Commit after each component migration
4. **Document exceptions**: If you can't use constants, add a comment why
5. **Update gradually**: No need to migrate everything at once

## 📞 Need Help?

If you encounter issues:

1. Check `constants/examples.tsx` for usage patterns
2. Review `constants/README.md` for documentation
3. Compare with migrated components
4. Test in isolation first
