<template>
  <div class="flex flex-col min-h-screen">
    <header class="header">
      <nav-bar />
    </header>
    <main class="container flex-grow">
      <slot />
    </main>
    <g-footer />
  </div>
</template>

<style >
.hide-before-load {
  opacity: 0;
}
.hide-before-load.loaded {
  opacity: 1;
}
</style>


