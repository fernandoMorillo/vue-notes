<template>
  <div>

    <v-form v-model="valid">
      <v-container>
        <v-row class="form--container">
          <v-col cols="12" md="12">
            <v-text-field
                v-model="form.titulo"
                :rules="nameRules"
                label="Título"
                required
                variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-textarea
                v-model="form.descripcion"
                :rules="nameRules"
                label="Descripción"
                variant="outlined"
                required
            ></v-textarea>
          </v-col>

          <v-row>
            <v-col cols="12" md="6" lg="6" class="form--container__botones">
              <v-btn
                  color="green"
                  variant="tonal"
                  @click="guardar"
              >Guardar
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" lg="6" class="form--container__botones__segundo">
              <v-btn
                  @click="limpiarCampos"
                  color="red"
                  variant="tonal"
              >Limpiar
              </v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-form>
  </div>

</template>

<script setup>
import {ref, reactive, defineEmits} from 'vue';

const emit = defineEmits('');
const valid = ref(false);
let form = reactive({
  titulo: '',
  descripcion: '',
});

// let formularioVacio = ref(false);


const nameRules = [
  value => {
    if (value) return true;
    return 'Campo is requerido.';
  }

];


const guardar = () => {
  if (!form.titulo.trim() || !form.descripcion.trim()) {
    // Al menos uno de los campos está vacío
    console.log('Debes completar todos los campos antes de guardar.');
    return emit('mostrarAlert', false);
  }
  return emit('mostrarAlert', true);

  // Lógica para guardar los datos
};


const limpiarCampos = () => {
  form.titulo = '';
  form.descripcion = '';
  emit('mostrarAlert', true)
};


</script>


<style scoped>
.form--container {
  margin: 0 auto;
  width: 60%;
}

.form--container__botones {
  display: flex;
  justify-content: end;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .form--container {
    width: 100%;
  }

  .form--container__botones {
    justify-content: center;
  }

  .form--container__botones__segundo {
    display: flex;
    justify-content: center;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .form--container__botones {
    justify-content: center;
  }

  .form--container__botones__segundo {
    display: flex;
    justify-content: center;
  }
}

</style>