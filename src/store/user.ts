import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUser = defineStore('user', {
    state: () => {
        return {
          // all these properties will have their type inferred automatically
          isAuthenticated: false,
          userId: '',
          displayName: '',
          email: ''

        }
      },
})