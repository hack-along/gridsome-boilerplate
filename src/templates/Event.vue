<template>
  <Layout>
    <div class="my-12" v-if="$page.event.thumbnail">
      <g-image :src="$page.event.thumbnail" height="500" fit="contain" />
    </div>
    <h1>{{ $page.event.title }}</h1>
    <div class="prose prose-xl">
      <dt class="text-xl">
        <strong>{{ $page.event.date | formatDate('dddd, Do MMMM') }}</strong>
        <br />
        {{ $page.event.time | formatTime }}
      </dt>
      <p>{{$page.event.excerpt}}</p>
    </div>
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
    thumbnail
    time
    date
  }
}
</page-query>