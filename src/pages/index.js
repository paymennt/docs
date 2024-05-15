import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Product Guides",
    target: "/guides",
    imageUrl: "img/home/guides.svg",
    description: (
      <>
        Learn the ins and outs of the <strong>paymennt</strong> platform. Our
        product guide will show you how to manage your merchant account and
        covers topics critical for any business
      </>
    ),
  },
  {
    title: "Accept Payments",
    target: "/docs",
    imageUrl: "img/home/accept.svg",
    description: (
      <>
        The <strong>old description</strong> didn't made any sense. Awaiting explaination of the the actual process to fill in th details
      </>
    ),
  },
  {
    title: "E-commerce Plugins",
    target: "/docs/payment/ecomm",
    imageUrl: "img/home/plugins.svg",
    description: (
      <>
        Connect your e-commerce website to the powerful payment processing capabilities of <strong>paymennt</strong>. Choose a quick, reliable, and low-code solution thanks to our flexible plugins
      </>
    ),
  },
  {
    title: "Software Kits",
    target: "/docs/sdks",
    imageUrl: "img/home/sdks.svg",
    description: (
      <>
        Whether for your server or your mobile app, <strong>paymennt</strong> provides you with an array of SDKs to make your product development journey simpler
      </>
    ),
  },
  {
    title: "API Reference",
    target: "/api",
    imageUrl: "img/home/api.svg",
    description: (
      <>
        Access our full API reference documentation for complete instructions on how to implement and access the full range of features and tools made available to our merchants
      </>
    ),
  },
];

function Feature({ imageUrl, target, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Link className={clsx(styles.featureHead)} to={useBaseUrl(target)}>
        {title}
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--8">
              <h1 className="hero__title">{siteConfig.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col--8">
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="row">
            <div className="col col--8">
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/")}
                >
                  Get Started
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
              <div className="row">
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
