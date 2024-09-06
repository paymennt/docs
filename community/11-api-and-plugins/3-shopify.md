---
title: Shopify Integration
sidebar_label: Shopify
---

## Create a custom app in Shopify

1. In your Shopify Settings page, go to “Apps and sales channels” setting, click “Develop App” on the top right corner, and then click “Create App”.
2. Fill in the app name and press on Create app.
3. From the Configuration tab, grant Read and Write permission for Orders and click on Save at the top right corner then click Create app in the confirmation prompt.
4. Navigate to API credentials tab and press on the Install app.
5. Copy the Admin API access token from the paymennt application as shown below. We will use this in the next section.

## Configure paymennt

### Paymennt web console

To complete this integration, you must first log in to the paymennt web console.

### Shopify configuration

From the side menu, Select "Integrations" -> "Shopify Integration".

## Connecting your Shopify account

1. Click on "Connect to Shopify".
2. Fill out the form then click on "Connect".
    * Endpoint: your shop's domain.
    * Token: The Admin API access token copied from Step 5 in creating the custom app.
3. Copy the HTML code shown on the confirmation page. We will use this in the next steps.

## Shopify additional scripts

1. Go back to Shopify.
2. Select Settings then click on Checkout.
3. Scroll down to the Additional Scripts section and paste the code from Step 3 above into the Order status page text box.
4. Click Save when done.

## Manual payment method

1. Go back to Shopify. Select Settings then click on Payments.
2. Scroll down to the Manual payment methods. Click on Add manual payment method and then select Create custom payment method.
3. Fill in the required details to set up the manual payment method:
    * Custom payment method name: Card payment (via paymennt.com)
    * Additional details: Complete your purchase using a credit or debit card
4. Click Activate when done
