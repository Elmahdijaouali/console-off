// examples/express-example.js
// Example usage in Express.js application

const express = require('express');
const { disableConsole } = require('console-off');

// Disable console in production, but keep errors
if (process.env.NODE_ENV === 'production') {
  disableConsole({ exclude: ['error'] });
}

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Homepage visited'); // Silent in production
  console.error('This error will still show'); // Always visible
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  console.log('Fetching users...'); // Silent in production
  
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  
  console.log('Users:', users); // Silent in production
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Silent in production
});

// Alternative: Use as middleware
// const consoleCleanMiddleware = (req, res, next) => {
//   if (process.env.NODE_ENV === 'production') {
//     disableConsole({ exclude: ['error'] });
//   }
//   next();
// };
// 
// app.use(consoleCleanMiddleware);
