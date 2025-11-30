import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Chatbot from '../chat'; // ✅ import

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Physical AI & Embodied Intelligence',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn AI systems that operate in the real world. Understand how humanoid robots perceive, plan, and act in physical environments.
      </>
    ),
  },
  {
    title: 'ROS 2 Fundamentals',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master the Robotic Operating System (ROS 2) for controlling robots. Topics include nodes, topics, services, and actions.
      </>
    ),
  },
  {
    title: 'Simulation & Digital Twin',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Simulate robots in Gazebo and Unity. Learn physics simulation, sensor integration (LiDAR, IMU), and realistic environment building.
      </>
    ),
  },
  {
    title: 'AI-Powered Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use NVIDIA Isaac Sim for perception and navigation. Integrate LLMs and multi-modal AI for autonomous humanoid behavior.
      </>
    ),
  },
  {
    title: 'Capstone Project',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build an autonomous humanoid robot that receives voice commands, plans paths, navigates obstacles, identifies objects, and manipulates them.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{ marginBottom: 30 }}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot integration */}
      <Chatbot />
    </>
  );
}
