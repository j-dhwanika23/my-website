<template>
  <div class="header-panel">
    <v-row align="center" justify="center">
      <v-card
        v-for="tab in tabs"
        :key="tab"
        class="ma-3 pa-2 tab-card"
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
  height: inherit;
}

.tab-card {
  background-color: #00b0a6 !important;
  color: white !important;
  height: 35px;
  width: 22%;
  min-width: 100px;
  text-align: center;
}
</style>
