import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Main Title */}
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>

        {/* Subtitle */}
        <p className="hero__subtitle">
          Learn to design, simulate, and deploy intelligent humanoid robots that interact with the real world
        </p>

        {/* Call-to-Action Button */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Your Physical AI Journey 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="Learn Physical AI, ROS 2, simulation, NVIDIA Isaac, and build autonomous humanoid robots.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
