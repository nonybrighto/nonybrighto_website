import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './firebase-config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }
