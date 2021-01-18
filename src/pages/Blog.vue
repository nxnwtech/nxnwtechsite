<template>
  <div class="blog container">
    <h1 class="heading--page">NXNW Blog</h1>

    <div class="blog__grid">
      <BlogPost
        v-for="post in $page.allBlog.edges"
        :key="post.node.id"
        :post="post.node"
      />
    </div>

    <Pager :info="$page.allBlog.pageInfo" class="pagination" />
  </div>
</template>

<page-query>
query blog($page: Int) {
	allBlog(perPage: 10, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id,
        title,
        description,
        image,
        date(format: "DD-MM-YYYY"),
        path,
      }
    }
  }  
}
</page-query>

<script>
import { Pager } from 'gridsome';
import BlogPost from '~/components/BlogPost.vue';

export default {
  components: {
    Pager,
    BlogPost,
  },
};
</script>

<style lang="scss">
.blog {
  .blog__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
}
</style>
