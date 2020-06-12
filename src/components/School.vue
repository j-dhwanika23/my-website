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
    <div class="degree">{{school.degree}} in Computer Science</div>
    <div class="gpa">{{school.gpa}}</div>
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
@import url(https://fonts.googleapis.com/css?family=Tenali%20Ramakrishna);
@import url(https://fonts.googleapis.com/css?family=Roboto%20Slab);

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
  font-family: Roboto Slab;
  font-weight: bold;
}
.degree {
  /* font-family: Lobster Two; */
  font-family: Tenali Ramakrishna;
  font-size: xx-large;
}
</style>