import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBDr5HcUROujrQ1GFjtJp7v0rVPNRyKlI4",
  authDomain: "project-3dmakernow.firebaseapp.com",
  databaseURL: "https://project-3dmakernow.firebaseio.com",
  projectId: "project-3dmakernow",
  storageBucket: "",
  messagingSenderId: "1003424526524",
  appId: "1:1003424526524:web:5825ba6fa3e11507"
};
firebase.initializeApp(firebaseConfig);

export const printersDB = firebase.database().ref('/3d-printers');
