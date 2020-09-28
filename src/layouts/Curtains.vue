<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar class="z-30" />

    <div>
      <slot name="hero" />
    </div>
    <div class="z-20">
      <main class="container flex-grow">
        <slot />
      </main>
    </div>
    <g-footer class="z-20" />
  </div>
</template>



