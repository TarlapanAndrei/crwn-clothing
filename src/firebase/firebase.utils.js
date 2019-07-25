import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3p_u20kAU93hTkLsG-uFtx2zCM7ChDFQ",
  authDomain: "crwn-db-27461.firebaseapp.com",
  databaseURL: "https://crwn-db-27461.firebaseio.com",
  projectId: "crwn-db-27461",
  storageBucket: "",
  messagingSenderId: "208393384921",
  appId: "1:208393384921:web:fa3b4493a0e86d6f"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => ( auth.signInWithPopup(provider));
export default firebase;