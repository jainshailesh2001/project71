import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyD5O4N8IWLXuefrQncI6G8Ho8XGooS8FJ4",
  authDomain: "eride-83577.firebaseapp.com",
  projectId: "eride-83577",
  storageBucket: "eride-83577.appspot.com",
  messagingSenderId: "307549447568",
  appId: "1:307549447568:web:eae45d3a836d10aa083f15"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
