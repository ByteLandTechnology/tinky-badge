/**
 * @fileoverview Badge component for terminal UI applications.
 *
 * @module components/Badge
 *
 * This module provides the Badge component, a UI element for rendering
 * labeled badges in terminal interfaces. The component displays text
 * within a colored background badge, with automatic text transformation
 * and theme-based styling.
 *
 * Key features:
 * - Dynamic background colors via the color prop
 * - Automatic text uppercase transformation for string children
 * - Theme integration via tinky-theme for consistent styling
 * - High contrast label rendering (black text on colored background)
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Badge color="green">Success</Badge>
 * // Renders: [SUCCESS] with green background
 * ```
 *
 * @example
 * Different colors:
 * ```tsx
 * <Badge color="red">Error</Badge>
 * <Badge color="yellow">Warning</Badge>
 * <Badge color="blue">Info</Badge>
 * ```
 */

import { Text, type TextProps } from "tinky";
import type { ReactNode } from "react";
import { useComponentTheme } from "tinky-theme";
import { badgeTheme } from "../themes/badge-theme.js";

/**
 * Props for the Badge component.
 *
 * @interface BadgeProps
 *
 * @property {ReactNode} children - The content to display within the badge.
 *   String content will be automatically converted to uppercase.
 *   ReactNode allows for flexible content including text, elements, or fragments.
 *
 * @property {TextProps['color']} [color='magenta'] - The background color of the badge.
 *   Uses tinky TextProps color values (e.g., 'green', 'red', 'blue', 'magenta').
 *   Defaults to 'magenta' if not specified.
 *
 * @example
 * ```tsx
 * // String child (will be uppercased)
 * <Badge color="green">success</Badge>
 * // Renders: SUCCESS
 *
 * // ReactNode child
 * <Badge color="blue">
 *   <Icon /> Status
 * </Badge>
 * ```
 */
export interface BadgeProps {
  /**
   * The content to display within the badge.
   * String content will be automatically converted to uppercase.
   */
  readonly children: ReactNode;

  /**
   * The background color of the badge.
   * @default "magenta"
   */
  readonly color?: TextProps["color"];
}

/**
 * Badge component for rendering labeled badges in terminal UIs.
 *
 * @param {BadgeProps} props - Component props
 * @param {ReactNode} props.children - Content to display within the badge
 * @param {TextProps['color']} [props.color='magenta'] - Background color
 *
 * @returns {JSX.Element} The rendered badge component
 *
 * The Badge component renders a colored background badge with text content.
 * It provides:
 *
 * - **Dynamic Theming**: Uses tinky-theme for consistent styling via useComponentTheme
 * - **Automatic Text Transformation**: String children are automatically converted to uppercase
 * - **High Contrast**: Label text is always black for readability against colored backgrounds
 * - **Flexible Content**: Supports any ReactNode as children, not just strings
 *
 * The component uses two Text elements from tinky:
 * 1. Outer Text: Creates the colored background using the container styles
 * 2. Inner Text: Displays the (potentially transformed) children using label styles
 *
 * @example
 * Basic usage with default magenta color:
 * ```tsx
 * <Badge>Default</Badge>
 * // Renders: [DEFAULT] with magenta background
 * ```
 *
 * @example
 * With custom color:
 * ```tsx
 * <Badge color="green">Success</Badge>
 * // Renders: [SUCCESS] with green background
 * ```
 *
 * @example
 * With non-string children:
 * ```tsx
 * <Badge color="blue">
 *   <Text>Status:</Text> Active
 * </Badge>
 * ```
 *
 * @see {@link BadgeProps}
 * @see {@link badgeTheme}
 * @see {@link https://github.com/ByteLandTechnology/tinky-theme|tinky-theme}
 */
export function Badge({
  children,
  color = "magenta",
}: BadgeProps): React.ReactElement {
  const { styles } = useComponentTheme<BadgeProps>("Badge", badgeTheme, {
    children,
    color,
  });

  let formattedChildren = children;

  if (typeof children === "string") {
    formattedChildren = children.toUpperCase();
  }

  return (
    <Text {...styles.container}>
      {" "}
      <Text {...styles.label}>{formattedChildren}</Text>
    </Text>
  );
}
