// examples/angular-example.ts
// Example usage in an Angular application (Angular 12+)

// ======================
// Option 1: Using in main.ts (Auto-disable in production)
// ======================
/*
// main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'console-off'; // Auto-import for production

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/

// ======================
// Option 2: Using in AppModule (More control)
// ======================
/*
// app.module.ts
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { disableConsole } from 'console-off';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Disable console in production, but keep errors and warnings
    if (!isDevMode()) {
      disableConsole({
        exclude: ['error', 'warn'],
        env: 'production'
      });
    }
  }
}
*/

// ======================
// Example AppComponent
// ======================
/*
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Angular Console-Off Demo</h1>
      <div class="button-group">
        <button (click)="logMessage()">Log Message</button>
        <button (click)="logWarning()">Log Warning</button>
        <button (click)="logError()">Log Error</button>
      </div>
      <div class="status">
        <p>Check your browser's console to see the effect.</p>
        <p>In production, only errors and warnings will show by default.</p>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .button-group {
      margin: 2rem 0;
    }
    button {
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #1565c0;
    }
    .status {
      margin-top: 2rem;
      color: #666;
      font-size: 0.9rem;
    }
  `]
})
export class AppComponent {
  logMessage() {
    console.log('This is a regular log message');
  }

  logWarning() {
    console.warn('This is a warning message');
  }

  logError() {
    console.error('This is an error message');
  }
}
*/

// ======================
// Environment Configuration
// ======================
/*
// environment.prod.ts
export const environment = {
  production: true
};

// environment.ts
export const environment = {
  production: false
};
*/

// ======================
// Package Installation
// ======================
/*
# Install the package
npm install console-off
# or
yarn add console-off
# or
pnpm add console-off

# Make sure to import in your polyfills.ts or main.ts
import 'console-off';
*/

// Note: For Angular 12+ projects, you might need to add this to your angular.json:
/*
{
  "projects": {
    "your-project-name": {
      "architect": {
        "build": {
          "options": {
            "allowedCommonJsDependencies": ["console-off"]
          }
        }
      }
    }
  }
}
*/

// ======================
// Testing in Angular
// ======================
/*
// In your test setup (test.ts or similar):
import { disableConsole } from 'console-off';

// Disable console during tests if needed
if (typeof window !== 'undefined') {
  disableConsole({ env: 'test' });
}
*/

// For more information, see the console-off documentation.
