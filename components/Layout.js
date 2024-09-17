import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from './Header';
import ParticleBackground from './ParticleBackground';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <LoadingScreen isLoading={isLoading} />
      <Head>
        <title>Luis Fortes - Portfolio</title>
        <meta name="description" content="Luis Fortes - Bioengineer and Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <ParticleBackground />
      {!isLoading && <Header />}
      <main className={`pt-16 relative z-10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children({ isLoading })}
      </main>
      <SpeedInsights />
    </div>
  );
};

export default Layout;