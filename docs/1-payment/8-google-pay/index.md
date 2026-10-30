---
title: Google Pay™ on hosted checkout
sidebar_label: Google Pay™
---

**Google Pay™** lets your customers pay with the cards saved in their Google Account, without typing in their card details. When Google Pay™ is enabled on your account, **paymennt** shows the Google Pay™ button on the [Hosted Checkout](../3-hosted/index.md) payment page automatically.

**paymennt** is the payment processor for Google Pay™: we build the Google Pay™ payment request (including the `gateway` and `gatewayMerchantId` tokenization values), receive the encrypted payment token, decrypt it and process the payment. You don't need to integrate with the Google Pay™ API, register with the Google Pay & Wallet Console or get a Google merchant ID.

## Enable Google Pay™

1. Contact **paymennt** support to enable Google Pay™ for your merchant account.
2. Once enabled, the Google Pay™ button is shown on the hosted checkout page to customers whose browser and device support Google Pay™ and who have an eligible card saved in their Google Account.
3. No changes are needed in your [Hosted Checkout](../3-hosted/index.md) integration. Payments made with Google Pay™ follow the same checkout flow and [checkout statuses](../3-hosted/index.md#checkout-statuses) as card payments.

:::warning Adhere to Google policies

All merchants are required to follow the [Google Pay and Wallet API's Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the terms defined in the [Google Pay Terms of Service](https://payments.developers.google.com/terms/sellertos).

:::

## Supported cards

Google Pay™ payments are accepted for the following card networks, based on the card payment methods enabled for your account:

- Visa
- Mastercard
- American Express

## Authentication methods

Google Pay™ returns one of two kinds of card credentials. **paymennt** supports both:

| Authentication method | Description                                                                                                                         | 3-D Secure                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **CRYPTOGRAM_3DS**    | A device token (network token) stored on an Android device, authenticated on the device by the customer.                           | Not required. The payment is processed with the cryptogram provided by Google Pay™.                    |
| **PAN_ONLY**          | A card saved in the customer's Google Account, used on any supported browser or device. The card details are returned without a CVV. | Always required. The customer is redirected to complete 3-D Secure authentication with the card issuer. |

## Customer details

The Google Pay™ payment sheet collects the following details from the customer:

- Email address
- Full billing address (name, street address, city, region, postal code and country)

These details are added to the checkout, the same way as for a card payment.

## Limitations

- Google Pay™ is available on the hosted checkout page only. It is not available in [Drop-in Frames](../4-frames/index.mdx) or the mobile SDKs.
- Google Pay™ is not offered for subscription checkouts.
- Google Pay™ is not shown if the checkout amount is above the Google Pay™ limit configured for your account.

## Learn more

- [Google Pay™ Web developer documentation](https://developers.google.com/pay/api/web/overview)
- [Google Pay™ Web integration checklist](https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist)
- [Google Pay™ Web brand guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines)

If your website mentions Google Pay™ or shows the Google Pay™ logo, use only the approved assets and follow the [Google Pay™ Web brand guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines).
