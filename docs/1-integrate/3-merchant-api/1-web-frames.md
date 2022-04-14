---
title: Integrate your website with paymennt
sidebar_label: Website / E-Commerce (Frames)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Make getting paid faster and easier than ever! **paymennt** APIs provide an easy way to let your customers pay for their orders easily and securely.

Frames is an iframe solution that handles payment information. Your customer inputs their card details directly into our iframes, then we send you a token representing of the card details, so you can request a payment.

## Integration flow

1. You embed the Frames payment form in your website.
2. Your customer enters payment details directly on your checkout page.
3. We process your customer's sensitive information and return a token representing those details. This process is called tokenization.
4. Your site backend system processes the order and makes the [Create token payment](/api/#operation/create-token-payment) API call to **paymennt** and obtains a checkout ID and a redirect URL.
5. Redirect the customer to the 3D-Secure redirect URL from the [Create token payment](/api/#operation/create-token-payment) API call.
6. In any of the cases in the previous step, the customer is finally redirected back to your website using the parameter `returnUrl` specified in the [Create token payment](/api/#operation/create-token-payment) API call.
7. Once the customer has been redirected back to your website, make the [Get payment](/api/#operation/get-payment) API call to retrieve the status.
8. Based on the status of payment retrieved from the [Get payment](/api/#operation/get-payment) API call, you should update your order status on your backend system.

![Website integration flow](/img/docs/integrate/merchant-api/web-payment-frames-flow.png)

- Make sure to check the [Website Checklist](/guides/developer/website-checklist) before going live.

That's it! You're ready to start testing.

## Integration details

1. Import PaymenntJS JavaScript file into the payment page

```html
<script src="https://pay.paymennt.com/static/js/paymennt-frames.js"></script>
```

2. In your page JavaScript initialize PaymenntJS with your public key obtained from **paymennt**,

Sample code :

```js
PaymenntJS.init({
  publicKey: "{PAYMENNT_PUBLIC_KEY}",
  selector: "#paymennt-card-frame"
  mode: PaymenntJS.modes.LIVE,
  onTokenized: function (data) {
    // send data.token to server
  },
  onTokenizationFailed: function (data) {
    // show data.error message
  },
  onValidationUpdate: function (data) {
    if (data.valid) {
      // enable pay button;
    } else {
      // disable pay button;
    }
  },
});
```

3- In your page, add an empty `<div>` element and pass its selector to `PaymenntJS.init()` method
Example:

```html
<div id="paymennt-card-frame" class="card-frame"></div>
```

## Full example

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="app.js"
var payButton = document.getElementById("pay-button");
var errorMessage = document.querySelector(".error-message");
var infoMessage = document.querySelector(".info-message");

payButton.disabled = true;

PaymenntJS.init({
  publicKey: "pk_test_a941633441f48b73b9b9e1822227829a",
  mode: PaymenntJS.modes.TEST,
  onTokenized: function (data) {
    infoMessage.innerText = data.token;
  },
  onTokenizationFailed: function (data) {
    errorMessage.innerText = data.error;
  },

  onValidationUpdate: function (data) {
    payButton.disabled = !data.valid;
    if (!data.valid) {
      var message = null;
      for (var i = 0; i < data.validationErrors.length; ++i) {
        var fieldValidation = data.validationErrors[i];
        if (!message || fieldValidation.field === data.lastActiveField) {
          message = fieldValidation.message;
        }
      }
      if (!message) {
        message = data.error ? data.error : "Invalid card details";
      }
      errorMessage.innerText = message;
    } else {
      errorMessage.innerText = "";
    }
  },
});

payButton.addEventListener("click", function (event) {
  event.preventDefault();
  PaymenntJS.submitPayment();
});
```

</TabItem>
<TabItem value="html" label="Html">

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paymennt.com Frames</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div id="paymennt-frame" class="card-frame"></div>
    <p class="info-message"></p>
    <p class="error-message"></p>

    <button id="pay-button" type="submit">Pay</button>

    <script src="https://pay.paymennt.com/static/js/paymennt-frames.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

</TabItem>
<TabItem value="css" label="CSS">

```css title="style.css"
body {
  text-align: center;
}

#paymennt-frame {
  max-width: 370px;
  margin: 0 auto;
}

#pay-button {
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 500;
  height: 40px;
  width: 120px;
  background-color: #13395e;
  box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.4);
}

#pay-button:active {
  background-color: #0b2a49;
  box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.4);
}

#pay-button:hover {
  background-color: #15406b;
  box-shadow: 0 2px 5px 0 rgba(19, 57, 94, 0.4);
}

#pay-button:disabled {
  background-color: #697887;
  box-shadow: none;
}

#pay-button:not(:disabled) {
  cursor: pointer;
}

.card-frame {
  border: solid 1px #13395e;
  border-radius: 3px;
  width: 100%;
  padding: 5px;
  margin-bottom: 8px;
  height: 100px;
  box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.2);
}

.error-message {
  color: red;
  font-weight: 600;
}

.info-message {
  color: green;
  font-weight: 600;
}
```

</TabItem>
</Tabs>

## Test the Integration

1. Go to your website's add a products to your cart.
2. Go to your cart then proceed to the checkout, Enter the required customer and billing details ... .
3. Select the **paymennt.com payment method**.
4. Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
5. Check the status of the payment on your backend administration panel.

## Checkout Statuses

A checkout can have multiple statuses that describe the current state that the checkout is in.

| STATUS                 | DETAILS                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **PENDING**            | New Checkout. User has not completed the payment.                                                                         |
| **AUTHORIZED**         | The payment has been authorized, a subsequent Capture or Cancel payment API call is expected before the checkout Expires. |
| **PAID**               | This status is effective when a customer has successfully completed the payment associated with this checkout.            |
| **FAILED**             | Payment failed due to payment failure. **paymennt** failed to recover such a checkout process.                            |
| **CANCELLED**          | User cancelled the checkout process and returned to the merchant page.                                                    |
| **EXPIRED**            | Checkout has expired without being processed                                                                              |
| **REFUNDED**           | Checkout has been fully refunded to the Shopper                                                                           |
| **PARTIALLY_REFUNDED** | Checkout have been partially refunded to the shopper                                                                      |
