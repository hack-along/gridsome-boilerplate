<template>
  <Layout>
    <h1>{{ $page.tag.title }}</h1>
    <ul class="mb-4">
      <li v-for="(edge, index) in $page.tag.belongsTo.edges" :key="index">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
    <hr />All tags:
    <div class="flex pb-4 flex-wrap">
      <div class="badge" v-for="tag in $static.tags.edges" :key="tag.id">
        <g-link
          class="badge-link"
          :to="tag.node.path"
        >{{tag.node.id}} ({{tag.node.belongsTo.totalCount}})</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Event {
            title
            path
          }
        }
      }
    }
  }
}
</page-query>
<static-query>
query Tag {
  tags: allTag {
    totalCount
  	edges {
      node {
        id
        path
        title
        belongsTo {
          totalCount
        }
      }
    }
  }
}
  </static-query>