# Console Off 🚫

[\![npm](https://img.shields.io/npm/v/console-off.svg)](https://www.npmjs.com/package/console-off)
[\![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[\![GitHub stars](https://img.shields.io/github/stars/Elmahdijaouali/console-off.svg?style=social)](https://github.com/Elmahdijaouali/console-off/stargazers)

A lightweight utility to disable `console` methods in production environments for cleaner and more secure applications. Works seamlessly with all major JavaScript frameworks including React, Next.js, Vue, Angular, and Node.js.

## �� Features

- 🔒 Disables all console methods in production
- 🛠️ Supports both ESM and CommonJS
- ⚡ Lightweight and dependency-free
- 🔄 Easy to enable/disable
- 🎯 TypeScript support out of the box
- 🛡️ Optional method exclusion
- 🔄 Environment-aware (NODE_ENV support)

## 📦 Installation

```bash
# Using npm
npm install console-off

# Using yarn
yarn add console-off

# Using pnpm
pnpm add console-off
```

## 🎯 Basic Usage

### Automatic Mode (Recommended)

Import the package at your application's entry point:

```javascript
// For ES Modules
import 'console-off';

// For CommonJS
require('console-off');
```

### Manual Control

For more control over when to enable/disable console methods:

```typescript
import { 
  disableConsole, 
  restoreConsole, 
  isConsoleDisabled 
} from 'console-off';

// Disable console in production
disableConsole();

// Check if console is disabled
console.log(isConsoleDisabled()); // true in production

// Restore original console methods
restoreConsole();
```

## ⚙️ Advanced Usage

### With Options

```typescript
disableConsole({
  env: process.env.NODE_ENV, // 'production' or 'development'
  force: false,              // Force disable even in development
  exclude: ['warn', 'error'] // Keep error and warn methods
});
```

### Using Custom Check Function

```typescript
disableConsole({
  customCheck: () => {
    // Your custom logic to determine if console should be disabled
    return process.env.NODE_ENV === 'production';
  }
});
```

## 🖥️ Framework Integration

### React / Next.js

```typescript
// _app.tsx or main.tsx
import 'console-off';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Optional: Disable with options
    import('console-off').then(({ disableConsole }) => {
      disableConsole({ exclude: ['error'] });
    });
  }, []);

  return <Component {...pageProps} />;
}
```

### Vue 3

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'console-off';

createApp(App).mount('#app');
```

### Node.js / Express

```javascript
// server.js
const { disableConsole } = require('console-off');

// Disable console in production
if (process.env.NODE_ENV === 'production') {
  disableConsole({ exclude: ['error'] });
}

const express = require('express');
const app = express();
// ... rest of your server code
```

## 📚 API Reference

### `disableConsole(options?: ConsoleCleanOptions): void`

Disables console methods based on the provided options.

**Options:**
- `env?: string` - Set to 'development' to keep console enabled
- `force?: boolean` - Force disable even in development (default: false)
- `exclude?: string[]` - Array of console methods to exclude from disabling
- `customCheck?: () => boolean` - Custom function to determine if console should be disabled

### `restoreConsole(): void`

Restores all original console methods.

### `isConsoleDisabled(): boolean`

Returns `true` if console is currently disabled.

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Run tests
pnpm test
```

## 🤝 Contributing

Contributions are welcome\! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Inspired by the need for cleaner production consoles
