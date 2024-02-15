<template>
    <div>Hello Home Page</div>
</template>
<script setup>
    definePageMeta({
        middleware: 'auth' // this should match the name of the file inside the middleware directory 
    })
</script>