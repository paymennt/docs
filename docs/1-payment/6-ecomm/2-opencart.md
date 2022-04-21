---
title: opencart
---

<a className="button button--primary button--large" href="http://www.github.com/pointcheckout/opencart"> View on GitHub </a>

<br />
<br />

From downloading the plugin to requesting your first test payment, learn how to get started with the **paymennt** for OpenCart plugin.

:::info
This guide assumes that you have already [set up OpenCart](https://docs.opencart.com/installation/).
:::

## install/Update the plugin

### using plugin .zip file

1. Log in to your OpenCart administrator panel.
2. Download the latest release **pointcheckout-opencart-x.x.x.ocmod.zip** file from the [releases section](https://github.com/pointcheckout/opencart/releases)
3. In the admin page of your store, go to extensions->installer->upload
4. Choose the downloaded **pointcheckout-opencart-x.x.x.ocmod.zip** file

## configure the plugin

1. Log in to OpenCart administrator panel.
2. From the side menu, choose **Extensions** and from the Extension type select, choose **Payments** .
   ![extensions](/img/docs/integrate/ecomm/opencart/opencart-1.png)
3. From the extension list, Install the extension named PointCheckout Card Payment then press edit to configure your payment extension.
   ![install extension](/img/docs/integrate/ecomm/opencart/opencart-2.png)
4. Change **Enable Card Payment** to **Enabled**
5. Set the Mode to **Testing**.
6. Enter your **API Key** and **API Secret** as provided by your account manager.
7. Review and update the remaining configuration required.
8. Click on the **Save** icon on the top of the settings edit page.

That's it! You're ready to start testing.

## test the plugin

1. Go to your shop's public URL and add a product to your cart.
2. Go to your cart then proceed
   to the checkout.
3. Enter the required customer and billing details.
4. Select the **PointCheckout payment method**.
5. Click **Confirm Order**. You will now be redirected to the **paymennt.com** payment page.
6. Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
7. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive an order confirmation email.
8. Log in to your OpenCart administrator panel.
9. Click **Sales > Orders** in the left menu. Your test order is displayed and has configured `Payment Success Status` status. This indicates that the payment has been successfully processed.
