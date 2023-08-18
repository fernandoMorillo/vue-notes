<script setup>
import NotaCard from "@/components/NotaCard.vue";


</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12">
        <v-card width="1000" class="card--container_main">
          <v-card-title class="card--container_header">
            <v-row class="justify-space-between">
              <v-col cols="12" md="6" sm="12" lg="6">
                <h3>Mis notas</h3>
              </v-col>

              <v-col cols="12" md="6" sm="12" lg="6" class="d-flex justify-lg-end " style="gap: 10px">
                <v-btn :ripple="false" rounded outlined depressed class="text-capitalize font-weight-bold btn--agg_note"
                       color="#149e80"
                       :to="{name: 'RegistrarNota'}"
                       variant="tonal">
                  <v-icon left size="20">mdi-plus</v-icon>
                  Agregar nota
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="12" lg="6">
                <NotaCard/>
              </v-col>
              <v-col cols="12" md="6" sm="12" lg="6">
                <NotaCard/>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.card--container_main {
  margin: 0 auto;
  box-shadow: 0 14px 20px 0 rgba(143, 143, 143, 0.2) !important;
  padding: 10px;
}

.card--container_header {
  width: 100%;
}

.btn--agg_note {
  color: #fff;
}
</style>