<template>
  <v-app>
    <v-app-bar app class="header-bar">
      <div v-if="mobileView" class="menu-icon">
        <faw-icon :icon="['fas', 'bars']" @click="showNavMenu = !showNavMenu" />
      </div>
      <Header v-else :currentTab.sync="currentTab" />
      <HeaderMobile v-if="showNavMenu" :currentTab.sync="currentTab" />
    </v-app-bar>

    <v-content class="app-div">
      <div v-if="currentTab === 'Dhwanika'" class="home-div">
        <HomePage />
      </div>
      <div v-else-if="currentTab === 'Education'" class="app-div">
        <Education />
      </div>
      <div v-else-if="currentTab === 'Experience'" class="app-div">
        <Experience />
      </div>
      <div v-else-if="currentTab === 'Projects'" class="app-div">
        <Projects />
      </div>
      <div v-else-if="currentTab === 'Resume'" class="app-div">
        <Resume />
      </div>
      <v-btn
        class="attribution-btn"
        x-small
        href="https://www.freepik.com/free-photos-vectors/background"
        target="_blank"
      >
        Background vectors created by starline -
        www.freepik.com
        <faw-icon style="font-size:1em; margin: 0 5px" :icon="['fas', 'arrow-right']" />
      </v-btn>
    </v-content>
  </v-app>
</template>

<script>
//  -----------------   COMPONENTS  ----------------
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import HomePage from "./components/HomePage";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

//   ----------------  ASSETS  -----------------------
import prism from "./assets/prism.svg";

export default {
  name: "App",

  components: {
    Header,
    HeaderMobile,
    HomePage,
    Education,
    Experience,
    Projects,
    Resume
  },

  data() {
    return {
      currentTab: "Dhwanika",
      prism,
      mobileView: false,
      showNavMenu: false
    };
  },
  created() {
    this.switchView();
  },
  methods: {
    switchView() {
      console.log(window.innerWidth);
      this.mobileView = window.innerWidth <= 900;
    }
  }
};
</script>

<style scoped>
.app-div {
  background-image: url("https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.header-bar {
  background-color: #000 !important;
  box-shadow: 0 2px 10px #00b0a6;
}
.home-div {
  background-color: rgba(21, 34, 49, 0.8);
  height: 100%;
}
.attribution-btn {
  width: 100%;
  color: black !important;
}
.menu-icon {
  color: #00b0a6;
  font-size: 2em;
  border: 1px solid #00b0a6;
  padding: 0 10px;
  border-radius: 8px;
}
v-container {
  max-width: 1000px !important;
}
</style>
