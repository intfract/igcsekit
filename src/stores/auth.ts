import { writable } from 'svelte/store'

import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut, type User, type UserCredential } from 'firebase/auth'
import { auth } from '../firebase'

export const isAuthorised = writable(false)

type Person = {
  user?: User | null,
}

let x: Person = { user: null }

export const person = writable(x)

function update(user: User) {
  person.set({ user })
  isAuthorised.set(user ? true : false)
}

export const client = {
  async signUp(email: string, password: string) {
    let { user } = await createUserWithEmailAndPassword(auth, email, password)
    update(user)
  },

  async signIn(email: string, password: string) {
    let { user } = await signInWithEmailAndPassword(auth, email, password)
    update(user)
  },

  async signOut() {
    await signOut(auth)
    isAuthorised.set(false)
  },

  async updateProfile(user: User, { displayName, photoURL }: { displayName?: string, photoURL?: string }) {
    await updateProfile(user, { displayName, photoURL })
  },
}