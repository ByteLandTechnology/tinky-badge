/**
 * @packageDocumentation
 *
 * @module tinky-badge
 *
 * @description
 * A React-like library for building CLI applications with badge components.
 * This package provides themed, customizable badge components for terminal UIs,
 * built on top of the tinky framework and tinky-theme styling system.
 *
 * The Badge component renders colored labels with automatic text transformation,
 * making it ideal for displaying status indicators, labels, and tags in terminal
 * applications.
 *
 * @example
 * ```tsx
 * import { Badge } from "tinky-badge";
 *
 * <Badge color="green">Success</Badge>
 * <Badge color="red">Error</Badge>
 * <Badge color="blue">Info</Badge>
 * ```
 *
 * @remarks
 * The package uses the tinky-theme system for consistent styling and supports
 * customizable colors, automatic text uppercase transformation for string content,
 * and high-contrast label rendering.
 *
 * @license MIT
 */

/**
 * Badge component for rendering labeled badges in terminal UIs.
 *
 * @remarks
 * This is the main component export, providing a colored badge
 * with automatic text transformation and theme-based styling.
 *
 * @see {@link BadgeProps} for component props
 * @see {@link BadgeTheme} for theme configuration
 */
export { Badge, type BadgeProps } from "./components/Badge.js";

/**
 * Badge theme configuration for customizing component appearance.
 *
 * @remarks
 * The theme provides style functions for the container and label elements,
 * allowing customization of colors, spacing, and other visual properties.
 *
 * @see {@link badgeTheme} for the default theme configuration
 * @see {@link BadgeTheme} for the theme type definition
 */
export {
  /** Default theme configuration for Badge components. */
  badgeTheme,
  /** Type definition for the Badge theme configuration. */
  type BadgeTheme,
} from "./themes/badge-theme.js";
