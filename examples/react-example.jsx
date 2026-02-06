// examples/react-example.jsx
// Example usage in a React application

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'console-off'; // Auto-disables in production
// OR with options:
// import { disableConsole } from 'console-off';
// disableConsole({ exclude: ['error', 'warn'] });

function App() {
  const handleClick = () => {
    console.log('Button clicked!'); // This will be silent in production
  };

  return (
    <div>
      <h1>Console Clean Production Demo</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>Open DevTools and click the button - no console logs in production!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
