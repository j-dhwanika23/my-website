<template>
  <v-container class="edu-div">
    <faw-icon style="font-size:4em; margin: 10px 5px; color: #00b0a6;" :icon="['fas', 'tools']" />
    <v-alert outlined color="#00b0a6" class="message">
      Hi There! Thanks for stopping by. Your presence is valued, please visit
      again in 2 days... There's interesting content coming up.
    </v-alert>
    <v-img :src="design" width="40%" style="margin: 0px auto"></v-img>
  </v-container>
</template>

<script>
import avatar from "../assets/avatar2.jpg";
import design from "../assets/design.svg";
export default {
  components: {},

  data() {
    return { avatar, design };
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Chivo);
.edu-div {
  /* background-color: white; */
  height: 100%;
  border: 3px solid #e7dac2;
  text-align: center;
}
.message {
  font-size: 20px;
  width: 60% !important;
  margin: 0 auto;
  font-family: Chivo;
}
</style>
