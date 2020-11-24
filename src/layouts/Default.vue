<template>
  <div class="layout">
    <h1>Layout</h1>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
</style>
