<template>
  <Layout>
    <div class="my-12" v-if="$page.event.thumbnail">
      <g-image :src="$page.event.thumbnail" height="500" fit="contain" />
    </div>
    <h1>{{ $page.event.title }}</h1>
    <div class="text-xl pb-4">
      <strong>{{ $page.event.date | formatDate('dddd, Do MMMM') }}</strong>
      <br />
      {{ $page.event.start_time | formatTime }}
      <span
        v-if="$page.event.end_time"
      >- {{ $page.event.end_time | formatTime }}</span>
    </div>
    <div class="flex pb-4 flex-wrap">
      <div class="badge" v-for="tag in $page.event.tags" :key="tag.id">
        <g-link class="badge-link" :to="tag.path">{{tag.id}}</g-link>
      </div>
    </div>
    <div class="prose prose-xl">
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
    start_time
    end_time
    date
    tags {
      id
      title
      path
    }
  }
}
</page-query>