import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    users: [],
    email: '',
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    verifyPassword: ''
  }),
  actions: {
    generateUniqueId() {
      // Generate a unique ID
      const id = this.users.length + 1;
      return id;
    },
    setUserDetails(userDetails) {
      this.users.push(userDetails);
    },
    clearForm() {
      this.email = '';
      this.firstname = '';
      this.lastname = '';
      this.username = '';
      this.password = '';
      this.verifyPassword = '';
    }
  }
});
