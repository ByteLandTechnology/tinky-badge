[**tinky-badge**](../README.md)

---

[tinky-badge](../globals.md) / BadgeProps

# Interface: BadgeProps

Props for the Badge component.

BadgeProps

## Example

```tsx
// String child (will be uppercased)
<Badge color="green">success</Badge>
// Renders: SUCCESS

// ReactNode child
<Badge color="blue">
  <Icon /> Status
</Badge>
```

## Properties

### children

> `readonly` **children**: `ReactNode`

The content to display within the badge.
String content will be automatically converted to uppercase.
ReactNode allows for flexible content including text, elements, or fragments.

---

### color?

> `readonly` `optional` **color**: `LiteralUnion`\<`ForegroundColorName`, `string`\>

The background color of the badge.
Uses tinky TextProps color values (e.g., 'green', 'red', 'blue', 'magenta').
Defaults to 'magenta' if not specified.
