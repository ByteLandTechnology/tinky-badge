[**tinky-badge**](../README.md)

---

[tinky-badge](../globals.md) / Badge

# Function: Badge()

> **Badge**(`props`): `ReactElement`

Badge component for rendering labeled badges in terminal UIs.

## Parameters

### props

[`BadgeProps`](../interfaces/BadgeProps.md)

Component props

## Returns

`ReactElement`

The rendered badge component

The Badge component renders a colored background badge with text content.
It provides:

- **Dynamic Theming**: Uses tinky-theme for consistent styling via useComponentTheme
- **Automatic Text Transformation**: String children are automatically converted to uppercase
- **High Contrast**: Label text is always black for readability against colored backgrounds
- **Flexible Content**: Supports any ReactNode as children, not just strings

The component uses two Text elements from tinky:

1. Outer Text: Creates the colored background using the container styles
2. Inner Text: Displays the (potentially transformed) children using label styles

## Examples

Basic usage with default magenta color:

```tsx
<Badge>Default</Badge>
// Renders: [DEFAULT] with magenta background
```

With custom color:

```tsx
<Badge color="green">Success</Badge>
// Renders: [SUCCESS] with green background
```

With non-string children:

```tsx
<Badge color="blue">
  <Text>Status:</Text> Active
</Badge>
```

## See

- [BadgeProps](../interfaces/BadgeProps.md)
- [badgeTheme](../variables/badgeTheme.md)
- [https://github.com/ByteLandTechnology/tinky-theme\|tinky-theme](https://github.com/ByteLandTechnology/tinky-theme|tinky-theme)
