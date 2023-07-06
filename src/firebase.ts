import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAnalytics, type Analytics } from 'firebase/analytics'
import { getAuth, type Auth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBb9UYYJzmVnavxnHtXJOW1SoENQZfniAo",
  authDomain: "igcse-kit.firebaseapp.com",
  projectId: "igcse-kit",
  storageBucket: "igcse-kit.appspot.com",
  messagingSenderId: "711019022903",
  appId: "1:711019022903:web:0c746639ed746e44cc0db2",
  measurementId: "G-VHLK5YL556"
}

let app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)
// const analytics: Analytics = getAnalytics(app) // only works on client

export {
  app,
  auth,
}