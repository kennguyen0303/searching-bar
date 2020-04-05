
var admin = require("firebase-admin");

var serviceAccount = require("./kenny-b8712-firebase-adminsdk-5y1nq-47a5906b91.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kenny-b8712.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
