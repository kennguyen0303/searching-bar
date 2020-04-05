
const functions = require('firebase-functions');//for real-time
const express = require('express');

const app = express();//create an express application with route


const {search,getAll}=require('./search')


app.post('/search/:name',search);
app.get('/search/',getAll);


exports.api = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

