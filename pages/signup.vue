<template>
    <div class="container">
        <form ref="form" id="form" class="card-container rounded-2" @submit.prevent="submitForm">
            <h2 class="text-center mb-3">SignUp</h2>
            <div class="d-flex flex-column justify-content-between mb-4">
                <label htmlFor="email" class="form-label">
                    Email address
                    <input v-model="formState.email" id="email" type="email" class="form-control" autocomplete="on" required />
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                </label>
                <label htmlFor="fname" class="form-label">
                    Firstname
                    <input v-model="formState.firstname" id="fname" type="text" class="form-control" autocomplete="on" required />
                    <div class="invalid-feedback">Firstname is required.</div>
                </label>
                <label htmlFor="lname" class="form-label">
                    Lastname
                    <input v-model="formState.lastname" id="lname" type="text" class="form-control" autocomplete="on" required />
                    <div class="invalid-feedback">Lastname is required.</div>
                </label>
                <label htmlFor="uname" class="form-label">
                    Username
                    <input v-model="formState.username" id="uname" type="text" class="form-control" autocomplete="on" required />
                    <div class="invalid-feedback">Username is required.</div>
                </label>
                <label htmlFor="pwd" class="form-label">
                    Password
                    <input v-model="formState.password" id="pwd" type="password" class="form-control" autocomplete="off" required />
                    <div class="invalid-feedback">Password is required.</div>
                </label>
                <label htmlFor="vpwd" class="form-label">
                    Verify Password
                    <input v-model="formState.verifyPassword" id="vpwd" type="password" class="form-control" autocomplete="off" required />
                    <div class="invalid-feedback">Password is required.</div>
                </label>
                <button class="btn btn-primary" type="submit">
                    Sign up
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useFormStore } from '@/store/userdetails.js';
const formStore = useFormStore();

const formState = formStore.$state;

const submitForm = () => {
    const { email, firstname, lastname, username, password, verifyPassword } = formState;
    if (password !== verifyPassword) {
        alert('Passwords do not match');
        return;
    }

    const userDetails = {
        id: formStore.generateUniqueId(),
        email,
        firstname,
        lastname,
        username,
        password
    };

    // Retrieve existing user details from localStorage
    const existingUserDetails = JSON.parse(localStorage.getItem('user-details')) || [];

    // Add the new user details to the existing ones
    existingUserDetails.push(userDetails);

    // Set the updated user details back in localStorage
    localStorage.setItem('user-details', JSON.stringify(existingUserDetails));

    // Update the store with the new user details
    formStore.setUserDetails(userDetails);
    formStore.clearForm();
    alert('Form submitted successfully');
};


</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.card-container {
    width: 40%;
    padding: 20px;
    margin-bottom: 40px;
    background-color: #ffffff;
    box-shadow: 8px 8px 8px 8px #dbd9d9;
}
</style>
