import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from './Header';
import ParticleBackground from './ParticleBackground';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Luis Fortes - Portfolio</title>
        <meta name="description" content="Luis Fortes - Bioengineer and Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <ParticleBackground />
      <Header />
      <main className="pt-16 relative z-10">
        {children}
        <SpeedInsights />
      </main>
    </div>
  );
};

export default Layout;