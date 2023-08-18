<script setup>
import {ref} from "vue";

const eliminarnota = ref(false);

const deleteNota = () => {
  console.log(eliminarnota.value);
  eliminarnota.value = !eliminarnota.value;
}
</script>

<template>
  <v-card class="card--container_note">
    <v-card-title>
      <v-row class="justify-space-between">
        <v-col cols="12" md="6" sm="6" lg="6">
          <h4 class="card--container_titlenote">Name nota</h4>
        </v-col>

        <v-col cols="12" md="6" sm="6" lg="6" class="d-flex justify-lg-end " style="gap: 10px">
          <v-btn :ripple="false" rounded outlined depressed class="text-capitalize font-weight-bold btn--agg_delete"
                 color="#e50c0c"
                 variant="tonal"
                 @click="deleteNota">
            <v-icon left size="20">mdi-delete</v-icon>

          </v-btn>
          <v-btn :ripple="false" rounded outlined depressed class="text-capitalize font-weight-bold btn--agg_delete"
                 color="#FFA500FF"
                 variant="tonal"
                 @click="deleteNota">
            <v-icon left size="20">mdi-note-edit</v-icon>

          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
        texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
        dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro
        de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
        electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas
        "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
        por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.card--container_note {
  box-shadow: none !important;
}
.card--container_titlenote {
  font-weight: 400;
}
.btn--agg_delete {
  color: #ffffff;
}
</style>