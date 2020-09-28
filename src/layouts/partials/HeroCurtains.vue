<template>
  <div
    class="flex flex-col justify-center items-center relative overflow-hidden top-0 outer-wrapper"
  >
    <div class="canvas-wrapper overflow-hidden">
      <div class="bg-split w-screen absolute z-20"></div>
      <div id="canvas"></div>
      <div class="hide-before-load small-plane" id="animated-header">
        <!-- <img src="img/coho_5.png" alt="mandala" data-sampler="planeTexture" /> -->
        <g-image
          v-if="bg"
          :immediate="true"
          src="~/assets/img/bg.png"
          data-sampler="planeTexture"
          class="shade-img"
        />
      </div>
    </div>

    <div class="hide-before-load logo z-30 w-100">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1590 159">
        <g
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-width="1.6"
          transform="matrix(3.77953 0 0 3.77953 1206.15 -511.845)"
        >
          <a alt="logo" transform="translate(-195.699 66.182)">
            <path
              d="M16.564 101.094c8.096 0 7.536.804 12.034-14.234 4.498-15.038 7.006-13.804 13.303-13.804"
            />
            <path
              d="M43.264 107.879c-8.096 0-9.964.534-14.462-14.504-4.498-15.038-5.941-13.534-12.238-13.534"
            />
            <rect width="14.147" height="25.817" x="46.618" y="77.854" rx="7.073" ry="7.152" />
            <circle cx="57.937" cy="102.217" r="2.4" />
            <rect width="14.147" height="25.817" x="46.618" y="77.854" rx="7.073" ry="7.152" />
            <path
              d="M79.445 77.349v19.558c0 5.402-6.153 6.93-9.87 6.93-3.718 0-3.55-2.33-3.55-6.51V77.348"
            />
            <path
              stroke-width="4.109"
              d="M-75.578-100.087h-9.305l4.653-8.058z"
              transform="matrix(-.40108 0 0 -.37798 46.61 62.607)"
            />
            <circle cx="86.658" cy="71.917" r="1.764" />
            <circle cx="38.718" cy="90.445" r="1.764" />
            <path stroke-linecap="butt" d="M18.007 101.094h-141.756M16.564 79.841h-140.199" />
          </a>
          <a transform="rotate(180 -10.876 123.426)">
            <path
              d="M16.564 101.094c8.096 0 7.536.804 12.034-14.234 4.498-15.038 7.006-13.804 13.303-13.804"
            />
            <path
              d="M43.264 107.879c-8.096 0-9.964.534-14.462-14.504-4.498-15.038-5.941-13.534-12.238-13.534"
            />
            <rect width="14.147" height="25.817" x="46.618" y="77.854" rx="7.073" ry="7.152" />
            <circle cx="57.937" cy="102.217" r="2.4" />
            <rect width="14.147" height="25.817" x="46.618" y="77.854" rx="7.073" ry="7.152" />
            <path
              d="M79.445 77.349v19.558c0 5.402-6.153 6.93-9.87 6.93-3.718 0-3.55-2.33-3.55-6.51V77.348"
            />
            <path
              stroke-width="4.109"
              d="M-75.578-100.087h-9.305l4.653-8.058z"
              transform="matrix(-.40108 0 0 -.37798 46.61 62.607)"
            />
            <circle cx="86.658" cy="71.917" r="1.764" />
            <circle cx="38.718" cy="90.445" r="1.764" />
            <path stroke-linecap="butt" d="M18.007 101.094h-141.756M16.564 79.841h-140.199" />
          </a>
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
import * as curtains_settings from "../../libs/curtains_settings";
import anime from "animejs/lib/anime.es.js";
export default {
  mixins: ["curtains_settings"],
  props: {
    bg: {
      required: false,
    },
  },
  methods: {
    showElements() {
      let elements = document.getElementsByClassName("hide-before-load");
      let i;
      for (i = 0; i < elements.length; i++) {
        elements[i].style.opacity = "1";
      }
    },
  },
  mounted() {
    var lineDrawing = anime({
      targets: "path, rect, circle",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInCubic",
      duration: 2000,
      begin: function (anim) {
        document.querySelector("path").setAttribute("stroke", "black");
      },
      complete: function (anim) {},
      autoplay: false,
    });
    curtains_settings.initCurtains();
    this.showElements();
    lineDrawing.play();
  },
};
</script>
<style lang="scss" scoped>
.outer-wrapper {
  @media (max-width: 1024px) {
    height: 300px;
  }
  height: 60vh;
}
.shade-img {
  display: none;
}

.no-canvas .shade-img {
  display: block;
}

.canvas-wrapper {
  @media (max-width: 1024px) {
    height: 300px;
  }
  width: 100vw;
  position: absolute;
  top: 0;
  height: 60vh;

  display: block;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}

#canvas {
  @media (max-width: 1024px) {
    height: 120vh;
  }
  position: fixed;
  transform: translate3d(0, 0, 0);
  top: -10vh;
  right: 0;
  left: 0;
  height: 120vh;

  width: 120vw;
  z-index: 1;
  animation-fill-mode: forwards;
  animation-name: load;
  animation-duration: 4s;
  animation-delay: 0.3s;
  opacity: 0;
}

#textCanvas {
  @media (max-width: 1024px) {
    height: 300px;
  }
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60vh;

  z-index: 10;
}

.small-plane {
  @media (max-width: 1024px) {
    height: 300px;
  }
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 60vh;
}

.bg-split {
  @media (max-width: 1024px) {
    height: 300px;
  }
  height: 60vh;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 34%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.9) 64%,
    rgba(0, 0, 0, 0) 100%
  );
}

.logo {
  z-index: 20;
  max-width: 100vw;
  height: auto;
  color: white;
  mix-blend-mode: difference;
  filter: invert(1) grayscale(1) contrast(9);
}

.logo svg {
  max-width: 100vw;
  width: 100vw;
  height: auto;
}

@keyframes load {
  100% {
    opacity: 1;
  }
}
</style>

