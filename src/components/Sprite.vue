<template>
  <div class="border border-black-900 sprite-wrapper-outer">
    <div class="sprite-wrapper position-relative">
      <div class="sprite-content" :style="sprites">
        <g-image
          alt="signals animation"
          src="~/assets/img/sprites/example_sprite.jpg"
          height="480"
          width="640"
          class="transparent"
        ></g-image>
      </div>
    </div>
    <div class="p-3">
      <h3 v-if="title">{{ title }}</h3>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
    },
    content: { required: false },
    img: {
      required: false,
    },
    frames: {
      required: false,
      default: 3,
    },
  },
  computed: {
    // setImage: function () {
    //   return require("@/assets/img/sprites/" + this.img);
    // },
    sprites() {
      return `background: url("/sprites/${this.img}") left center; background-size: auto 100%;
`;
    },
  },
};
</script>

<style lang="scss" scoped>
.sprite-wrapper-outer {
  max-width: 640px;
}
.sprite-wrapper {
  display: inline-block;
  max-width: 640px;
  max-height: 480px;
  overflow: hidden;
}
.sprite-content {
  width: auto;
  height: 100%;

  &:hover {
    animation: play 0.5s steps(3) infinite;
  }
}
.transparent {
  opacity: 0.3;
}
@keyframes play {
  100% {
    background-position: -300%;
  }
}
</style>