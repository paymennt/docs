---
title: Shopify Integration
sidebar_label: Shopify
---

## Create a custom app in Shopify

1. In your Shopify Setting page, go to “Apps and sales channels” setting, and click “Develop App” on the top right corner, and then click “Create App”.

<!-- ![Create App](/img/guides/ecommerce-integration/e-commerce-shopify-create-create-app.png) -->

2. Fill in the app name and and press on Create app.

<!-- ![Fill in the app name](/img/guides/ecommerce-integration/e-commerce-shopify-create-fill-in-app-name.png) -->

3. From Configuration tab, grant Read and write permission for Orders and click on Save at the top right corner then click Create app in the confirmation prompt.

<!-- ![App and Sales Channel > App Development](/img/guides/ecommerce-integration/e-commerce-shopify-create-confirmation-popup.png)

![Paymennt1](/img/guides/ecommerce-integration/e-commerce-shopify-create-confirmation-popup-2.png)

![Save](/img/guides/ecommerce-integration/e-commerce-shopify-create-confirmation-popup-3.png) -->

4. Navigate to API credentials tab and press on Install app.

<!-- ![Install App](/img/guides/ecommerce-integration/e-commerce-shopify-create-install-app.png) -->

5. Copy the Admin API access token from the paymennt application as shown below. We will use this in the next section.

<!-- ![Admin API access token](/img/guides/ecommerce-integration/e-commerce-shopify-create-admin-api-access-token.png) -->

## Configure paymennt

### Paymennt web console

To complete this integration, you must first login to the paymennt web console

### Shopify Configuration

From the side menu, Select "Integrations" -> "Shopify Integration" as shown in the image below

## Connecting your Shopify account

1. Click on "connect to Shopify"
2. Fill the form with then click on "Connect"
    * Endpoint: your shop's domain
    * Token: the Admin API access token copied from Step 5 in creating the custom app
3. Copy the HTML code shown on the confirmation page. We will use this in the next steps.

## Shopify Additional Scripts

1. Go back to Shopify.
2. Select Settings then click on Checkout

<!-- ![Checkout](/img/guides/ecommerce-integration/e-commerce-shopify-additional-script-checkout.png) -->

3. Scroll down to the Additional Scripts section and paste the code from Step 3 above into the Order status page text box.
4. Click Save when done.

<!-- ![Save](/img/guides/ecommerce-integration/e-commerce-shopify-additional-script-save.png) -->

## Manual Payment method

1. Go back to Shopify. Select Settings then click on Payments.

<!-- ![Manual Payments](/img/guides/ecommerce-integration/e-commerce-shopify-manual-payment-methods-payment.png) -->

2. Scroll down to the Manual payment methods. Click on Add manual payment method and then select Create custom payment method.

<!-- ![Custom Payments](/img/guides/ecommerce-integration/e-commerce-shopify-manual-payment-methods-custom-payments.png) -->

3. Fill in the required details to setup the manual payment method:
    * Custom payment method name: Card payment (via paymennt.com)
    * Additional details: Complete your purchase using a credit or debit card
4. Click Activate when done

<!-- ![Activate](/img/guides/ecommerce-integration/e-commerce-shopify-manual-payment-methods-activate.png) -->