import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3p_u20kAU93hTkLsG-uFtx2zCM7ChDFQ",
  authDomain: "crwn-db-27461.firebaseapp.com",
  databaseURL: "https://crwn-db-27461.firebaseio.com",
  projectId: "crwn-db-27461",
  storageBucket: "crwn-db-27461.appspot.com",
  messagingSenderId: "208393384921",
  appId: "1:208393384921:web:fa3b4493a0e86d6f"
};
export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;