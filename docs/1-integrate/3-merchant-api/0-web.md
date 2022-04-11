---
title: Integrate your website with PointCheckout
sidebar_label: Website / E-Commerce
---

Make getting paid faster and easier than ever! PointCheckout APIs provide an easy way to let your customers pay for their orders easily and securely.

## Integration flow

1. When a customer is ready to pay for their order/shopping cart on your website, a new payment method “Pay using Cards / PointCheckout” is presented.
   * The button label can be anything of your choice, .
2. On submitting the payment method selection page with “Pay using Card / Pointcheckout” option is selected, Your site backend system processes the order and makes the [Create web checkout](/api/#operation/create-web-checkout) API call to PointCheckout & obtains a checkout ID and a redirect URL.
3. On successfully obtaining the redirect URL from PointCheckout in the previous step, your system then redirects the customer to the obtained redirect URL.
4. In any of the cases in the previous step, the customer is finally redirected back to your website using the parameter `returnUrl` specified in the [Create web checkout](/api/#operation/create-web-checkout) API call.
5. Once the customer has been redirected back to your website from PointCheckout, make the [Get Checkout](/api/#operation/get-checkout) API call to retrieve the status.
6. Based on the status of payment retrieved from the [Get Checkout](/api/#operation/get-checkout) API call, you should update your order status on your backend system.

![Website integration flow](/img/docs/integrate/merchant-api/web-payment-flow.png)

* Make sure to check the [Website Checklist](/guides/developer/website-checklist) before going live.

That's it! You're ready to start testing.

## Test the Integration

1. Go to your website's add a products to your cart.
2. Go to your cart then proceed to the checkout, Enter the required customer and billing details ... .
3. Select the **PointCheckout payment method**.
4. submit the payment method selection form. You should be redirected to the PointCheckout payment page.
5. Enter the following card details:
    * Number: `4242 4242 4242 4242`
    * Expiry date: `12/25`
    * CVV: `100`
    * Name: `TEST USER`
6. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive a payment confirmation email.
7. Check the status of the payment on your backend administration panel.

## Checkout Statuses

A checkout can have multiple statuses that describe the current state that the checkout is in.

| STATUS                  | DETAILS |
|--                       |--|
| **PENDING**             | New Checkout. User has not completed the payment. |
| **AUTHORIZED**          | The payment has been authorized, a subsequent Capture or Cancel payment API call is expected before the checkout Expires. |
| **PAID**                | This status is effective when a customer has successfully completed the payment associated with this checkout. |
| **FAILED**              | Payment failed due to payment failure. PointCheckout failed to recover such a checkout process. |
| **CANCELLED**           | User cancelled the checkout process and returned to the merchant page. |
| **EXPIRED**             | Checkout has expired without being processed |
| **REFUNDED**            | Checkout has been fully refunded to the Shopper |
| **PARTIALLY_REFUNDED**  | Checkout have been partially refunded to the shopper |
