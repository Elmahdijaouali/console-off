# Contributing to Console Off

We're excited that you're interested in contributing to Console Off! Before you get started, please take a moment to read this guide to understand how you can help improve this project.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Development Setup](#-development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Testing](#testing)
- [Code Style](#-code-style)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [License](#-license)

## ✨ Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🤔 How Can I Contribute?

### Reporting Bugs

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/Elmahdijaouali/console-off/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/Elmahdijaouali/console-off/issues/new). Be sure to include:
  - A clear title and description
  - Steps to reproduce the issue
  - Expected vs. actual behavior
  - Browser/Node.js version and OS if relevant
  - Any relevant console output or screenshots

### Suggesting Enhancements

- Use GitHub Issues to submit your enhancement suggestions.
- Clearly describe the enhancement and why you believe it would be useful.
- Include any relevant code examples or documentation.

### Your First Code Contribution

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/console-off.git
   cd console-off
   ```
3. Create a new branch for your changes:
   ```bash
   git checkout -b my-feature-branch
   ```
4. Make your changes following the [Code Style](#-code-style) guidelines.
5. Add tests for your changes.
6. Run the test suite to ensure everything passes.
7. Commit your changes with a descriptive commit message.
8. Push your branch to your fork and open a Pull Request.

### Pull Requests

- Fill in the Pull Request template with all relevant information.
- Ensure your code passes all tests.
- Update documentation if necessary.
- Keep your PR focused on a single change.
- Reference any related issues in your PR description.

## 🛠 Development Setup

### Prerequisites

- Node.js 16+
- pnpm 7+

### Installation

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the project:
   ```bash
   pnpm run build
   ```

### Testing

Run the test suite:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test:watch
```

Check test coverage:
```bash
pnpm test:coverage
```

## 📝 Code Style

- Use TypeScript for all new code.
- Follow the existing code style and formatting.
- Keep functions small and focused on a single responsibility.
- Add appropriate TypeScript types and interfaces.
- Include JSDoc comments for public APIs.

## 📖 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages. Example:

```
feat: add support for custom environment variables

Add new configuration option to allow users to specify custom environment variables for production detection.

Closes #123
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## 📄 License

By contributing, you agree that your contributions will be licensed under its MIT License.
