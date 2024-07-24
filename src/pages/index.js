import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Joining Paymennt",
    //target: "/guides",
    imageUrl: "img/home/joining-paymennt.svg",
    description: (
      <>
        Learn all you need to know about getting started with Paymennt and everything you need to open your account
      </>
    ),
  },
  {
    title: "Your Account",
    target: "/docs",
    imageUrl: "img/home/your-account.svg",
    description: (
      <>
        Configure your Paymennt account settings. Update personal information, manage security, and customize preferences
      </>
    ),
  },
  {
    title: "Online Payments",
    target: "/docs/payment/ecomm",
    imageUrl: "img/home/online-payments.svg",
    description: (
      <>
        Learn how to set up, send and receive online payments securely
      </>
    ),
  },
  {
    title: "In-person Payments",
    target: "/docs/sdks",
    imageUrl: "img/home/in-person-payments.svg",
    description: (
      <>
        Set up and manage Paymennt POS devices and Tap on Phone transactions
      </>
    ),
  },
  {
    title: "APIs and Plugins",
    target: "/api",
    imageUrl: "img/home/api-and-plugins.svg",
    description: (
      <>
        Integrate and configure APIs and plugins to build your Paymennt account the way you want
      </>
    ),
  },
  {
      title: "Funds and Payments",
      target: "/api",
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
    <div className={clsx("col col--6", styles.feature)}>
        <div className={styles.featuresBoarder}>
          {imgUrl && (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <Link className={clsx(styles.featureHead)} to={useBaseUrl(target)}>
            {title}
          </Link>
          <div className={styles.featuresDescriptionText}>
            <p>{description}</p>
          </div>
        </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="hero__title">{siteConfig.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.buttons}>
                <Link className={clsx("button button--outline button--secondary button--lg", styles.getStarted)} to={useBaseUrl("guides/")}>
                  To be replaced with searchbar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row justify-content-md-center">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
