<template>
  <Layout>
    <h1>{{ $page.tag.title }}</h1>

    <event-list :events="$page.tag.belongsTo" />

    <tag-nav class="pt-4" />
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
              excerpt
              start_time
              end_time
              date
            hasContent
              fileInfo {
                path
              }
              tags {
                    id
                    title
                    path
                  }
          }
        }
      }
    }
  }
}
</page-query>
