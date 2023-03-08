<template lang="">
  <p>one vhl</p>
  <ul v-for="vhl in vhls">
    <li>{{ vhl.matricule }} ::: {{ vhl.marque }}</li>
  </ul>
</template>

<script>
import dbo from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      vhls: [],
    };
  },
  methods: {
    async getDonnes() {
      const querySnapshot = await getDocs(collection(dbo, "vhls"));
      querySnapshot.forEach((doc) => {
        this.vhls.push(doc.data());
      });

    },
  },
  created() {
    this.getDonne();
  },
};
</script>

<style lang=""></style>
