<template>
  <div id="app">
    <Filtros />

    <p>1:B, 2:B, 3:C, 4:B, 5:C</p>
  </div>
</template>

<script>
import Filtros from "./Filtros.vue";
export default {
  name: "App",
  components: {
    Filtros,
  },
};
</script>

<style>
#app {
}
</style>
