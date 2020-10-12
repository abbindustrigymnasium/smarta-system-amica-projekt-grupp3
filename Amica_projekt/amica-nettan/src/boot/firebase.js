import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

let db
let increment
let decrement
export default ({ Vue }) => {
  Vue.use(firestorePlugin)

  const firebaseConfig = {
    apiKey: 'AIzaSyD7r_zId0iKgA4KTpSilEz4sstBOhWODlI',
    authDomain: 'amica-projekt-35cc8.firebaseapp.com',
    databaseURL: 'https://amica-projekt-35cc8.firebaseio.com',
    projectId: 'amica-projekt-35cc8',
    storageBucket: 'amica-projekt-35cc8.appspot.com',
    messagingSenderId: '629801363276',
    appId: '1:629801363276:web:358ae20bc66daef0ec11e9'
  }

  firebase.initializeApp(firebaseConfig)
  db = firebase.firestore()
  increment = firebase.firestore.FieldValue.increment(1)
  decrement = firebase.firestore.FieldValue.increment(-1)
}

export { db, increment, decrement }
