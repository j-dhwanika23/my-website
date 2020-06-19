<template>
  <v-container class="home-div exp-div">
    <v-btn
      class="dwn-btn"
      href="https://drive.google.com/file/d/1VOQaYICxn1oLeaFbeQOSPWBUuyy7a0_8/view?usp=sharing"
    >
      <faw-icon class="pdf-icon" :icon="['fas', 'file-pdf']" />Download Resume
    </v-btn>
  </v-container>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },
  computed: {
    resumeUrl() {
      return require("../assets/dvj-res.pdf");
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    }
  }
};
</script>

<style>
.exp-div {
  /* background-color: white;
  height: 100%;
  border: 3px solid #e7dac2; */
  background-color: #1bafa67a !important;
}
.dwn-btn {
  z-index: 9999;
  position: fixed !important;
  top: 100px;
  right: 30px;
  background-color: #000 !important;
  color: white !important;
  box-shadow: 2px 2px 15px #00b0a6 !important;
}
.pdf-icon {
  margin: 2px 5px;
  font-size: 1.3em;
}
</style>
