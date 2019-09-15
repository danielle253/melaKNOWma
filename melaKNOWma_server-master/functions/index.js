const functions = require('firebase-functions');
const api = require('./api/ir_api');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original

// Step 1
// This method iwll be used by the
exports.processRawData = functions.https.onRequest(async(request, response) => {
    // This will take the raw data and basically just convert it to what we wan
    const snapshot = await admin.database().ref('/raw_messages').push(api.process_raw(request.body));
    response.redirect(303, snapshot.ref.toString());
});

// Access the FB realtime DB
const admin = require('firebase-admin');
admin.initializeApp();
