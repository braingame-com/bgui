# BGUI Agent Guide

Welcome, fellow AI! This file describes how agents should navigate and contribute to BGUI.

## Purpose

BGUI is a universal UI component library targeting React Native and the Web. It is built to work well with large language models and autonomous agents. All source files will eventually include extensive inline comments and metadata annotations so that agents can reason about the codebase.

## Design Philosophy

1. **Clarity over brevity.** Components prioritize readability with descriptive names and comments.
2. **Predictability.** File names and exports should match component names (`Button.tsx` -> `Button`).
3. **Self-documenting code.** Use `@bgui-meta` tags to describe component category, platform support, and any constraints.

## Component Conventions

- Each component lives in its own folder under `src/`.
- Components should export a React component and supporting hooks/types.
- Include usage examples in the component's documentation block.
- Annotate all exported functions and components with `@bgui-meta`.

Example annotation:

```tsx
/**
 * Primary action button.
 * @bgui-meta category="control" platform="ios,android,web" theme="light|dark"
 */
export const Button = () => {
  return <button>Click me</button>;
};
```

## Environment Setup

- **Node.js**: use version `>=18`.
- **Package Manager**: `npm`.
- After cloning the repo run `npm install` to fetch dependencies.
- Useful scripts (defined in `package.json`):
  - `npm start` – start the development server.
  - `npm run build` – build the library (placeholder).
  - `npm test` – run tests (placeholder).

## Project Structure (planned)

```
src/
  components/
    Button/
      Button.tsx
      index.ts
  hooks/
  theming/
  platforms/
```

## Contributing

1. Follow the naming conventions above.
2. Update or create inline documentation and `@bgui-meta` tags for all new code.
3. Keep pull requests focused and include relevant tests.

Happy building!
