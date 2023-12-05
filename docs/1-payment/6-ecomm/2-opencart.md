---
title: opencart
---

<a className="button button--primary button--large" href="https://github.com/paymennt/opencart"> View on GitHub </a>

<br />
<br />

From downloading the plugin to requesting your first test payment, learn how to get started with the **paymennt** for OpenCart plugin.

:::info
This guide assumes that you have already [set up OpenCart](https://docs.opencart.com/installation/).
:::

## Install/Update the plugin

### using plugin .zip file

1. Log in to your OpenCart administrator panel.
2. Download the latest release **paymennt.ocmod.zip** file from the [releases section](https://github.com/paymennt/opencart/releases/latest)
3. In the admin page of your store, go to extensions->installer->upload. 
   ![extention installer](/img/docs/integrate/ecomm/opencart/opencart-0.png)
4. Choose the downloaded **paymennt.ocmod.zip** file

## configure the plugin

1. Log in to OpenCart administrator panel.
2. From the side menu, choose **Extensions** and from the Extension type select, choose **Payments**.
   ![extensions](/img/docs/integrate/ecomm/opencart/opencart-1.png)
3. From the extension list, Install the extension named Paymennt.com. After installation, press edit to configure the payment extension.
   ![install extension](/img/docs/integrate/ecomm/opencart/opencart-3.png)
4. Toggle the **Status** to enabled.
5. Set the Mode to **Testing**.
6. Enter your **API Key** and **API Secret** as provided by your account manager.
7. Enter the **Public key** as provided.
8. Select your **Payment type**.
   ![configuration](/img/docs/integrate/ecomm/opencart/opencart-4.png)
9. Review and update the remaining configuration required.
10. Click on the **Save** icon on the top of the settings edit page.

That's it! You're ready to start testing.

## test the plugin

1. Go to your shop's public URL and add a product to your cart.
2. Go to your cart then proceed
   to the checkout.
3. Enter the required customer and billing details.
4. Select **Paymennt** as payment method.
5. Click **Confirm Order**. You will now be redirected to the **paymennt.com** payment page.
6. Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
7. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a valid email address in the billing details, you'll also receive an order confirmation email.
8. Log in to your OpenCart administrator panel.
9. Click **Sales > Orders** in the left menu. Your test order is displayed and has configured `Payment Success Status` status. This indicates that the payment has been successfully processed.
