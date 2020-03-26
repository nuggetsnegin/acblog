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
          <router-link class="navbar-item" to="/faq">
            FAQ
          </router-link>
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
footer.footer {
  margin-top: 10rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
