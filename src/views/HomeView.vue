

<template>
  <div class="row ">
  

    <div class="col-md-12 col-lg-11"><Camions /></div>
    
    
  </div>
  
</template>


<script >
import { collection, getDocs,query } from "firebase/firestore"; 
import dbo from "../firebase/config"
import Camions from "../components/camion/ListCamions.vue";


export default {
  components: { Camions},
  data(){
    return {
      matricule: "",
    }
  },
  methods:{
   async getBase(){

    
       const querySnapshot = await getDocs(collection(dbo, "vhls"));
       console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().matricule}`);
});
    }
  },
  created(){

    this.getBase()
  }
};
</script>