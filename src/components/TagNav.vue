<template>
  <div>
    Tags:
    <div class="flex pb-4 flex-wrap">
      <div class="badge" v-for="tag in $static.tags.edges" :key="tag.id">
        <g-link
          class="badge-link"
          :to="tag.node.path"
        >{{tag.node.id}} ({{tag.node.belongsTo.totalCount}})</g-link>
      </div>
    </div>
  </div>
</template>


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