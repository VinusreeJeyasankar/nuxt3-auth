import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // Retrieve registered users from local storage
      const registeredUsers = JSON.parse(localStorage.getItem('registered-users')) || [];

      // Find if the provided username and password match any registered user
      const authenticatedUser = registeredUsers.find(u => u.username === username && u.password === password);

      if (authenticatedUser) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        console.log("token before", token);
        token.value = 'some_dummy_token'; // Set a dummy token since we didn't get it from the server
        this.authenticated = true; // set authenticated state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      console.log("token before", token);
      this.authenticated = false; // set authenticated state value to false
      token.value = null; // clear the token cookie
    },
  },
});
