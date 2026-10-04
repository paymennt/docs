import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import CenteredSearchBar from '../components/CenteredSearchBar';

const features = [
  {
  id:1,
    title: "Joining Paymennt",
    target: "/guides/getting-started",
    imageUrl: "img/home/joining-paymennt.svg",
    description: (
      <>
        Learn all you need to know about getting started with Paymennt and everything you need to open your account
      </>
    ),
  },
  {
  id:2,
    title: "Your Account",
    target: "/guides/your-account",
    imageUrl: "img/home/your-account.svg",
    description: (
      <>
        Configure your Paymennt account settings. Update personal information, manage security, and customize preferences
      </>
    ),
  },
  {
   id:3,
    title: "Online Payments",
    target: "/guides/online-payment",
    imageUrl: "img/home/online-payments.svg",
    description: (
      <>
        Learn how to set up, send and receive online payments securely
      </>
    ),
  },
  {
   id:5,
    title: "APIs and Plugins",
    target: "/docs/payment/ecomm",
    imageUrl: "img/home/api-and-plugins.svg",
    description: (
      <>
        Integrate and configure APIs and plugins to build your Paymennt account the way you want
      </>
    ),
  },
  {
   id:6,
      title: "Funds and Payments",
      target: "/guides/funds-and-payments",
      imageUrl: "img/home/funds-and-payments.svg",
      description: (
        <>
            Everything you need to know about fees and how your payments are processed
        </>
      ),
    },
];

function Feature({ imageUrl, target, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link className={styles.feature} to={useBaseUrl(target)}>
      {imgUrl && <img className={styles.featureImage} src={imgUrl} alt="" />}
      <span className={styles.featureContent}>
        <span className={styles.featureHead}>{title}</span>
        <span className={styles.featuresDescriptionText}>{description}</span>
        <span className={styles.featureAction}>Explore <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="hero__title main_custom_title">{siteConfig.title}</h1>
            <p className="hero__subtitle main_custom_subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <CenteredSearchBar />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.paths} aria-labelledby="paths-heading">
          <div className="container">
            <h2 id="paths-heading">Start with your goal</h2>
            <div className={styles.pathGrid}>
              <Link className={styles.path} to={useBaseUrl("/guides/getting-started")}>
                <span className={styles.pathTitle}>Manage your Paymennt account</span>
                <span>Open your account, configure settings, and understand how payments move.</span>
                <span className={styles.pathAction}>Go to user guides <span aria-hidden="true">→</span></span>
              </Link>
              <Link className={styles.path} to={useBaseUrl("/docs/payment/ecomm")}>
                <span className={styles.pathTitle}>Build an integration</span>
                <span>Connect APIs, plugins, payment flows, and technical references.</span>
                <span className={styles.pathAction}>Go to developer guides <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={styles.sectionHeading}>
                <h2>Browse the documentation</h2>
                <p>Choose a topic, or use search to get straight to an answer.</p>
              </div>
              <div className={styles.featureGrid}>
                {features.map((props) => <Feature key={props.id} {...props} />)}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
