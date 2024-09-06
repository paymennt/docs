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
    target: "/guides/account",
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
    target: "/guides/account-management",
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
  // {
  //  id:4,
  //   title: "In-person Payments",
  //   target: "/docs/sdks",
  //   imageUrl: "img/home/in-person-payments.svg",
  //   description: (
  //     <>
  //       Set up and manage Paymennt POS devices and Tap on Phone transactions
  //     </>
  //   ),
  // },
  {
   id:5,
    title: "APIs and Plugins",
    target: "/guides/api-and-plugins",
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

function Feature({ id,imageUrl, target, title, description }) {
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
              <h1 className="hero__title main_custom_title">{siteConfig.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="hero__subtitle main_custom_subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.buttons}>
                <CenteredSearchBar />

              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row justify-content-md-center side-padding">
                {features.map((props, idx) => (
                    <>

                     <Feature key={idx} {...props} />
</>

                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
