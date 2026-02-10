**tinky-badge**

---

# tinky-badge

> A React-like badge component library for building beautiful terminal UIs.

![npm](https://img.shields.io/npm/v/tinky-badge)
![license](https://img.shields.io/npm/l/tinky-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

`tinky-badge` provides a fully-featured badge component for terminal applications built with the [tinky](https://github.com/ByteLandTechnology/tinky) framework. It supports customizable colors, automatic text transformation, and seamless theme integration.

## Features

- **📝 Simple API** - Intuitive JSX-based syntax for creating badges
- **🎨 Themeable** - Full integration with [tinky-theme](https://github.com/ByteLandTechnology/tinky-theme)
- **🎯 Customizable Colors** - Support for all standard terminal colors
- **🔤 Auto Uppercase** - String content is automatically converted to uppercase
- **🎨 High Contrast** - Black text on colored backgrounds for readability
- **🎯 Type Safe** - Built with TypeScript for excellent developer experience
- **🧪 Well Tested** - Comprehensive test coverage with unit tests
- **📚 Documented** - Complete API documentation generated with TypeDoc

## Installation

```bash
npm install tinky-badge

# or

bun add tinky-badge

# or

yarn add tinky-badge
```

## Quick Start

```tsx
import { render } from "tinky";
import { Badge } from "tinky-badge";

function App() {
  return (
    <>
      <Badge color="green">Success</Badge>
      <Badge color="red">Error</Badge>
      <Badge color="blue">Info</Badge>
    </>
  );
}

render(<App />);
```

## Usage

### Basic Badge

Create a simple colored badge:

```tsx
import { Badge } from "tinky-badge";

// Default magenta color
<Badge>Default</Badge>

// Custom colors
<Badge color="green">Success</Badge>
<Badge color="red">Error</Badge>
<Badge color="yellow">Warning</Badge>
<Badge color="blue">Info</Badge>
```

### Color Options

The Badge component supports all standard terminal colors:

| Color     | Example                                            |
| --------- | -------------------------------------------------- |
| `black`   | `<Badge color="black">Text</Badge>`                |
| `red`     | `<Badge color="red">Error</Badge>`                 |
| `green`   | `<Badge color="green">Success</Badge>`             |
| `yellow`  | `<Badge color="yellow">Warning</Badge>`            |
| `blue`    | `<Badge color="blue">Info</Badge>`                 |
| `magenta` | `<Badge color="magenta">Default</Badge>` (default) |
| `cyan`    | `<Badge color="cyan">Active</Badge>`               |
| `white`   | `<Badge color="white">Text</Badge>`                |
| `gray`    | `<Badge color="gray">Disabled</Badge>`             |

### Text Transformation

String children are automatically converted to uppercase:

```tsx
// Input
<Badge color="green">success</Badge>

// Renders: SUCCESS (in uppercase)
```

For non-string children (React elements), no transformation is applied:

```tsx
<Badge color="blue">
  <Text>Status:</Text> Active
</Badge>
```

## API Documentation

For complete API documentation, type definitions, and usage examples, visit the [API Docs](_media/api).

### Components

#### `Badge`

The badge component for rendering colored labels.

**Props:**

| Property   | Type                 | Required | Default   | Description                                   |
| ---------- | -------------------- | -------- | --------- | --------------------------------------------- |
| `children` | `ReactNode`          | Yes      | -         | Content to display (strings become uppercase) |
| `color`    | `TextProps['color']` | No       | `magenta` | Background color of the badge                 |

**Example:**

```tsx
<Badge color="green">Success</Badge>
```

### Theme Configuration

#### `badgeTheme`

Default theme configuration for the Badge component.

**Type:** `BadgeTheme`

**Example:**

```tsx
import { useComponentTheme } from "tinky-theme";
import { badgeTheme } from "tinky-badge";

function CustomBadge({ color, children }) {
  const { styles } = useComponentTheme("Badge", badgeTheme, { color });

  return (
    <Box {...styles.container}>
      <Text {...styles.label}>{children}</Text>
    </Box>
  );
}
```

#### `BadgeTheme`

Type definition for the Badge theme configuration.

**Example:**

```tsx
import type { BadgeTheme } from "tinky-badge";

const customTheme: BadgeTheme = {
  styles: {
    container: ({ color }) => ({
      backgroundColor: color,
      padding: 1,
    }),
    label: () => ({
      color: "white",
    }),
  },
};
```

## Styling

The Badge component uses a theme-based styling system via `tinky-theme`.

### Style Structure

```ts
{
  styles: {
    container: ({ color }) => ({ backgroundColor: color }),
    label: () => ({ color: "black" }),
  }
}
```

### Custom Styling

You can customize the badge appearance by providing a custom theme:

```tsx
import { useComponentTheme } from "tinky-theme";

const customTheme = {
  styles: {
    container: ({ color }) => ({
      backgroundColor: color,
      padding: 1,
      bold: true,
    }),
    label: () => ({
      color: "white",
      italic: true,
    }),
  },
};

function CustomBadge({ color, children }) {
  const { styles } = useComponentTheme("Badge", customTheme, { color });

  return (
    <Text {...styles.container}>
      {" "}
      <Text {...styles.label}>{children}</Text>
    </Text>
  );
}
```

## Development

### Setup

```bash
# Install dependencies
bun install

# Run tests
bun test

# Build the project
bun run build

# Lint code
bun run lint

# Generate documentation
bun run docs
```

### Project Structure

```
tinky-badge/
├── src/
│   ├── components/
│   │   └── badge/
│   │       ├── badge.tsx      # Badge component implementation
│   │       └── index.ts       # Component re-exports
│   ├── themes/
│   │   └── badge-theme.tsx    # Theme configuration
│   └── index.ts               # Package exports
├── tests/
│   ├── badge.test.tsx         # Component tests
│   └── badge-theme.test.tsx   # Theme tests
├── docs/
│   └── api/                   # Generated API documentation
├── README.md
├── package.json
└── tsconfig.json
```

## Related Packages

- [tinky](https://github.com/ByteLandTechnology/tinky) - React for CLIs
- [tinky-theme](https://github.com/ByteLandTechnology/tinky-theme) - Theme system for tinky
- [tinky-test](https://github.com/ByteLandTechnology/tinky-test) - Testing utilities for tinky
- [tinky-ordered-list](https://github.com/ByteLandTechnology/tinky-ordered-list) - Ordered list components

## Acknowledgments

- [ink-ui](https://github.com/vadimdemedes/ink-ui) - Inspiration for Badge component by Vadim Demedes

## License

MIT © [ByteLand Technology Limited](https://github.com/ByteLandTechnology)
