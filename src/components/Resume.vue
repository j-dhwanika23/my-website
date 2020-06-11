<template>
  <v-container class="edu-div">
    <v-btn class="dwn-btn">
      <faw-icon class="pdf-icon" :icon="['fas', 'file-pdf']" />Download PDF
    </v-btn>jjj
    <link rel="icon" href="../../public/resume.pdf" />
    <!-- <pdf src="../assets/resumeNew.jpg"></pdf> -->
    kkk
    <v-row class="text-center">
      <v-img width="100%" :src="resume"></v-img>
    </v-row>
  </v-container>
</template>

<script>
// import pdf from "vue-pdf";
import resume from "../assets/resumeNew.jpg";
export default {
  components: {},

  data() {
    return { resume };
  }
};
</script>

<style>
.edu-div {
  background-color: white;
  height: 100%;
  border: 3px solid #e7dac2;
}
.dwn-btn {
  z-index: 9999;
  position: absolute !important;
  background-color: #00b0a6 !important;
  color: white !important;
  right: 60px;
  top: 20px;
  box-shadow: 2px 2px 15px #82b1ff !important;
}
.pdf-icon {
  margin: 2px 5px;
  font-size: 1.3em;
}
</style>
