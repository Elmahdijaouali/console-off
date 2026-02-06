// examples/nextjs-example.tsx
// Example usage in Next.js application

// pages/_app.tsx
import type { AppProps } from 'next/app';
import 'console-off'; // Auto-disables in production

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

// Alternative: Manual control with custom settings
// import { disableConsole } from 'console-off';
// import { useEffect } from 'react';
// 
// function MyApp({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     // Keep errors visible for debugging
//     disableConsole({ exclude: ['error', 'warn'] });
//   }, []);
//   
//   return <Component {...pageProps} />;
// }
