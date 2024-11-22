---
title: User Flow
template: docs
nav_order: 4
---

# **User Flow**

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/gallery.css">

Upon logging into Print Bill Master as a User, the user will arrive at the User Dashboard which consists of a side navigation menu, a top navigation bar, and a main content area. The side navigation menu will contain links to the User Dashboard, Printer List, Maintenance Request, and Billing History pages. The top navigation bar will contain a dropdown menu for the user to log out of their account, as well as update their profile information.

<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/interface/sidebar_collapsed.png" alt="Sidebar Collapsed"></div>
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/interface/notifications_open.png" alt="Notifications Open"></div>
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/interface/settings_dashboard_expanded.png" alt="Settings Menu"></div>
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/interface/edit_profile_screen.png" alt="Edit Profile"></div>
</div>

## **Printer List**

The Printer List page will display a list of all the printers that are assigned to the user. Each panel can be expanded to view more details about the printer, including the model, serial number, and location. The user will be able to create a maintenance request for a printer by clicking on the "Create Maintenance Request" button.

<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/printers/printers_screen.png" alt="Printers Screen"></div>
</div>

<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/printers/printers_screen_expanded.png" alt="Printer Details"></div>
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/printers/printers_screen_maintenance_request_filled.png" alt="Maintenance Request Form"></div>
</div>

## **Maintenance Request**

The Maintenance Request page will allow the user to create a new maintenance request for a printer. The user will be prompted to select the printer for which they are creating the request, as well as to provide a description of the issue they are experiencing.

<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/maintenance_requests/requests_screen.png" alt="Requests Screen"></div>
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/maintenance_requests/requests_screen_form_active.png" alt="Request Form Active"></div>
</div>

## **Printer Tracking**

The Tracking Component displays a graph of Black and White, Color, and Paper usage for a selected month. The user can select a different month using the dropdown menu. The graph will update to display the usage for the selected month. The user can also view the total usage for the selected day by hovering the cursor over the graph. The graph will display a tooltip with the total usage for the selected day. Below the graph, there is a list of all jobs for the selected month.

<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/tracking/tracking_screen_change_billing_period.gif" alt="Tracking Demo"></div>
</div>
<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/tracking/tracking_screen.png" alt="Tracking Screen"></div>
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/tracking/tracking_screen_usage_history.png" alt="Usage History"></div>
</div>

## **Billing History**

The Billing History page will display a list of all the bills that have been generated for the user.

<div class="gallery">
  <div class="gallery-item"><img src="{{ site.baseurl }}/assets/images/first_time_login/billing/billing_screen.png" alt="Billing Screen"></div>
</div>

<!-- Gallery Viewer -->

<div class="gallery-view" id="gallery-view">
  <span class="close-view" id="close-view">&times;</span>
  <img id="gallery-image" src="" alt="Gallery View">
  <div class="gallery-caption" id="gallery-caption"></div>
</div>

<script src="{{ site.baseurl }}/assets/js/gallery.js"></script>
