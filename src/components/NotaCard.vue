<script setup>
import {ref} from "vue";

const eliminarnota = ref(false);

const deleteNota = () => {
  console.log(eliminarnota.value);
  eliminarnota.value = !eliminarnota.value;
}
</script>

<template>
  <v-card>
    <v-card-title>
      <v-row class="justify-space-between">
        <v-col cols="12" md="12" sm="12" lg="12">
          <h3>name nota</h3>
        </v-col>

        <v-col cols="12" md="6" sm="12" lg="6" class="d-flex justify-lg-end " style="gap: 10px">
          <v-btn :ripple="false" rounded outlined depressed class="text-capitalize font-weight-bold btn--agg_note"
                 color="#149e80"
                 @click="deleteNota">
            <v-icon left size="20">mdi-plus</v-icon>
            Eliminar nota
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
      This is content
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>