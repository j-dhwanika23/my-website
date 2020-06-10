<template>
  <v-container class="edu-div">
    <v-row class="text-center">
      <v-col v-for="school in schools" :key="school" class="mb-4" cols="12">
        <School :school="school" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import School from "./School";
export default {
  components: {
    School
  },

  data() {
    return {
      schools: [
        {
          name: "The University of Texas at Dallas",
          gpa: "3.3/ 4.0",
          degree: "MS",
          logo:
            "https://cdn.freelogovectors.net/wp-content/uploads/2018/03/ut-dallas-logo03.png",
          aspect: "1",
          width: "105px"
        },
        {
          name: "Manipal University Jaipur",
          gpa: "8.31/ 10.00",
          degree: "B.Tech.",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Manipal_University_logo.png/220px-Manipal_University_logo.png",
          aspect: "0.83",
          width: "90px"
        }
      ]
    };
  }
};
</script>

<style>
.edu-div {
  background-color: white;
  height: 100%;
  border: 3px solid #e7dac2;
}
</style>