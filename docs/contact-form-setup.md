# Contact Form Setup Guide

This guide will help you set up the contact form functionality in your portfolio website using EmailJS.

## Overview

The contact form uses [EmailJS](https://www.emailjs.com/), which allows you to send emails directly from client-side JavaScript without needing a backend server. This is perfect for a static site hosted on platforms like Vercel or Netlify.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for a portfolio website

## Step 2: Connect an Email Service

1. In your EmailJS dashboard, go to "Email Services" and click "Add New Service"
2. Select your preferred email provider (Gmail, Outlook, etc.)
3. Follow the authentication steps
4. Give your service a name (e.g., "Portfolio Contact")
5. Note down the **Service ID** that appears (e.g., "service_abc123")

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard and click "Create New Template"
2. Design your email template using the variables from the contact form:
   - `{{user_name}}` - The name of the person contacting you
   - `{{user_email}}` - The email address of the person
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The actual message content
3. For reference, see the template example in `/docs/emailjs-template.html`
4. Save your template
5. Note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Note down your **Public Key** (e.g., "user_AbCdEf123456")

## Step 5: Configure Your Website

1. Create a `.env.local` file in the root of your project
2. Add the following variables with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart your development server if it's running

## Step 6: Test the Form

1. Start your Next.js application
2. Navigate to the contact section
3. Fill out the form and submit it
4. You should receive the email at the address connected to your EmailJS service
5. Check the success/error messages to ensure everything is working properly

## Troubleshooting

- If emails aren't sending, check the browser console for error messages
- Verify that your environment variables are correctly set
- Ensure your EmailJS service is properly authenticated
- Check your spam folder if emails aren't appearing in your inbox

## Security Note

While we're using environment variables, remember that on client-side applications, these values will be included in the built JavaScript and are technically visible to users. However, EmailJS has built-in protections to prevent abuse, such as rate limiting and domain restrictions.

For additional security, you can restrict your EmailJS service to only work from specific domains in your EmailJS dashboard.