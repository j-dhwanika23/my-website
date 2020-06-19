<template>
  <v-container class="job-div">
    <v-img style=" display: inline-flex" :width="job.width" :src="job.companyLogo"></v-img>
    <div class="position">{{job.position}}</div>
    <div class="company">{{ job.companyName }}</div>
    <div class="dates">
      <!-- {{ job.companyName }}
      <span style="font-weight: bolder">|</span>-->
      {{ job.startDate }} - {{ job.endDate }}
    </div>
    <div class="description">
      <ul class="list">
        <li v-for="line in splitDescription()" :key="line">
          {{ line }}
          <!-- <hr class="hrule" /> -->
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import utdLogo from "../assets/utd.png";
export default {
  props: {
    job: Object
  },
  data() {
    return {
      utdLogo
    };
  },
  methods: {
    splitDescription() {
      const lines = this.job.description.split(".");
      return lines;
    }
  }
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
  /* padding: 5px; */
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
  width: 70%;
  margin: 0 auto;
}
.list {
  list-style: disc;
  text-align: justify;
}

.hrule {
  border-radius: 50px;
  height: 1px;
  border: 1px;
  background-image: linear-gradient(to right, #76dc9c 0%, #57aed8 100%);
}
</style>
