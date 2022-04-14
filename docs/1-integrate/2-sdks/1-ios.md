---
title: iOS SDK
---

<a className="button button--primary button--large" href="http://www.github.com/pointcheckout/ios-sdk">
  View on GitHub
</a>

<br />
<br />

This shows the steps requires to use the **paymennt** iOS SDK for accepting card payments via the **paymennt.com** payment gateway in your iOS mobile application.

## SDK Flow

The **paymennt** iOS SDK requires three distinct steps for you to accept card payments:

1. Create a new Device Checkout
2. Initiate the SDK's PointCheckoutClient using the provided checkout key
3. Query the API for the payment status

This diagram shows the overall payment and data flow in order to accept payments using the **paymennt** mobile SDK

![Sequence Diagram](/img/docs/integrate/sdks/sdk-flow.png)

## Installation

We support CocoaPods. To install the **paymennt** iOS SDK:

1. Add PointCheckoutSdk to your project by adding the following line to your `Podfile`

```
pod 'PointCheckoutSdk', :git => 'https://github.com/pointcheckout/ios-sdk.git', :tag=> v${version}
```

:::note
replace ${version} with the latest version of the SDK, you can check all available versions [here](https://github.com/pointcheckout/merchant-ios-sdk/releases). Example: <br />
`pod 'PointCheckoutSdk', :git => 'https://github.com/pointcheckout/ios-sdk.git', :tag=> 'v1.3'`
:::

2. Execute `pod install` inside the project directory.

3. Re-build the project.

## Using the SDK

### Device Checkout request

Send new checkout request to [**paymennt**'s API](/api/#operation/create-web-checkout), check the [documentation](/docs/integrate/merchant-api/mobile-payment) for more details.

:::danger SERVER API CALL
API calls made to the **paymennt** API endpoints should be made from your server. You should **NEVER** include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed.
:::

### Create a new PointCheckoutClient

Create an object of PointCheckoutClient:

```swift
var pcoClient = PointCheckoutClient();
```

| Environment              | Description                              |
| ------------------------ | ---------------------------------------- |
| `Enviornment.PRODUCTION` | Use this for accepting customer payments |
| `Enviornment.TEST`       | Use this during integration testing      |

:::tip
Keep a reference of the created client to reuse the same instance
:::

### Start the Payment Process

To commence the payment process, you must call the static `pay` method of the `PointCheckoutClient`. This method accepts 3 parameters:

- **`viewController`** is a UIViewController that is calling the `pay` function
- **`checkoutKey`** received in the [Device Checkout Request](#device-checkout-request)
- **`delegate`** that will be called on payment update or cancellation

```swift
pcClient.pay(controller: viewController, checkoutKey: strCheckoutKey, delegate: callback)
```

Calling the `pay` function will open a modal where the user will be able to complete the payment in a secure manner.

### Listen to Payment Events

The `PointCheckoutPaymentDelegate` has two callbacks:

1. `onUpdate` which is called the checkout status is updated (paid, cancelled, failed .etc). You **MUST** call **paymennt** API to fetch the new status of the checkout to verify that its been successfully paid.
2. `onDismiss` which is called if the user closes the modal by clicking on dismiss or close button.

```swift
import UIKit
import PointCheckoutSdk

class ViewController: UIViewController, PointCheckoutPaymentDelegate{
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    func onUpdate(){
        print("UPDATE CALLBACK")
    }

    func onDismiss(){
        print("USER CLOSED THE MODAL")
    }
}
```

### Retrieve Checkout Status

Retrieve checkout details from [**paymennt**'s API](/api/#operation/get-checkout), check the [documentation](/docs/integrate/merchant-api/mobile-payment) for more details.

:::danger SERVER API CALL
API calls made to the **paymennt** API endpoints should be made from your server. You should **NEVER** include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed.
:::

## API References

**1. New Device Checkout**

[**Instructions**](/api/#operation/get-checkout) / [**API Details**](/api/#operation/get-checkout)

**2. Get Checkout Details**

[**Instructions**](/api/#operation/get-checkout) / [**API Details**](/api/#operation/get-checkout)
