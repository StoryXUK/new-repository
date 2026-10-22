// Paste this into Extensions > Apps Script in your destination Google Sheet.
const SHEET_NAME = 'Responses';
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const p = e.parameter || {};
    const role = String(p.attendeeType || '');
    const business = String(p.businessName || '').trim();
    const selections = JSON.parse(p.selections || '[]');
    if (!['Operator','Supplier'].includes(role) || !business || !Array.isArray(selections) || !selections.length || !selections.every(x=>typeof x==='string')) throw Error('Invalid submission');
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if(sheet.getLastRow() === 0) sheet.appendRow(['Submitted at','Attendee type','Business name','Selections']);
    // Prefix potentially formula-like content to avoid spreadsheet formula injection.
    const safe = s => /^[=+\-@]/.test(s) ? "'" + s : s;
    sheet.appendRow([new Date(), role, safe(business), selections.map(safe).join(', ')]);
    return ContentService.createTextOutput(JSON.stringify({success:true})).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success:false,error:String(error)})).setMimeType(ContentService.MimeType.JSON);
  } finally {lock.releaseLock()}
}
