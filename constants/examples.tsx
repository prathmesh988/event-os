/**
 * EXAMPLE: Using Theme Constants
 * This file demonstrates how to use theme constants in components
 */

import { Button } from "@/components/shared/ui/button";
import {
  responsiveSpacing,
  typography,
  buttonSizes,
  gaps,
  components,
  containers,
  shadows,
  radius,
  iconSizes,
} from "@/constants";

/**
 * EXAMPLE 1: Section with Header
 */
export function ExampleSection() {
  return (
    <section className={responsiveSpacing.sectionY}>
      <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
        {/* Using pre-built section header component style */}
        <div className={components.sectionHeader.container}>
          <h2 className={components.sectionHeader.title}>Section Title</h2>
          <p className={components.sectionHeader.description}>
            This is a description that follows our design system
          </p>
        </div>

        {/* Content goes here */}
      </div>
    </section>
  );
}

/**
 * EXAMPLE 2: Card Component
 */
export function ExampleCard() {
  return (
    <div className={`${components.card.glass} ${responsiveSpacing.cardGap}`}>
      <h3 className={`${typography.heading.h3} ${typography.weight.bold}`}>
        Card Title
      </h3>
      <p className={typography.body.base}>
        Card description text that uses theme typography
      </p>
      <Button className={buttonSizes.sizes.md}>Action Button</Button>
    </div>
  );
}

/**
 * EXAMPLE 3: Button Group
 */
export function ExampleButtons() {
  return (
    <div className={`flex flex-col sm:flex-row ${gaps.responsive.lg}`}>
      {/* Primary CTA - Large */}
      <Button className={buttonSizes.sizes.xl}>Primary Action</Button>

      {/* Secondary - Medium */}
      <Button variant="outline" className={buttonSizes.sizes.md}>
        Secondary Action
      </Button>
    </div>
  );
}

/**
 * EXAMPLE 4: Grid Layout
 */
export function ExampleGrid() {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 ${gaps.grid.comfortable}`}>
      {/* Grid items */}
      {[1, 2, 3].map((item) => (
        <div key={item} className={`${radius["2xl"]} ${shadows.md} p-6`}>
          Grid Item {item}
        </div>
      ))}
    </div>
  );
}

/**
 * EXAMPLE 5: Responsive Typography
 */
export function ExampleTypography() {
  return (
    <div className={responsiveSpacing.contentGap}>
      {/* Display heading */}
      <h1 className={typography.display.xl}>Display Heading</h1>

      {/* Section heading */}
      <h2 className={`${typography.heading.h2} ${typography.weight.bold}`}>
        Section Heading
      </h2>

      {/* Body text with container */}
      <p className={`${typography.body.lg} ${containers.md} mx-auto`}>
        This is body text that has a maximum width for optimal readability and
        uses responsive sizing.
      </p>
    </div>
  );
}

/**
 * EXAMPLE 6: Icon with Text
 */
export function ExampleIconText({ icon: Icon }: { icon: any }) {
  return (
    <div className={`flex items-center ${gaps.element.normal}`}>
      <Icon className={iconSizes.responsive.md} />
      <span className={typography.body.base}>Icon with text</span>
    </div>
  );
}

/**
 * EXAMPLE 7: Hero Section
 */
export function ExampleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
        <div className={`${containers.xl} ${responsiveSpacing.blockGap}`}>
          {/* Hero heading */}
          <h1
            className={`${typography.display["2xl"]} ${typography.weight.bold} leading-tight`}
          >
            Hero Heading with Consistent Spacing
          </h1>

          {/* Subheading */}
          <p className={`${typography.body.xl} ${containers.lg} mx-auto`}>
            Hero description using theme constants
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center ${gaps.responsive.lg}`}
          >
            <Button className={buttonSizes.sizes.xl}>Get Started</Button>
            <Button variant="outline" className={buttonSizes.sizes.xl}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * EXAMPLE 8: Form with Proper Spacing
 */
export function ExampleForm() {
  return (
    <form className={responsiveSpacing.cardGap}>
      <div className={responsiveSpacing.contentGap}>
        <label
          className={`${typography.body.base} ${typography.weight.medium}`}
        >
          Label
        </label>
        <input
          type="text"
          className={`${components.input.base} w-full border ${radius.lg}`}
          placeholder="Input with theme sizing"
        />
      </div>

      <Button className={`${buttonSizes.sizes.lg} w-full`}>Submit</Button>
    </form>
  );
}

/**
 * QUICK REFERENCE GUIDE
 *
 * // Section spacing
 * className={responsiveSpacing.sectionY}
 *
 * // Container padding
 * className={responsiveSpacing.containerX}
 *
 * // Main heading
 * className={typography.heading.h1}
 *
 * // Large button (44px min height)
 * className={buttonSizes.sizes.lg}
 *
 * // Gap between elements
 * className={gaps.responsive.lg}
 *
 * // Card container
 * className={components.card.glass}
 *
 * // Content max width
 * className={containers.lg}
 *
 * // Icon size
 * className={iconSizes.responsive.md}
 */
