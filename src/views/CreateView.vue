<template>
  <div class="col-md-9 mx-auto">
    <h3>categorie</h3>
    <select 
      name="equipement"
      id="equipement"
      v-model="selecCate"
      class="form-select mx-auto my-2"
    >
      <option value="1">Camion</option>
      <option value="2">Voiture</option>
      <option value="3">Scooter</option>
      <option value="4">ِCharios </option>
      <option value="5">Autre</option>

    </select>

    
  </div>
  <div class="col-10 mx-auto">
    <div v-if="selecCate == 1" class="my-5">
      <CreateCamion />
    </div>

    <div v-else-if="selecCate == 2" class="my-5">
      <CreateVoiture />
    </div>
  </div>
</template>

<script >

import CreateCamion from "../components/camion/CreateCamion.vue";
import CreateVoiture from "../components/voiture/CreateVoiture.vue";

export default {
  components: { CreateVoiture, CreateCamion },

  data() {
    return {
      selecCate: 0,
    }
  }
}
</script>


