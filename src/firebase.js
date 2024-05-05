import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-OZpkRfvBPD7cV-1-WoHdvzU96w-jQTU',
  authDomain: 'ornate-crossbar-401416.firebaseapp.com',
  projectId: 'ornate-crossbar-401416',
  storageBucket: 'ornate-crossbar-401416.appspot.com',
  messagingSenderId: '207666013839',
  appId: '1:207666013839:web:1ef4142f966808a51ff2fa',
  measurementId: 'G-9FWYNQG8Z9',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore, createUserWithEmailAndPassword, setDoc, doc }
