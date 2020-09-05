<template>
  <div>
    <h2>{{title}}</h2>
    <dl
      v-if="$static.events.edges.length > 0"
      class="grid grid-cols-4 gap-8 bg-white rounded-sm shadow-lg p-4 mt-4"
    >
      <template v-for="(event, index) in $static.events.edges">
        <dt class="text-xl" :key="`time${index}`">
          <strong>{{ event.node.date | formatDate('dddd, Do MMMM') }}</strong>
          <br />
          {{ event.node.date | formatTime }}
        </dt>
        <dd class="col-span-3" :key="index">
          <g-link :to="event.node.path">
            <h5 class="mb-2 text-2xl">{{ event.node.title }}</h5>
          </g-link>
          <p class="mb-4 flex-1">{{ event.node.excerpt }}</p>
        </dd>
      </template>
    </dl>
    <div v-else class="p-4 mt-4">
      <p>sorry, nothing to show at the moment!</p>
    </div>
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
        time
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

