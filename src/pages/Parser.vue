<template>
  <q-page class="flex column items-center" padding>
    <div style="max-width: 300px;">
      <h2>Carregar fitxer CSV</h2>

      <q-file v-model="file" label="Arxiu" />
      <div>
        <q-btn @click="upload" color="primary" class="q-ma-md">Carregar arxiu (.csv)</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ParserService} from "src/service/ParserService";

export default defineComponent({
  name: "Parser",
  data() {
    return {
      file: null
    };
  },
  methods: {

    upload: async function () {
      if (this.file) {
        const dialog = this.$q.dialog({
          message: 'Cargando...',
          progress: true, // we enable default settings
          persistent: true, // we want the user to not be able to close it
          ok: false // we want the user to not be able to close it
        })
        console.log("Entra a upload", this.file);

        const formData = new FormData();
        formData.append("arxiu", this.file);

        await ParserService.uploadFileParser(formData);

        dialog.hide();
      }
    }
  }
})
</script>

<style scoped>

</style>
