<template>
  <div>
    <div class="container">
      <form ref="form" id="form" class="card-container rounded-2">
        <h2 class="text-center mb-3">Login</h2>
        <button class="btn btn-danger mb-2 w-100">
          <div class="button-content">
            <i class="material-icons me-2 align-middle">account_circle</i>
            Login with Google
          </div>
        </button>
        <button class="btn btn-dark mb-4 w-100">
          <div class="button-content">
            <i class="material-icons me-2 align-middle">code</i>
            Login with GitHub
          </div>
        </button>
        <div class="d-flex flex-column justify-content-between">
          <label htmlFor="uname" class="form-label">
            Username
            <input v-model="user.username" id="uname" type="text" class="form-control" placeholder="Enter Username"
              autocomplete="on" required />
            <div class="invalid-feedback">Invalid username.</div>
          </label>
          <label htmlFor="psw" class="form-label">
            Password
            <input v-model="user.password" id="psw" type="password" class="form-control" placeholder="Enter Password"
              autocomplete="on" required />
            <div class="invalid-feedback">Invalid password.</div>
          </label>
          <button @click.prevent="login" class="btn btn-outline-primary mt-2" type="button">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: '',
  password: '',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.card-container {
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 8px 8px 8px 8px #dbd9d9;
}

::placeholder {
  color: #c8c6c6;
}</style>