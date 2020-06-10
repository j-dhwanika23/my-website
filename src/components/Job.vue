<template>
  <v-container class="job-div">
    <v-row>
      <v-col md="2"
        ><v-img
          :width="job.width"
          :src="job.companyLogo"
          class="co-logo"
        ></v-img
      ></v-col>
      <v-col md="10">
        <v-row>
          <v-col md="8">
            <div class="position">{{ job.position }}</div></v-col
          >
          <v-col md="4"
            ><div class="dates">
              {{ job.startDate }} - {{ job.endDate }}
            </div></v-col
          >
        </v-row>

        <div class="company">{{ job.companyName }}</div>

        <div class="description">
          <ul>
            <li v-for="line in splitDescription()" :key="line">{{ line }}</li>
          </ul>
        </div></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import utdLogo from "../assets/utd.png";
export default {
  props: {
    job: Object,
  },
  data() {
    return {
      utdLogo,
    };
  },
  methods: {
    splitDescription() {
      const lines = this.job.description.split(".");
      return lines;
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lobster%20Two);
@import url(https://fonts.googleapis.com/css?family=Tenali%20Ramakrishna);
@import url(https://fonts.googleapis.com/css?family=Roboto%20Slab);

.job-div {
  border-radius: 25px;
  height: 100%;
  margin-top: 20px;
}
.position {
  font-family: Lobster Two;
  font-size: xx-large;
  font-weight: bold;
}
.dates {
  font-family: Tenali Ramakrishna;
  font-size: 25px;
  padding: 5px;
  text-align: center;
}
.company {
  font-size: xx-large;
  font-family: Tenali Ramakrishna;
}
.co-logo {
  display: inline-flex !important;
  margin: 10px;
}
.description {
  font-family: Roboto Slab;
}
</style>
