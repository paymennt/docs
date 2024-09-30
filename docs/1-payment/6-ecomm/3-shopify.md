---
title: shopify
---

The following document guides you through accepting **paymennt** payments through [Shopify](https://www.shopify.com).

:::info
This guide assumes that you already have a paid [Shopify account](https://www.shopify.com).
:::

## Create a custom app

1. In your Shopify, go to `Apps` > `Develop apps for your store` (at the bottom of the page) and click `Create an app`. If custom apps are disabled, enable custom apps development.
   ![](/img/docs/integrate/ecomm/shopify/shopify-1.png)

2. Fill in the app name and and press on `Create app`.
   ![](/img/docs/integrate/ecomm/shopify/shopify-2.png)

3. From `Configuration` tab, grant `Read and write` permission for `Orders` and click on `Save` at the top right corner then click `Create app` in the confirmation prompt.
   ![](/img/docs/integrate/ecomm/shopify/shopify-3.png)

4. Navigate to `API credentials` tab and press on `Install app`.
   ![](/img/docs/integrate/ecomm/shopify/shopify-4.png)

5. Copy the `Admin API access token` from the **paymennt** application as shown below. We will use this in the next section.
   ![](/img/docs/integrate/ecomm/shopify/shopify-5.png)

## Configure paymennt

### paymennt web console

To complete this integration, you must first login to the [**paymennt** web console](/guides/your-account/desktop-login)

### Shopify Configuration

From the side menu, Select **"Integrations"** -> **"Shopify Integration"** as shown in the image below

![](/img/docs/integrate/ecomm/shopify/shopify-connect-1.png)

### Connecting your Shopify account

1. Click on **"connect to Shopify"**

![](/img/docs/integrate/ecomm/shopify/shopify-connect-2.png)

2. Fill the form with then click on **"Connect"**:

- **endpoint**: your shop's domain
- **token**: the `Admin API access token` copied from **Step 5** in creating the custom app

![](/img/docs/integrate/ecomm/shopify/shopify-connect-3.png)

3. Copy the HTML code shown on the confirmation page. We will use this in the next steps.

![](/img/docs/integrate/ecomm/shopify/shopify-connect-4.png)

## Shopify Additional Scripts

1. Go back to Shopify. Select `Settings` then click on `Checkout`

![](/img/docs/integrate/ecomm/shopify/shopify-setup-1.png)

![](/img/docs/integrate/ecomm/shopify/shopify-setup-2.png)

2. Scroll down to the `Additional Scripts` section and paste the code from **Step 3** above into the `Order status page` text box. Click **Save** when done.

![](/img/docs/integrate/ecomm/shopify/shopify-setup-3.png)

## Manual Payment method

1. Go back to Shopify. Select `Settings` then click on `Payments`

![](/img/docs/integrate/ecomm/shopify/shopify-setup-4.png)

2. Scroll down to the `Manual payment methods`. Click on `Add manual payment method` and then select `Create custom payment method`.

![](/img/docs/integrate/ecomm/shopify/shopify-setup-5.png)

3. Fill in the required details to setup the manual payment method:
   - Custom payment method name: `Card payment (via paymennt.com)`
   - Additional details: `Complete your purchase using a credit or debit card`
4. Click `Activate` when done

![](/img/docs/integrate/ecomm/shopify/shopify-setup-6.png)
