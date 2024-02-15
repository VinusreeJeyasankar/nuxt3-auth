<template>
    <div class="text-center m-5">
        <h1>Welcome to the homepage</h1>
        This is an auto-imported component
        <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
<script setup>
    definePageMeta({
        middleware: 'auth' // this should match the name of the file inside the middleware directory 
    })
</script>