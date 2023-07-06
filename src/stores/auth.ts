import { writable } from 'svelte/store'

import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut, type User, type UserCredential, type Auth } from 'firebase/auth'
import { auth } from '../firebase'

export const isAuthorised = writable(false)

type Person = {
  user?: User | null,
}

let x: Person = { user: null }

export const person = writable(x)

function update(user?: User | null) {
  person.set({ user })
  isAuthorised.set(user ? true : false)
}

async function authorise(method: ((auth: Auth, email: string, password: string) => Promise<void | UserCredential>), email: string, password: string, callback: ((reason: Error) => void)) {
  let { user } = await method(auth, email, password).catch(callback) ?? { user: null }
  update(user)
}

export const client = {
  async signUp(email: string, password: string, callback: ((reason: Error) => void)) {
    authorise(createUserWithEmailAndPassword, email, password, callback)
  },

  async signIn(email: string, password: string, callback: ((reason: Error) => void)) {
    authorise(signInWithEmailAndPassword, email, password, callback)
  },

  async signOut() {
    await signOut(auth)
    update(null)
  },

  async updateProfile(user: User, { displayName, photoURL }: { displayName?: string, photoURL?: string }) {
    await updateProfile(user, { displayName, photoURL })
  },
}