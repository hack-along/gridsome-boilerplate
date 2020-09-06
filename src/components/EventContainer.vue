<template>
  <div>
    <h2>{{title}}</h2>
    <event-list v-if="$static.events.edges.length > 0" :events="$static.events" />
    <div v-else class="p-4 mt-4">
      <p>sorry, nothing to show at the moment!</p>
    </div>
    <tag-nav class="pt-4" />
  </div>
</template>

<static-query>
query Event {
  events: allEvent {
    edges {
      node {
        title
        path
        excerpt
        start_time
        end_time
        date
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

