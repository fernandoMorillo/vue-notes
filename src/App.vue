<template>
  <v-app id="app">
    <v-main>
      <NavBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";


export default {
  name: 'App',

  components: {
    NavBar,

  },

  data: () => ({
    //
  }),
}
</script>

<style>
#app {
  font-family: 'Comfortaa', cursive !Important;
}

</style>
