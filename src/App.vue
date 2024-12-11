<template>
  <header>
    <nav>
      <router-link to="/">홈</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
