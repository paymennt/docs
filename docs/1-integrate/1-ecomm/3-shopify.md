---
title: Shopify
---

The following document guides you through accepting PointCheckout payments through [Shopify](https://www.shopify.com).

:::info
This guide assumes that you already have a paid [Shopify account](https://www.shopify.com).
:::

## Create a private app
1. In your Shopify, go to `Apps` > `Manage Private apps` (at the bottom of the page) and click `Create private app`. If private apps are disabled, enable private apps development.
![](/img/docs/integrate/ecomm/shopify/shopify-1.png)

2. Fill in the required application details then expand the Show inactive Admin API permissions:
    - Private app name: `PointCheckout`
    - Emergency developer email: `support@pointcheckout.com`

![](/img/docs/integrate/ecomm/shopify/shopify-2.png)

3. Grant `Read and write` permission for `Orders` and click on `Save` at the top right corner then click `Create app` in the confirmation prompt.

![](/img/docs/integrate/ecomm/shopify/shopify-3.png)

4. Copy the `Example URL` from the PointCheckout application as shown below. We will use this in the next section.

![](/img/docs/integrate/ecomm/shopify/shopify-4.png)

## Configure PointCheckout

### PointCheckout Web Console

To complete this integration, you must first login to the [PointCheckout Web Console](/guides/portal/login)

### Shopify Configuration

From the side menu, Select **"Integrations"** -> **"Shopify Integration"** as shown in the image below

![](/img/docs/integrate/ecomm/shopify/shopify-connect-1.png)

### Connecting your Shopify account

1. Click on **"connect to Shopify"**

![](/img/docs/integrate/ecomm/shopify/shopify-connect-2.png)

2. Paste the URL copied from **Step 4** in Creating a PointCheckout private app above in the popup and click **OK**

![](/img/docs/integrate/ecomm/shopify/shopify-connect-3.png)

3. Copy the HTML code shown on the confirmation page. We will use this in the next steps.

![](/img/docs/integrate/ecomm/shopify/shopify-connect-4.png)

## Shopify Additional Scripts

1. Go back to Shopify. Select `Settings` then click on `Checkout`

![](/img/docs/integrate/ecomm/shopify/shopify-setup-1.png)

2. Scroll down to the `Order processing` section and paste the code from **Step 3** above into the `Additional Scripts` text box. Click **Save** when done.

![](/img/docs/integrate/ecomm/shopify/shopify-setup-2.png)

## Manual Payment method

1. Go back to Shopify. Select `Settings` then click on `Payments`

![](/img/docs/integrate/ecomm/shopify/shopify-setup-3.png)

2. Scroll down to the `Manual payment methods`. Click on `Choose alternative payment` and then select `Create custome payment method`.

![](/img/docs/integrate/ecomm/shopify/shopify-setup-4.png)

3. Fill in the required details to setup the manual payment method:
    - Custom payment method name: `Card payment (via PointCheckout)`
    - Additional details: `Complete your purchase using a credit or debit card
4. Click `Save` when done

![](/img/docs/integrate/ecomm/shopify/shopify-setup-5.png)

## Testing
