<template>
  <div class="blog-post container">
    <h1 class="blog-post__title heading--page">{{ $page.blog.title }}</h1>
    <div class="blog-post_img--and-description">
      <g-image
        class="blog-post__image"
        :src="$page.blog.image"
        alt="post image"
      />
      <h2 class="blog-post__description">{{ $page.blog.description }}</h2>
    </div>

    <div class="project__content">
      <div class="markdown-body">
        <VueRemarkContent />
      </div>
    </div>
  </div>
</template>

<page-query>
query Blog ($path: String!) {
  blog: blog (path: $path) {
    title,
    description,
    image
  }
}
</page-query>

<style lang="scss" scoped>
$primary: #0c1142;

.blog-post {
  .blog-post_img--and-description {
    display: grid;
    place-items: center;

    .blog-post__image {
      width: 100%;
      border-radius: 5px 5px 0 0;
      max-width: 400px;
    }

    .blog-post__description {
      text-align: center;
      font-size: 1rem;
      margin-top: 1rem;
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
