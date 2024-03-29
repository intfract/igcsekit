import { ID, Permission, Role } from 'appwrite'
import type { Models } from 'appwrite'
import { get, writable } from 'svelte/store'
import { sdk, server } from '$lib/appwrite/appwrite'

export type FlashcardDocument = {
  front: string,
  back: string,
} & Models.Document

export type State = {
  account: Models.User<Models.Preferences> | null
}

const createState = () => {
  const { subscribe, set, update } = writable<State>({
    account: null,
  })

  return {
    subscribe,
    signUp: async (email: string, password: string, name: string) => {
      return await sdk.account.create('unique()', email, password, name)
    },
    signIn: async (email: string, password: string) => {
      await sdk.account.createEmailSession(email, password)
      const user = await sdk.account.get()
      state.init(user)
    },
    signOut: async () => {
      state.init(null)
      await sdk.account.deleteSession('current')
    },
    init: async (account: Models.User<Models.Preferences> | null = null) => {
      return set({ account })
    },
    oAuth: async (provider: string, redirectURL: string) => {
      sdk.account.createOAuth2Session(provider, redirectURL)
    },
    getSession: async (id: string) => {
      const session = await sdk.account.getSession(id)
      console.log(session)
    }
  }
}

export const state = createState()