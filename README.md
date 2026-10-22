# Fibodo Meeting Selector — Complete Website

Contains index.html, operators.html, suppliers.html, styles.css, script.js, and google-apps-script.js.

## Deploy website
Upload all five website files (index.html, operators.html, suppliers.html, styles.css, script.js) to the same folder on your web host or GitHub Pages. The supplied script.js already includes your existing Google Apps Script /exec URL.

## Update the EXISTING Google Apps Script
1. Open your Google Sheet and choose Extensions > Apps Script.
2. Replace the old doPost code with the contents of google-apps-script.js.
3. Save. Go to Deploy > Manage deployments > Edit (pencil) > New version > Deploy. **Edit the existing deployment**, do not create a new one, to preserve the /exec URL.
4. Confirm your spreadsheet has a tab named Responses, and row 1 columns A–F are: Submitted At | Attendee Type | Primary Attendee | Second Attendee | Company | Meeting Preferences.
5. Submit a test using both forms and verify that all six columns populate correctly.

## Notes
- Primary Attendee is required; Second Attendee is optional.
- Operators select suppliers and suppliers select operators. 23 operators and 14 suppliers.
- The browser sends a cross-origin no-cors request, so a 'sent' message does not prove a row was saved. Verify submissions in Google Sheets.
- The website links are provided for all businesses with URLs supplied.
- This package does not itself modify your Google Sheet or deploy Apps Script.
