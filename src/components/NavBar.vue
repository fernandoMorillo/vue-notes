<script setup>
import {computed, ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute();
const isDrawerOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const ocultarInicio = computed(() => {
  return route.path !== '/';
});
</script>

<template>
  <v-app-bar app color="white">
    <v-app-bar-nav-icon @click="toggleDrawer"/>

    <v-toolbar-title>Notas</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-list>
      <v-list-item>
        <v-btn
            rounded
            variant="tonal"
            color="primary"
            v-if="ocultarInicio"
            :to="{name: 'HomePage'}"
        >
          Ver notas
        </v-btn>

      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<style scoped>

</style>