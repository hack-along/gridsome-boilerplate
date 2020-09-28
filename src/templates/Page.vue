<template>
  <Layout>
    <h1>{{ $page.mdPage.title }}</h1>
    <div>
      <a
        :href="editLink"
        target="_blank"
        class="my-4 inline-block py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white"
      >
        <span>Edit this page on GitHub</span>
      </a>
    </div>

    <article class="prose">
      <VueRemarkContent />
    </article>
  </Layout>
</template>



<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query MdPage ($id: ID!) {
  mdPage(id: $id) {
    title
    content
    path
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
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            this.$page.mdPage.title + " | " + this.$static.metadata.siteName,
        },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "og:title", content: this.$page.mdPage.title },
        { name: "og:url", content: this.getUrl },
        { name: "og:image", content: this.getCoverImage },
      ],
    };
  },
  computed: {
    getCoverImage() {
      // @TODO: ADD A CARD FALLBACK IMG
      return this.$static.metadata.siteUrl + "card.jpg";
    },
    getUrl() {
      return this.$static.metadata.siteUrl + this.$page.mdPage.path;
    },
    currentPath() {
      return this.$route.matched[0].path;
    },
    editLink() {
      let path = this.currentPath;

      return `https://github.com/hack-along/EquinoxUnconf/tree/master/content/page${path}.md`;
    },
  },
};
</script>

