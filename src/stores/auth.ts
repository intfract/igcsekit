import { writable } from 'svelte/store'

import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut, type User, type UserCredential } from 'firebase/auth'
import { auth } from '../firebase'

export const isAuthorised = writable(false)

export const person = writable({
  user: null,
})

export const client = {
  async signUp(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password)
    isAuthorised.set(true)
  },

  async signIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
    isAuthorised.set(true)
  },

  async signOut() {
    await signOut(auth)
    isAuthorised.set(false)
  },

  async update(user: User, { displayName, photoURL }: { displayName?: string, photoURL?: string }) {
    await updateProfile(user, { displayName, photoURL })
  },
}