<template>
  <div class="header-mobile">
    <v-row align="center" justify="center">
      <v-card
        v-for="tab in tabs"
        :key="tab"
        class="ma-3 pa-2 tab-card-2"
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
.header-mobile {
  background-color: #000;
  display: block;
  position: absolute;
  margin: 147px -16px 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px #00b0a6;
}

.tab-card-2 {
  height: 35px;
  width: 50%;
  min-width: 100px;
  text-align: center;
  display: block !important;
}
</style>
