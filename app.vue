<template>
    <NuxtLayout />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </template>

  <style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(3rem);
  }
  /* rotate transition */
  .rotate-enter-active,
  .rotate-leave-active {
    transition: all 0.4s;
  }
  .rotate-enter-from,
  .rotate-leave-to {
    opacity: 0;
    transform: rotate3d(1, 1, 1, 15deg);
  }
  </style>