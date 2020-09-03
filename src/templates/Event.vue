<template>
  <Layout>
    <h1 class="text-xs">{{ $page.event.title }}</h1>
    <article class="prose">
      <VueRemarkContent />
    </article>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Event ($id: ID!) {
  event(id: $id) {
    title
    excerpt
  }
}
</page-query>