import firebase from 'firebase'
import firebaseConfig from './fb'
import 'firebase/firestore'
firebase.initializeApp(firebaseConfig);;
export const defaultDatabase = firebase.database();
export const db = firebase.firestore();
// export const auth = firebase.auth();