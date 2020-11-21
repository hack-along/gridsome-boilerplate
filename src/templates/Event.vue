<template>
  <Layout>
    <div class="my-12" v-if="$page.event.thumbnail">
      <g-image :src="$page.event.thumbnail" height="500" fit="contain" />
    </div>
    <h1>{{ $page.event.title }}</h1>
    <div class="py-4 grid grid-cols-1">
      <strong>{{ $page.event.date | formatDate("dddd, Do MMMM") }}</strong>
      <div class="text-xl">
        {{ $page.event.start_time | formatTime }}
        <span v-if="$page.event.end_time"
          >- {{ $page.event.end_time | formatTime }}</span
        >
      </div>
      <div class="flex pb-4 flex-wrap mt-4">
        <div class="badge" v-for="tag in $page.event.tags" :key="tag.id">
          <g-link class="badge-link" :to="tag.path">{{ tag.id }}</g-link>
        </div>
      </div>
      <div>
        <a
          :href="editLink"
          target="_blank"
          class="my-4 inline-block py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white"
        >
          <span>Edit this page on GitHub</span>
        </a>
      </div>
    </div>

    <div class="prose prose-xl">
      <p>{{ $page.event.excerpt }}</p>
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
    path
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Equinox",
      meta: [
        { name: "description", content: this.$page.event.excerpt },
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.event.excerpt },
        { name: "twitter:title", content: this.$page.event.title },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "og:description", content: this.$page.event.excerpt },
        { name: "og:title", content: this.$page.event.title },
        { name: "og:url", content: this.getUrl },
        { name: "og:image", content: this.getCoverImage },
      ],
    };
  },
  computed: {
    getCoverImage() {
      // @TODO: ADD A CARD FALLBACK IMG
      let img =
        this.$page.event.thumbnail !== null
          ? this.$static.metadata.siteUrl + this.$page.event.thumbnail
          : this.$static.metadata.siteUrl + "card.jpg";
      return img;
    },
    getUrl() {
      return this.$static.metadata.siteUrl + this.$page.event.path;
    },
    currentPath() {
      return this.$route.matched[0].path;
    },
    editLink() {
      let path = this.currentPath;
      if ((path.match(new RegExp("/", "g")) || []).length == 1)
        path = path + "/README";
      return `https://github.com/hack-along/EquinoxUnconf/tree/master/content${path}.md`;
    },
  },
};
</script>

