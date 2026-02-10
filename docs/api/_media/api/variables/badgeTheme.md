[**tinky-badge**](../README.md)

---

[tinky-badge](../globals.md) / badgeTheme

# Variable: badgeTheme

> `const` **badgeTheme**: `object`

Badge theme configuration object.

Defines the complete theme configuration for the Badge component,
including all style functions for container, label, and other elements.
The theme uses the ComponentTheme type from tinky-theme for type safety
and compatibility with the theme system.

## Type Declaration

### styles

> **styles**: `object`

#### styles.container()

> **container**: (`params`) => `TextProps`

Style function for the badge container element.

##### Parameters

###### params

`Pick`\<`TextProps`, `"color"`\>

Style parameters extracted from component props

##### Returns

`TextProps`

TextProps object with backgroundColor set to the specified color

Generates the container styles for a badge based on the color prop.
The background color is set dynamically based on the color parameter,
allowing for flexible theming and color customization.

##### Example

```ts
const styles = badgeTheme.styles.container({ color: "green" });
// Returns: { backgroundColor: "green" }

const blueStyles = badgeTheme.styles.container({ color: "blue" });
// Returns: { backgroundColor: "blue" }
```

#### styles.label()

> **label**: () => `TextProps`

Style function for the badge label text element.

##### Returns

`TextProps`

TextProps object with color set to "black"

Generates the label styles for a badge. The label text is always
rendered in black to ensure high contrast and readability
against the colored badge background.

This consistent styling ensures that badges remain legible
regardless of the background color chosen.

##### Example

```ts
const styles = badgeTheme.styles.label();
// Returns: { color: "black" }

// Usage in component:
<Text {...styles}>Badge Label</Text>
```

## Example

```ts
// Accessing container styles
const containerStyles = badgeTheme.styles.container({ color: "blue" });
// Returns: { backgroundColor: "blue" }

// Accessing label styles
const labelStyles = badgeTheme.styles.label();
// Returns: { color: "black" }
```
