<template>
  <div class="blog-post">
    <g-link :to="post.path">
      <g-image class="blog-post__image" :src="post.image" alt="post image" />
      <div class="blog-post__body">
        <h1 class="blog-post__title">{{ post.title }}</h1>
        <h2 class="blog-post__description">{{ post.description }}</h2>
        <button></button>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style lang="scss">
$primary: #0c1142;

.blog-post {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin-bottom: 1em;

  .blog-post__image {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .blog-post__body {
    padding: 1rem;

    .blog-post__title {
      color: $primary;
      font-weight: bold;
      font-size: 1.5rem;
    }

    .blog-post__description {
      color: $primary;
      font-size: 1em;
      color: #6e707b;
      font-weight: normal;
    }
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
}
</style>
