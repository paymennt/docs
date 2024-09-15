---
title: painless payments with zoho books and paymennt
sidebar_label: zoho books
---

Make getting paid faster and easier than ever! **paymennt** is now integrated with Zoho Books. Zoho Books is online accounting software that manages your finances, automates business workflows, and helps you work collectively across departments.

This integration will make it easier for your customers to pay your Zoho Books invoices online using **paymennt**.

:::caution Before you start
Your user account must have Administrator permission to access this service
:::

## Log in to the paymennt Web Console

To complete this integration, you must first login to the [paymennt Web Console](/guides/account-management/desktop-login)

## Access Zoho Integration configuration

From the side menu, Select **"Integrations"** -> **"Zoho Books"** as shown in the image below

![admin zoho](/img/docs/integrate/3rd-party/zoho/admin.png)

## Connecting your Zoho Books account

1. Click on **"connect to Zoho Books"** begin the integration

![admin zoho connect](/img/docs/integrate/3rd-party/zoho/connect.png)

2. Select the Xero **Organization** you would like to link to this **paymennt** account.

| **paymennt** supports connecting 1 single Zoho Organization per **paymennt** account. If you manage multiple **paymennt** clients and have multiple Organizations available to your Zoho account, make sure all of them are selected. You can specify which organization is linked to this specific **paymennt** account in the next step.

![zoho authorize](/img/docs/integrate/3rd-party/zoho/authorize.png)

3. (Multiple Organizations Only) Selecting organization to link to your **paymennt** Account

If you have multiple organizations selected in _Step 2_ above, you will be prompted to select which one you want to link to your **paymennt** account. If you have only one selected Organization, you will not see a prompt.

## Adding a Payment Link to your Zoho Invoices

The next steps explain how to add a **"Pay Now"** link to your Zoho PDF invoices

1. Copy **Custom payment URL** from the **"Zoho Books"** screen on your **paymennt** account.

![admin zoho connected](/img/docs/integrate/3rd-party/zoho/connected.png)

2. Login to your ** [Zoho Books Account](https://accounts.zoho.com/signin?servicename=ZohoBooks) **

3. Click **Settings**, select **Templates**, then click **Invoices**. Select the Invoice Template you wish to add payment link to and click **Edit**.

![zoho invoices](/img/docs/integrate/3rd-party/zoho/invoice_1.png)

4. On the left side, select **Footer**, then click **Add your bank details**

![zoho invoices](/img/docs/integrate/3rd-party/zoho/invoice_2.png)

5. In the text area, type ** "Pay your invoice online here" ** or any other phrase you would like to display on your invoice to instruct clients to pay. Next, highlight the whole sentence or part of it and click on the **Create Link** icon as shown below.

![zoho invoices](/img/docs/integrate/3rd-party/zoho/invoice_3.png)

6. In the URL field, paste the URL copied from _Step 1_ above. Once added, click **OK** then click **Preview**. Now this statement will show at the bottom of your invoices.

![zoho invoices](/img/docs/integrate/3rd-party/zoho/invoice_4.png)

7. Click **Save** to save your changes

8. Click **Settings**, select **Emails**, then click **Invoice Notifications**. Select the Invoice Template you wish to add payment link to and click **Edit**.

![zoho email](/img/docs/integrate/3rd-party/zoho/email_1.png)

9. Scroll and click on the **Pay Now** button in the email template. Replace the URL at the top with the URL copied in _Step 1_ above. Once done, click **Save**.

![zoho email](/img/docs/integrate/3rd-party/zoho/email_2.png)
