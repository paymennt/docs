---
title: android sdk
---

<a className="button button--primary button--large" href="http://www.github.com/pointcheckout/android-sdk">
  View on GitHub
</a>

<br/>
<br/>

This documentation highlights the requirements for using the **paymennt** Android SDK. Throughout this document, we aassume that you are using Android Studio for your Android development.

:::caution MINIMUM REQUIREMENTS
The minimum supported Android API level for the SDK is **16 (KitKat)**, however, setting the minimum Android API level to **26 (Pie)** is recommended.
:::

:::note
The SDK uses Google's [SafetyNet API](https://developer.android.com/training/safetynet/attestation) for security, setting minimum Android API to lower than 26 will prevent it from functioning.
:::

## Setting up the SDK

### JitPack Repository

Include the [JitPack.io](https://jitpack.io) repository to your Android project in `your_project_home/build.gradle`

```jsx
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }
    flatDir {
      dirs 'libs'
    }
  }
}
```

### paymennt SDK Dependency

Include the **paymennt** Android SDK dependency to your project in `your_project_home/app/build.gradle`

```jsx
dependencies {
  implementation 'com.github.pointcheckout:android-sdk:v1.3'
}
```

### Required Permissions

The **paymennt** SDK requires the following permissions. Please add them to your AndroidManifest.xml file if they are not already present:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

### Adding SafetyNet Support

You must add Google's SafetyNet API to your `app/build.gradle`. For details on how to add SafetyNet to your project, follow the instructions found in [this guide](https://developers.google.com/android/guides/setup).

## SDK Flow

The **paymennt** Android SDK requires three distinct steps for you to accept card payments:

1. Create a new mobile Checkout
2. Initiate the PointCheckoutClient from the SDK using the provided checkout key
3. Query the API for the payment status

This diagram shows the overall payment and data flow in order to accept payments using the **paymennt**
mobile SDK

![Sequence Diagram](/img/docs/integrate/sdks/sdk-flow.png)

## Using the SDK

### Create a new mobile checkout request

Send new checkout request to [Create mobile checkout](/api/#operation/create-mobile-checkout) API. Check [mobile payment integration guide](/docs/payment/mobile) for more details.

:::danger SERVER API CALL
API calls made to the **paymennt** API endpoints should be made from your server. You should **NEVER** include your API keys in your mobile application. A malicious user can gain access to your account if those keys are exposed.
:::

### Create a new the PointCheckoutClient

Create an object of PointCheckoutClient pointing to the required environment.

```jsx
PointCheckoutClient pcoClient = new PointCheckoutClient(environment);
```

| Environment              | Description                              |
| ------------------------ | ---------------------------------------- |
| `Enviornment.PRODUCTION` | Use this for accepting customer payments |
| `Enviornment.TEST`       | Use this during integration testing      |

:::tip
Keep a reference of the created client to reuse the same instance
:::

#### Initialize

Initialize the created `PointCheckoutClient` using:

```jsx
pcoClient.initialize(context);
```

:::tip
Invoke the `initialize` method when the app starts as it requires 2-3 seconds to initialize the SDK. If the client is not initialized and `pay` is called, the client will call initialize internally before calling pay resulting in delay.
:::

### Start the Payment Process

To commence the payment process, you must call the static `pay` method of the `PointCheckoutClient`. This method accepts 3 parameters:

- **`context`** which refers to the current activity context
- **`checkoutKey`** received in the [Create mobile checkout](/api/#operation/create-mobile-checkout) API call.
- **`listener`** that will be called on payment update or cancellation

```jsx
pcClient.pay(context, checkoutKey, new PointCheckoutEventListener() {
                @Override
                public void onUpdate() {
                    System.out.println("UPDATE CALLBACK");
                }

                @Override
                public void onDismiss() {
                    System.out.println("USER CLOSED THE MODAL");
                }
        });
```

Calling the `pay` function will open a modal where the user will be able to complete the payment in a secure manner.

### Listen to Payment Events

The `PointCheckoutEventListener` event listener has two callbacks:

1. `onUpdate` which is called the checkout status is updated (paid, cancelled, failed .etc). You **MUST** call **paymennt** API to fetch the new status of the checkout to verify that its been successfully paid.
2. `onDismiss` which is called if the user closes the modal by clicking on close button.

### Retrieve Checkout Status

Retrieve checkout status and details using the [Get checkout](/api/#operation/get-checkout) API call. Check [mobile payment integration guide](/docs/payment/mobile) for more details.

:::danger SERVER API CALL
API calls made to the **paymennt** API endpoints should be made from your server. You should **NEVER** include your API keys in your mobile application. A malicious user can gain access to your account if those keys are exposed.
:::

## API References

### New Mobile Checkout

[**Instructions**](/docs/payment/mobile) / [**API Details**](/api/#operation/create-mobile-checkout)

### Get Checkout Details

[**API Details**](/api/#operation/get-checkout)
