/**
 * Console Clean Production
 * Disables all console methods in production environments by default
 * Supports: Node.js, React, Angular, Vue.js, Next.js, and other frameworks
 */

interface ConsoleCleanOptions {
  /**
   * Set the environment (e.g., 'production', 'development')
   * If not provided, defaults to 'production'
   */
  env?: string;
  
  /**
   * Force disable console regardless of environment
   * @default false
   */
  force?: boolean;
  
  /**
   * Array of console methods to exclude from disabling
   */
  exclude?: Array<keyof Console>;
  
  /**
   * Custom function to determine if console should be disabled
   * Overrides all other environment checks if provided
   */
  customCheck?: () => boolean;
}

class ConsoleClean {
  private static instance: ConsoleClean;
  private originalConsole: { [K in keyof Console]?: any } = {};
  private isDisabled: boolean = false;
  private consoleMethods: Array<keyof Console> = [
    'log', 'info', 'warn', 'error', 'debug', 'trace', 'table', 'dir',
    'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'clear', 'count',
    'countReset', 'assert', 'time', 'timeLog', 'timeEnd', 'timeStamp'
  ] as const;

  private constructor() {}

  static getInstance(): ConsoleClean {
    if (!ConsoleClean.instance) {
      ConsoleClean.instance = new ConsoleClean();
    }
    return ConsoleClean.instance;
  }

  private isProduction(env?: string, customCheck?: () => boolean): boolean {
    if (customCheck) {
      return customCheck();
    }

    if (env) {
      return env === 'production';
    }

    // Check common environment variables
    if (typeof process !== 'undefined' && process.env.NODE_ENV) {
      return process.env.NODE_ENV === 'production';
    }

    // Default to production if no env or customCheck is provided
    return true;
  }

  public disable(options: ConsoleCleanOptions = {}): void {
    const { exclude = [], customCheck, env = 'production', force = false } = options;
    
    const shouldDisable = force || this.isProduction(env, customCheck);

    if (!shouldDisable || this.isDisabled) {
      return;
    }

    if (!customCheck && !options.env) {
      console.warn('No environment specified, defaulting to production. Pass { env: "development" } to disable this warning.');
    }

    this.consoleMethods.forEach(method => {
      if (exclude.includes(method)) return;
      
      this.originalConsole[method] = console[method];
      
      // @ts-ignore
      console[method] = () => {};
    });

    this.isDisabled = true;
  }

  public restore(): void {
    if (!this.isDisabled) return;

    // Restore original methods
    Object.entries(this.originalConsole).forEach(([method, originalMethod]) => {
      // @ts-ignore
      console[method] = originalMethod;
    });

    this.originalConsole = {};
    this.isDisabled = false;
  }

  public isConsoleDisabled(): boolean {
    return this.isDisabled;
  }
}

// Main function to disable console
function disableConsole(options: ConsoleCleanOptions = {}): void {
  const instance = ConsoleClean.getInstance();
  instance.disable(options);
}

// Function to restore console
function restoreConsole(): void {
  const instance = ConsoleClean.getInstance();
  instance.restore();
}

// Function to check if console is disabled
function isConsoleDisabled(): boolean {
  const instance = ConsoleClean.getInstance();
  return instance.isConsoleDisabled();
}

// Create the main export object
const consoleOff = {
  disableConsole,
  restoreConsole,
  isConsoleDisabled,
  ConsoleClean
};

// Export everything as named exports
export { 
  disableConsole, 
  restoreConsole, 
  isConsoleDisabled,
  ConsoleClean,
  type ConsoleCleanOptions
};

export default consoleOff;

// Handle CommonJS module.exports in a way that works with both ESM and CJS
const isCommonJS = typeof module !== 'undefined' && module.exports && typeof require === 'function';

if (isCommonJS) {
  // Create a new object to avoid mutating the original
  const cjsExports = {
    ...consoleOff,
    default: consoleOff,
    disableConsole,
    restoreConsole,
    isConsoleDisabled,
    ConsoleClean,
    ConsoleCleanOptions: {} as ConsoleCleanOptions
  };
  
  // Use Object.defineProperty to make it non-enumerable
  Object.defineProperty(module, 'exports', {
    value: cjsExports
  });
}
