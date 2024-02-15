<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <NuxtLink class="navbar-brand" to="/">
            <img src="/favicon.ico" alt="Nuxt-Project" /> Nuxt 3
          </NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">About</NuxtLink>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="componentsDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Components
                </a>
                <ul class="dropdown-menu bg-black text-white p-3" aria-labelledby="componentsDropdown">
                  <li>
                    <NuxtLink class="dropdown-item" to="/users">Users</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/recipes">Recipes</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/counter">Examples</NuxtLink>
                  </li>
                </ul>
              </li> -->
              <li class="nav-item">
                <NuxtLink class="nav-link loginBtn" to="/login"> Login
                  <!-- <button class="btn btn-warning">Sign Up</button> -->
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/signup">
                  <button class="btn btn-warning">Sign Up</button>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="mainContent">
      <slot />
    </div>
    <!-- <footer>
      <h1>Footer</h1>
    </footer> -->
  </div>
</template>
<style scoped>
  nav {
    background-color: #333;
    padding: 20px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    margin-right: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>