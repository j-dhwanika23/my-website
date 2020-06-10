<template>
  <div class="header-panel">
    <v-row align="center" justify="center">
      <v-card
        v-for="tab in tabs"
        :key="tab"
        class="ma-3 pa-2 tab-card"
        style="background-color: #00b0a6; color: white;"
        @click="switchTab(tab)"
      >{{ tab }}</v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: { currentTab: String },
  data: () => ({
    tabs: ["Dhwanika", "Education", "Experience", "Projects"]
  }),
  methods: {
    switchTab(tab) {
      this.$emit("update:currentTab", tab);
    }
  }
};
</script>

<style>
.header-panel {
  background-color: #000;
  width: 100%;
}

.tab-card {
  height: 35px;
  width: 22%;
  min-width: 100px;
  text-align: center;
}
</style>
