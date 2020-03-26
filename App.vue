<template>
  <main>
    <h1>Posts</h1>
    <span v-if="loading">Loading...</span>
    <ul v-else-if="posts.data.length">
      <li v-for="post in posts.data" :key="post.slug">
        <router-link :to="{ name: 'post', params: { slug: post.slug } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import Butter from "buttercms";

const butter = Butter("71e2d43506720912a9102308d3d8efba0f4cc7db");

export default {
  name: "BlogPostList",
  data() {
    return {
      loading: true,
      posts: {}
    };
  },
  methods: {
    fetchPosts() {
      butter.post
        .list({ page: 1, pageSize: 10 })
        .then(response => {
          this.loading = false;
          this.posts = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>
