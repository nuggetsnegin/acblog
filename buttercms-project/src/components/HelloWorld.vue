<template>
  <div id="app">
    <nav class="navbar is-info">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <!-- <router-link class="navbar-item" to="/faq">
            FAQ
          </router-link> -->
          <router-link class="navbar-item" to="/blog">
            Blog Posts
          </router-link>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="container">
        <p>Negin &copy; 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
nav {
  min-height: 60vh;
  text-transform: uppercase;
}

a {
  text-decoration: none;
  color: rgb(63, 63, 63);
  font-weight: 900;
}
a:hover {
  color: palevioletred;
}

footer.footer {
  text-transform: lowercase;
  display: flex;
  align-content: flex-end;
  justify-content: center;
  background: rgb(255, 228, 233);
}
</style>
