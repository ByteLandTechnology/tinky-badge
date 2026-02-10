/**
 * @fileoverview Badge component theme configuration for tinky-badge.
 *
 * @module themes/badge-theme
 *
 * This module provides the theme configuration for the Badge component,
 * including style functions for the container, label, and other visual elements.
 * The theme is designed to work with the tinky-theme system and provides
 * a consistent, customizable appearance for badges in terminal UIs.
 *
 * The theme supports:
 * - Dynamic background colors based on the badge color prop
 * - Consistent label styling with black text for readability
 * - Flexible style overrides through the tinky-theme system
 *
 * @example
 * ```tsx
 * import { useComponentTheme } from "tinky-theme";
 * import { badgeTheme } from "./themes/badge-theme";
 *
 * function MyBadge() {
 *   const { styles } = useComponentTheme("Badge", badgeTheme, { color: "green" });
 *   return <Box {...styles.container}>Badge Content</Box>;
 * }
 * ```
 *
 * @see {@link https://github.com/ByteLandTechnology/tinky-theme|tinky-theme}
 */

import { type TextProps } from "tinky";
import { type ComponentTheme } from "tinky-theme";
import type { BadgeProps } from "../components/Badge.js";

/**
 * Badge theme configuration object.
 *
 * Defines the complete theme configuration for the Badge component,
 * including all style functions for container, label, and other elements.
 * The theme uses the ComponentTheme type from tinky-theme for type safety
 * and compatibility with the theme system.
 *
 * @property {object} styles - Collection of style functions for different badge elements
 * @property {Function} styles.container - Style function for the badge container
 * @property {Function} styles.label - Style function for the badge label text
 *
 * @example
 * ```ts
 * // Accessing container styles
 * const containerStyles = badgeTheme.styles.container({ color: "blue" });
 * // Returns: { backgroundColor: "blue" }
 *
 * // Accessing label styles
 * const labelStyles = badgeTheme.styles.label();
 * // Returns: { color: "black" }
 * ```
 */
export const badgeTheme = {
  styles: {
    /**
     * Style function for the badge container element.
     *
     * @param {Pick<TextProps, 'color'>} params - Style parameters extracted from component props
     * @param {string} params.color - The color to use for the badge background
     * @returns {TextProps} TextProps object with backgroundColor set to the specified color
     *
     * Generates the container styles for a badge based on the color prop.
     * The background color is set dynamically based on the color parameter,
     * allowing for flexible theming and color customization.
     *
     * @example
     * ```ts
     * const styles = badgeTheme.styles.container({ color: "green" });
     * // Returns: { backgroundColor: "green" }
     *
     * const blueStyles = badgeTheme.styles.container({ color: "blue" });
     * // Returns: { backgroundColor: "blue" }
     * ```
     */
    container: ({ color }: Pick<TextProps, "color">): TextProps => ({
      backgroundColor: color,
    }),

    /**
     * Style function for the badge label text element.
     *
     * @returns {TextProps} TextProps object with color set to "black"
     *
     * Generates the label styles for a badge. The label text is always
     * rendered in black to ensure high contrast and readability
     * against the colored badge background.
     *
     * This consistent styling ensures that badges remain legible
     * regardless of the background color chosen.
     *
     * @example
     * ```ts
     * const styles = badgeTheme.styles.label();
     * // Returns: { color: "black" }
     *
     * // Usage in component:
     * <Text {...styles}>Badge Label</Text>
     * ```
     */
    label: (): TextProps => ({
      color: "black",
    }),
  },
} satisfies ComponentTheme<BadgeProps>;

/**
 * Type definition for the Badge theme configuration.
 *
 * Inferred type of the badgeTheme configuration object.
 * Provides type safety when working with the theme and ensures
 * compatibility with the tinky-theme system.
 *
 * This type can be used when extending or customizing the theme,
 * ensuring that all required style functions and properties are present.
 *
 * @example
 * ```ts
 * import { type BadgeTheme } from "./themes/badge-theme";
 *
 * // Extending the theme
 * const customTheme: BadgeTheme = {
 *   ...badgeTheme,
 *   styles: {
 *     ...badgeTheme.styles,
 *     container: ({ color }) => ({
 *       backgroundColor: color,
 *       padding: 1,
 *     }),
 *   },
 * };
 * ```
 */
export type BadgeTheme = typeof badgeTheme;
