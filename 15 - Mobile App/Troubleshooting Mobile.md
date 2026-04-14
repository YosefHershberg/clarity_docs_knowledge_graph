---
title: Mobile App Troubleshooting and FAQ
tags:
  - howto
  - reference
aliases:
  - Mobile Troubleshooting
  - Mobile FAQ
canonical: true
audience: everyone
domain: mobile
---
# Mobile App Troubleshooting and FAQ

This note covers frequently asked questions, known issues, and the Settings page configuration for the Clarity Mobile App.

> [!NOTE]
> See also [[Admin Technical Details]] for administrator-specific configuration and authentication options.

---

## Settings Page

The **User Settings** page in the Clarity Mobile App displays the user's avatar and full name. It also allows you to set the **default landing page** for the application.

- The landing page preference is saved in your user profile within the mobile app.
- You do not require additional access rights to view the Settings page.
- If your default landing page becomes inaccessible due to updated access rights, Clarity automatically displays the first available menu link.

**To change the default landing page:**

1. Tap the **Menu** icon.
2. Tap **Settings**.
3. Select the desired landing page from the list.
4. The setting is saved immediately.

---

## Frequently Asked Questions and Troubleshooting

### Error Message: "Your time tracking settings are not correct..."

If the app detects missing settings, you may see this error. Verify the following:

**As a Project Manager:**
- Open the project properties in **Classic PPM**.
- Ensure the project is **Active**, **Track Mode** is set to **PPM**, and **Open for Time Entry** is selected.
- Users can only record time when all three conditions are met.

**As a Resource Manager:**
- Open the resource properties in **Classic PPM**.
- Ensure the resource is **Active**, **Track Mode** is set to **PPM**, and **Open for Time Entry** is selected.

---

### What Access Rights Are Required?

**To submit timesheets:**

| Access Right | Type |
|---|---|
| Resource - Enter Time | Instance |
| Timesheets - Navigate | Global |

**To approve timesheets:**

| Access Right | Type |
|---|---|
| Timesheets - Navigate | Global |
| Timesheets - Approve | OBS, Instance, or Global |

> [!IMPORTANT]
> Starting Clarity Mobile App 3.2.3, mobile-specific access rights are no longer used to limit menu options. Users see all menu items but can only act if they have the corresponding Clarity-specific access rights.

---

### I Cannot Enter My Time for a Task

You can only enter time on an **open** or **returned** timesheet.

- If the timesheet is already **approved**: Contact your administrator.
- If the timesheet is already **submitted**: Contact your supervisor to return the timesheet.

---

### I Cannot Copy or Delete a Task

You can only copy or delete a task on an **open** or **returned** timesheet.

**To copy or delete a task:**
1. Open the timesheet.
2. Swipe **left** on the task to reveal the Copy and Delete options.

---

### I Cannot Submit My Timesheet

When you tap **Actions**, the Submit option only appears for **open** or **returned** (and corrected) timesheets.

- A timesheet in **submitted** or **approved** status cannot be submitted again.
- Check whether a **Timesheet Rules** error is preventing submission — look for the error icon in the top-right corner of the timesheet.

---

### The App Shows "No Internet Connection"

The Clarity Mobile App requires a network connection and **cannot be used offline**.

**Steps to resolve:**
- Move toward a wireless access point or hotspot.
- Contact your data provider if mobile data is unavailable.
- Tap **Try Again** once connectivity is restored.

> [!TIP]
> Without connectivity, you cannot enter timesheet values or edit task details. The app must be online at all times.

---

### The App Shows "Timesheet Not Submitted"

This error may occur if:
- Your connection dropped after tapping **Submit**.
- The backend server lost its connection.
- A database error occurred.

**Resolution:** Wait a few minutes and try submitting again. If the issue persists, contact your administrator.

---

### What Kind of Performance Can I Expect?

- Most user actions complete in **under three seconds**.
- Some actions complete in **under one second**.
- The slowest scenario (loading 100 tasks) may take approximately **20 seconds**.

> [!NOTE]
> Performance is also affected by network bandwidth, background OS activity, and device health.

---

### Match Your Application Locale Setting With Your Mobile App Locale

If your Classic PPM locale uses **commas instead of decimal points** (e.g., French locale), set your **mobile device locale** to match your Classic PPM locale.

This ensures the correct decimal separator is available on the numeric keypad when entering time.

---

### How Do I Get Updates for the Clarity Mobile App?

- **Manual update:** Open the Apple App Store or Google Play and check for available updates.
- **Automatic update:** Enable the **Auto-update apps** OS-level setting on your Android or iOS device.

---

## Related
- [[Admin Technical Details]]
- [[Timesheets Mobile]]
- [[_MOC Mobile App]]

%%Source: p3195-3200%%
