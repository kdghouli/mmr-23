<template>
  <div>
    <h3 class="my-2">Creation d'un camion test</h3>

    <form @submit.prevent="ajouterEquipe()" class="row g-3 bg-success">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Matricule</label>
        <input type="text" class="form-control" id="inputEmail4" v-model="matricule" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Marque</label>
        <input type="text" class="form-control" id="inputPassword4" v-model="marque" />
      </div>
      <div class="col-6">
        <label for="intituleId" class="form-label">Intitule</label>
        <select id="intituleId" class="form-select" v-model="intituleId">
          <option value="1">ECCBC - CBGS</option>
          <option value="2">ECCBC - SCBG</option>
          <option value="3">ECCBC - CBGN</option>
          <option value="5">ECCBC - COBOMI</option>
          <option value="4">Chaabi LLD</option>

          </select>
      </div>
      <div class="col-6">
        <label for="date" class="form-label">DMC</label>
        <input type="date" id="date" class="form-select" v-model="dmc">
        
        
      </div>

      <div class="col-md-6">
        <label for="agenceId" class="form-label">Agence</label>

        <select id="agenceId" class="form-select" v-model="agenceId">
          <option value="1">Marrakech</option>
          <option value="2">Beni Mellal</option>
          <option value="3">Essaouira</option>
          <option value="4">Safi</option>
          <option value="5">Sidi Bennour</option>
          <option value="6">Khouribga</option>
          <option value="7">El Kelaa</option>
          <option value="8">Ouarzazate</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Type</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Equipement</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>

      <div class="col-8">
        <button class="btn btn-dark mx-auto" type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import dbo from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      matricule: "",
      marque: "",
      dmc: "",
      agenceId: "",
      intituleId: "",
      categorieId: 1,
      equipement: "",
    };
  },

  methods: {
    async ajouterEquipe() {
      let vhl = {
        matricule: this.matricule,
        marque: this.marque,
        agenceId: this.agenceId,
        dmc: this.dmc,
        intituleId: this.intituleId,
        categorie:this.categorieId,
        equipement: "",
      };
      try {
        const docRef = await addDoc(collection(dbo, "vhls"), {...vhl
          // matricule: this.matricule,
          // marque: this.marque,
          // agenceId: this.agenceId,
          // intitule: this.intitule,
          // categorieId: this.categorieId,
          // dmc:this.dmc
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.matricule = "";
      this.marque = "";
      this.agenceId = "";
      this.intitule = ""; 
      this.categorieId = ""; 
      this.equipement = "";
      this.dmc=""

      // fetch('http://localhost:3000/vhls', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json'},
      //     body: JSON.stringify(camion)
      // })
      // .then(() => this.$router.push('/'))
      // .catch(err => console.log(err.message))

      // console.log('ok')
    }
  }
}
</script>
