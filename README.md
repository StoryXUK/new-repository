# Fibodo Meeting Selector

Includes 23 operators and 14 suppliers. Operators choose suppliers; suppliers choose operators. The business name is selected from the relevant attendee list.

## Google Sheet setup
1. Create a Google Sheet and open **Extensions > Apps Script**.
2. Paste the contents of `google-apps-script.js` into the Apps Script editor and save.
3. Deploy > New deployment > Web app. Set **Execute as: Me** and **Who has access: Anyone**. Authorise the script.
4. Copy the deployed URL ending in `/exec` and replace `PASTE_YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL_HERE` in `script.js`.
5. Upload `index.html`, `operators.html`, `suppliers.html`, `styles.css` and `script.js` together to your hosting (e.g. GitHub Pages).
6. Test one operator and one supplier submission. Verify rows appear on the `Responses` tab.

Columns: `Submitted at | Attendee type | Business name | Selections`.

**Important:** Browser requests use `no-cors`, so the interface can only confirm the request was sent, not that the row was written. Always verify receipt in the Sheet. To show confirmed saves, use a same-origin backend/proxy that reads and validates the Apps Script response.

This is a preference collection tool, not an automated scheduling or mutual-match engine. Anyone with the form link can submit; add authentication or one-time tokens if submissions must be restricted to invited attendees. Redeploy Apps Script after changes to its code.

## Website links
Every supplied business URL is linked beside its checkbox and opens in a new tab without changing the meeting selection. The selected attendee business also shows its website link. No URL was supplied for **Cotswold Lake Trust**, **Fibodo**, or **Industry Wake**, so these three are left without a link rather than guessing. Add their URLs to the `WEBSITES` object in `script.js` when available.


## Existing Google Sheet compatibility
The website POSTs JSON with submittedAt, attendeeType, name (blank because the form does not ask for an attendee name), company, and selections (array). This matches the supplied doPost(e) implementation, which appends to the Responses tab of the Apps Script active spreadsheet. Ensure the script is bound to the intended spreadsheet and the deployed /exec URL points to the current version. Browser no-cors requests cannot confirm successful storage; check a test row in the Responses tab.
