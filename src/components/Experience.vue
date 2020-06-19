<template>
  <v-container class="home-div exp-div">
    <v-row class="text-center" style="color: white;padding-top: 100px">
      <v-col v-for="job in jobs" :key="job" class="mb-4" cols="12">
        <Job :job="job" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Job from "./Job";
import jobsJson from "../json/jobs.json";
export default {
  components: {
    Job
  },

  data() {
    return {
      jobs: jobsJson
    };
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
</style>
