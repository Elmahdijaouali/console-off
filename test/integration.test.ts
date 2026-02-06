import { disableConsole, restoreConsole, isConsoleDisabled } from '../src';

// Save original console methods
const originalConsole = { ...console };

describe('console-off', () => {
  afterEach(() => {
    // Restore console after each test
    if (isConsoleDisabled()) {
      restoreConsole();
    }
  });

  it('should show warning when no environment is specified', () => {
    // Arrange
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    // Act
    disableConsole();

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'No environment specified, defaulting to production. Pass { env: "development" } to disable this warning.'
    );
    consoleWarnSpy.mockRestore();
  });

  it('should disable console in production environment', () => {
    // Act
    disableConsole({ env: 'production' });

    // Assert
    expect(console.log).not.toBe(originalConsole.log);
    expect(isConsoleDisabled()).toBe(true);
  });

  it('should not disable console in development', () => {
    // Act
    disableConsole({ env: 'development' });

    // Assert
    expect(console.log).toBe(originalConsole.log);
    expect(isConsoleDisabled()).toBe(false);
  });

  it('should force disable console in any environment', () => {
    // Act
    disableConsole({ env: 'development', force: true });

    // Assert
    expect(console.log).not.toBe(originalConsole.log);
    expect(isConsoleDisabled()).toBe(true);
  });

  it('should exclude specified methods', () => {
    // Save original warn method before any mocks
    const originalWarn = console.warn;
    
    try {
      // Act
      disableConsole({ env: 'production', exclude: ['warn'] });

      // Assert
      expect(console.log).not.toBe(originalConsole.log);  // log should be disabled
      expect(console.warn).toBe(originalWarn);           // warn should be original (excluded)
      expect(isConsoleDisabled()).toBe(true);
    } finally {
      // Ensure we restore the original console.warn
      console.warn = originalWarn;
    }
  });

  it('should restore original console', () => {
    // Arrange
    disableConsole({ env: 'production' });
    
    // Act
    restoreConsole();

    // Assert
    expect(console.log).toBe(originalConsole.log);
    expect(isConsoleDisabled()).toBe(false);
  });

  it('should use custom check function', () => {
    // Arrange
    const customCheck = () => false;  // Always return false to prevent disabling

    // Act
    disableConsole({ customCheck, env: 'production' });

    // Assert
    expect(console.log).toBe(originalConsole.log);
    expect(isConsoleDisabled()).toBe(false);
  });
});