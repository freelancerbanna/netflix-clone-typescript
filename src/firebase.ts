// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPjXidrZT9g-UxTa9u_OJKS9gqJE8uNVE',
  authDomain: 'netflix-clone-typescript-55978.firebaseapp.com',
  projectId: 'netflix-clone-typescript-55978',
  storageBucket: 'netflix-clone-typescript-55978.appspot.com',
  messagingSenderId: '446159630496',
  appId: '1:446159630496:web:b6650ad33974a8256359c5',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
