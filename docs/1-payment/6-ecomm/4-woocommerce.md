---
title: woocommerce
---

<a className="button button--primary button--large" href="http://www.github.com/pointcheckout/woocommerce">
  View on GitHub
</a>

<br />
<br />

From downloading the plugin to requesting your first test payment, learn how to get started with the **paymennt** for WooCommerce plugin.

:::info
This guide assumes that you have already [set up WooCommerce on your WordPress instance](https://docs.woocommerce.com/document/installing-uninstalling-woocommerce/).
:::

## before you start

### remove older plugin

1. Log in to WordPress as an administrator.
2. In the left menu, click Plugins > Installed Plugins.
3. Search for `PointCheckout` using the search box at the top. If you find one, click **Delete**, or click **Deactivate** and then **Delete**.

![](/img/docs/integrate/ecomm/woocommerce/woocommerce-1.png)

## install the plugin

### using plugin .zip file

1. Download the latest `pointcheckout-woocommerce-card-vX.X.X.zip` file [from Github](https://github.com/pointcheckout/woocommerce/releases/latest).
2. Log in to WordPress as an administrator.
3. In the left menu, click Plugins > Add New.
4. Click Upload Plugin.
5. Click Choose File, select the .zip then click Install Now. A success message is displayed when the plugin installation has finished.
6. Click Activate Plugin.
7. Once the plugin is activated, you are taken to the Installed Plugins screen. You can now configure WooCommerce.

## configure the plugin

1. Log in to WordPress as an administrator.
2. In the left menu, click _WooCommerce_ > _Settings_ > _Payments_.
3. Find the PointCheckout payment method and click on **Manage**

![](/img/docs/integrate/ecomm/woocommerce/woocommerce-2.png)

4. Tick **Enable card payments via PointCheckout**
5. Choose the payment **Title** and **Description**. This will be displayed to customers on your checkout page.
6. Set the Mode to **Testing**.
7. Enter your **API Key** and **API Secret** as provided by your account manager.
8. Click **Save changes**.

That's it! You're ready to start testing.

## test the plugin

1. Go to your shop's public URL and add a product to your cart.
2. Go to your cart then proceed
   to the checkout.
3. Enter the required customer and billing details.
4. Select the **PointCheckout payment method**.
5. Click **Place Order**. You will now be redirected to **paymennt.com** payment page.
6. Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
7. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive an order confirmation email.
8. Log in to your Wordpress account as an administrator.
9. Click **WooCommerce** in the left menu. Your test order is displayed and has a status of `Processing`. This indicates that the payment has been successfully processed.
