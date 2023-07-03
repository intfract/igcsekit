import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBb9UYYJzmVnavxnHtXJOW1SoENQZfniAo",
  authDomain: "igcse-kit.firebaseapp.com",
  projectId: "igcse-kit",
  storageBucket: "igcse-kit.appspot.com",
  messagingSenderId: "711019022903",
  appId: "1:711019022903:web:0c746639ed746e44cc0db2",
  measurementId: "G-VHLK5YL556"
}

let app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)

export {
  app,
  auth,
  analytics,
}