---
title: Woocommerce Integration
sidebar_label: Woocommerce
---

>View on [GitHub](http://www.github.com/pointcheckout/woocommerce)

From installing the plugin to requesting your first test payment, learn how to get started with the paymennt for the WooCommerce plugin.

:::info

This guide assumes that you have already [set up WooCommerce on your WordPress instance](https://woocommerce.com/document/installing-uninstalling-woocommerce/).

:::

:::tip

To learn about the Wocommerce Plugin integation process in detail, see [GitHub](https://github.com/pointcheckout/woocommerce).

:::

## Before you start​

If you are using the Pointcheckout plugin/ Paymennt.com plugin older than version 2.1.0, remove the plugin by following steps:

1. Log in to **WordPress** as an administrator.
2. In the left menu, click **Plugins > Installed Plugins**.
3. Search for **PointCheckout** using the search box at the top. If you find one, click **Delete**, or click **Deactivate** and then **Delete**.

![Remove Plugin](/img/guides/ecommerce-integration/e-commerce-wocommerce-remove-older-plugin-if-present.png)

## Install the plugin​ from the WordPress marketplace

**Paymennt** plugin is an approved WordPress plugin, available in WordPress marketplace for easy installation.

1. Log in to **WordPress** as an administrator.
2. In the left menu, click **Plugins > Add New**.
3. On the **Add Plugins** page, search for **Paymennt** in right search bar and the Paymennt plugin will appear.

![Install Plugin](/img/guides/ecommerce-integration/e-commerce-wocommerce-install-the-plugin.png)

4. Click **Install Now**.
5. Once the plugin installation is complete, click **Activate**.
6. On activation, the plugin will be ready to be configured.

## Configure the plugin​

1. Log in to **WordPress** as an administrator.
2. In the left menu, click **WooCommerce > Settings > Payments**.
3. Find the Paymennt method and click on **Manage**.

![Configure Plugin - Manage](/img/guides/ecommerce-integration/e-commerce-wocommerce-configure-the-plugin-manage.png)

4. Tick **Enable card payments via Paymennt**.
5. Choose the payment **Title** and **Description**. This will be displayed to customers on your checkout page.
6. Set the **Mode** to **Testing**.
7. Enter your **API Key**, **API Secret** and **Public Key** as provided by your account manager.

![Congiure Plugin - Keys](/img/guides/ecommerce-integration/e-commerce-wocommerce-configure-the-plugin-api-key.png)

8. Select the type of payment you need:
    * Select **Drop-In Frames** if you want an embedded payment frame on checkout page itself.
    * Select **Hosted Checkout** if you want user to enter payment details on a separate page.

![Cofigure Plugin - Hosted Checkout](/img/guides/ecommerce-integration/e-commerce-wocommerce-configure-the-plugin-self-hosted-checkout.png)

9. Click **Save changes**.

That's it! You're ready to start testing.

## Test the plugin​

1. Go to your shop's public URL and add a product to your cart.
2. Go to your cart then proceed to the checkout.
3. Enter the required customer and billing details.
4. Select the **Credit Card (via Paymennt)** method.
5. For embedded **Drop-In Frames** payment, enter the card deatils first and then click **Place Order**, the payment will get processed (with or without 3D-secure redirect depending on the transaction). For **Hosted Checkout** payment, click **Place Order** and you will now be redirected to **paymennt.com** payment page, enter the details and click **Pay**.
6. In case of successful payment, order confirmation page shows up, else you will be asked to checkout again. If you entered a real email address in the billing details, you'll also receive an order confirmation email.
7. Log in to your **Wordpress** account as an administrator.
8. Click **WooCommerce** in the left menu. Your test order is displayed and has a status of **Processing**. This indicates that the payment has been successfully processed.

:::important

Use the following card details for test:

* Number: 4242 4242 4242 4242
* Expiry date: 12/25
* CVV: 100
* Name: TEST USER

:::
