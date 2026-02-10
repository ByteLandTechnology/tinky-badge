[**tinky-badge**](../README.md)

---

[tinky-badge](../globals.md) / BadgeTheme

# Type Alias: BadgeTheme

> **BadgeTheme** = _typeof_ [`badgeTheme`](../variables/badgeTheme.md)

Type definition for the Badge theme configuration.

Inferred type of the badgeTheme configuration object.
Provides type safety when working with the theme and ensures
compatibility with the tinky-theme system.

This type can be used when extending or customizing the theme,
ensuring that all required style functions and properties are present.

## Example

```ts
import { type BadgeTheme } from "./themes/badge-theme";

// Extending the theme
const customTheme: BadgeTheme = {
  ...badgeTheme,
  styles: {
    ...badgeTheme.styles,
    container: ({ color }) => ({
      backgroundColor: color,
      padding: 1,
    }),
  },
};
```
