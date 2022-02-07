
# Loggly

Loggly is a SaaS solution for log data management.

This xM Labs Integration allows you to connect up a Loggly instance to an xMatters On Demand account to create events into xMatters based on trends that Loggly observes in log files.

Sadly though, due to the constraints within Loggly this is a one-way only integration.  It does however send through the URL to the search so you can easily jump into Loggly at the correct place.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/AijrVeEzVIo/0.jpg)](https://youtu.be/AijrVeEzVIo)

---------

<kbd>
	<a href="https://support.xmatters.com/hc/en-us/community/topics">
  <img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
	</a>
</kbd>

---------

An updated version of this integration is available, supporting the latest version of Solarwinds Loggly and based on xMatters Flow Designer so you can easily connect other tools to your toolchain. [Learn more](http://help.xmatters.com/integrations/#cshid=Loggly).

---------


# Pre-Requisites

* Loggly account (http://www.loggly.com)
* xMatters account


# Files

* [Loggly.zip](Loggly.zip) - The workflow (that has all the scripts and email format and such)


# Installation

## xMatters set up

1. Load in the attached [Loggly.zip](Loggly.zip) Workflow.
2. Review the Form (Loggly Alert) configuration - you may want to change the message options (i.e. turn off voice in devices) and add recipients.
3. Go to the Loggly Alert flow and copy the URL found in the **Loggly Alert - Inbound from Loggly**


## Loggly set up

1. Create a free trial at [loggly.com](http://www.loggly.com) if you need an account.
2. Create a Loggly alert endpoint.
3. Click Add New, and then configure the endpoint as follows:
* **Endpoint**: select HTTP Endpoint
* **Name**: type the name to use for this endpoint.
* **URL**: paste the webhook URL from xMatters that we copied before.
* **Method**: Select POST
4. Click Save to create the endpoint, and then save the alert endpoint.
5. Attach this alert endpoint to an Alert to begin notifying xMatters.


# Testing

To test the integration, trigger a search/alert from within Loggly.  If you correctly set up your Loggly alert endpoint with the correct URL, you should see the notifications on the Reports tab in xMatters.


# Troubleshooting

Steps mostly outlined above. If you're still stuck, reach out to an xPert. 
