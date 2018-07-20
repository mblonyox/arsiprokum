import firebase from 'firebase'
import config from './config'

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const database = firebase.database()
export const storage = firebase.storage()
export default firebase
