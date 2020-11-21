<template>
  <div>
    <div class="flex align-top pb-0">
      <div class="mb-0">
        <h2>{{ title }}</h2>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
      <g-link
        href="/admin/"
        target="_blank"
        class="ml-auto py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white self-start"
      >
        <span>+ Add your own event</span>
      </g-link>
    </div>
    <tag-nav notitle class="mb-10" />

    <event-list
      v-if="$static.events.edges.length > 0"
      :events="$static.events"
    />
    <div v-else class="p-4 mt-4">
      <p>sorry, nothing to show at the moment!</p>
    </div>
  </div>
</template>

<static-query>
query Event {
  events: allEvent(sort:[ {by: "date", order:ASC}, {by:"start_time", order:ASC}] ) {
    edges {
      node {
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
</static-query>

<script>
export default {
  props: {
    title: {
      required: false,
      default: "Agenda",
    },
  },
};
</script>

