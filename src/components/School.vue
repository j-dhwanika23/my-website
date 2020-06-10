<template>
  <v-container class="school-div">
    <v-img
      style=" display: inline-flex"
      :width="school.width"
      :src="school.logo"
      :aspect-ratio="school.aspect"
    ></v-img>
    <div class="name">{{school.name}}</div>
    <v-spacer></v-spacer>
    <div class="gpa">{{school.gpa}}</div>
    <div class="degree">{{school.degree}} in Computer Science</div>
  </v-container>
</template>

<script>
import utdLogo from "../assets/utd.png";
export default {
  props: {
    school: Object
  },
  data() {
    return {
      utdLogo
    };
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lobster%20Two);
.school-div {
  border-radius: 25px;
  height: 100%;
  margin-top: 20px;
}
.name {
  font-family: Lobster Two;
  font-size: xx-large;
  font-weight: bold;
  text-decoration: underline;
}
.gpa {
  font-family: monospace;
  font-weight: bold;
}
.degree {
  font-family: Lobster Two;
  font-size: xx-large;
}
</style>