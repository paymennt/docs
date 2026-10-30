---
title: Google Pay™ on hosted checkout
sidebar_label: Google Pay™
---

**Google Pay™** is available on the **paymennt** [Hosted Checkout](../3-hosted/index.md) payment page. **paymennt** handles the Google Pay™ integration and processes the payment, so no changes are needed in your integration.

:::warning Adhere to Google policies

All merchants are required to follow the [Google Pay and Wallet API's Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the terms defined in the [Google Pay Terms of Service](https://payments.developers.google.com/terms/sellertos).

:::

## Supported cards

Visa, Mastercard and American Express.

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

## Brand guidelines

See the [Google Pay™ Web brand guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines).
