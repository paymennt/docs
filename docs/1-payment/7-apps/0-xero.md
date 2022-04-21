---
title: painless payments with xero and paymennt
sidebar_label: xero
---

Make getting paid faster and easier than ever! **paymennt** is now integrated with Xero. Xero is the best accounting software for growing companies. Its service plans and features easily accommodate the different stages (and needs) of small businesses.

This integration will make it easier for your customers to pay your Xero invoices online using **paymennt**.

:::caution Before you start
Your user account must have Administrator permission to access this service
:::

## Logging in to the paymennt Web Console

To complete this integration, you must first login to the [paymennt Web Console](/guides/portal/login)

## Access Xero Integration configuration

From the side menu, Select **"Integrations"** -> **"Xero"** as shown in the image below

![admin integrate xero](/img/docs/integrate/3rd-party/xero/admin.png)

## Connecting your Xero account

1. Click on **"connect to Xero"** begin the integration

![connect xero](/img/docs/integrate/3rd-party/xero/connect.png)

2. Select the Xero **Organization** you would like to link to this **paymennt** account.

:::tip
**paymennt** supports one single Organization per **paymennt** account. If you manage multiple **paymennt** clients and have multiple Organizations available to your Xero account, make sure all of them are selected. You can specify which organization is linked to this specific **paymennt** account in the next step.
:::

![authorize paymennt](/img/docs/integrate/3rd-party/xero/authorize.png)

3. (Multiple Organizations Only) Selecting organization to link to your **paymennt** Account

If you have multiple organizations selected in _Step 2_ above, you will be prompted to select which one you want to link to your **paymennt** account. If you have only one selected Organization, you will not see a prompt.

## Adding a Payment Button to your Xero Invoices

The next steps explain how to add a **"Pay Now"** button to your Xero invoices

:::info
The following instructions are also available on the **Xero Central** page [Add a payment service that uses a custom URL](https://central.xero.com/s/article/Custom-URL)
:::

1. Copy **Custom payment URL** from the **"Xero"** screen on your **paymennt** account.

![xero connected](/img/docs/integrate/3rd-party/xero/connected.png)

2. Login to your ** [Xero Account](https://my.xero.com) **

3. Click the **organisation name**, select **Settings**, then click **Payment services**.

![xero invoice settings](/img/docs/integrate/3rd-party/xero/invoice_settings.png)

4. Next to **Available Payment Services**, click **Add Other**, then select **Custom Payment URL**

![xero custom url](/img/docs/integrate/3rd-party/xero/custom_url.png)

5. Enter the following details for the **Custom URL**

- Name: **paymennt**
- Your custom URL: **URL copied from _Step 1_ above**
- Pay now text: **Pay Using Card**

Once done, click **Save**

:::info
You can replace the "Pay now text" with any other text to show up on the online invoice
:::

6. Now, apply the URL to a branding theme to accept online payments:

- On the **Payment Services** screen, under **Connected Payment Services**, click **Manage Themes**
- Select **paymennt** as a credit card service next to the branding theme you want
- Click **Save**

![xero branding theme](/img/docs/integrate/3rd-party/xero/branding_theme.png)
