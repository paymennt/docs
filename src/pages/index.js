import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "product guides",
    target: "/guides",
    imageUrl: "img/home/guides.svg",
    description: (
      <>
        learn the ins and outs of the <strong>paymennt</strong> platform. Our
        product guides will show you how to manage your merchant account and
        covers topics critical for any business
      </>
    ),
  },
  {
    title: "accept payments",
    target: "/docs",
    imageUrl: "img/home/accept.svg",
    description: (
      <>
        learn about the ins and outs of the **paymennt** platform through boosts
        an array of tools was designed from the ground up to be easily installed
        and used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "e-commerce plugins",
    target: "/docs/payment/ecomm",
    imageUrl: "img/home/plugins.svg",
    description: (
      <>
        connect your e-commerce website to the powerful payment processing
        capabilities of
        <strong>paymennt</strong>. choose a quick, reliable, and low-code
        solution thanks to our flexible plugins
      </>
    ),
  },
  {
    title: "software kits",
    target: "/docs/sdks",
    imageUrl: "img/home/sdks.svg",
    description: (
      <>
        whether for your server or your mobile app, <strong>paymennt</strong>{" "}
        provides you with an array of SDKs to make your product development
        journey simpler
      </>
    ),
  },
  {
    title: "api reference",
    target: "/api",
    imageUrl: "img/home/api.svg",
    description: (
      <>
        access our full API reference documentation for complete instructions on
        how to implement and access the full range of features and tools made
        available to our merchants
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
                  get started
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
