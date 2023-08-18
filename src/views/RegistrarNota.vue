<script setup>
import FormularioRegistroNotas from "@/components/FormularioRegistroNotas.vue";
import AlertaError from "@/components/AlertaError.vue";
import {ref} from "vue";

const datos = ref('');

const ejecutarAlert = (dato) => {
  datos.value = dato;
  console.log(dato)
  console.log(datos)
}
</script>

<template>
  <v-container>
    <div>
      <h1 class="text-center">Registrar nota</h1>
      <template v-if="!datos && datos !== '' ">
        <AlertaError/>
      </template>


      <v-row>
        <v-col>
          <v-card class="card--register__noteForm">
            <FormularioRegistroNotas
                @mostrarAlert="ejecutarAlert"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>

</template>

<style scoped>
.card--register__noteForm {
  box-shadow: 0 14px 20px 0 rgba(143, 143, 143, 0.2) !important;
}
</style>