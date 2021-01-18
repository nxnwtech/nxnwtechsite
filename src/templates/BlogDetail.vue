<template>
  <div>
    <h1 class="post__title">{{ $page.blog.title }}</h1>
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
