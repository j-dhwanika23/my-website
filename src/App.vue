<template>
  <v-app>
    <div>
      <v-app-bar app class="header-bar">
        <div v-if="mobileView" class="menu-icon">
          <faw-icon ref="menu" :icon="['fas', 'bars']" @click="showNavMenu = !showNavMenu" />
        </div>
        <div v-if="mobileView" class="menu-icon">
          <faw-icon ref="download" :icon="['fas', 'arrow-alt-circle-down']" />
          <!-- <i class="fas fa-arrow-alt-circle-down"></i> -->
        </div>
        <!-- <Header v-else :currentTab.sync="currentTab" /> -->
        <div v-else class="header-panel">
          <v-row align="center" justify="center">
            <v-card
              v-for="tab in tabs"
              :key="tab"
              class="ma-3 pa-2 tab-card"
              @click="switchTab(tab)"
            >
              <a :href="`#${tab.id}`">{{tab.name }}</a>
            </v-card>
          </v-row>
        </div>

        <!-- <HeaderMobile
        v-if="showNavMenu"
        :currentTab.sync="currentTab"
        v-closable="{
    exclude: ['menu'],
    handler: 'onClose'
  }"
        />-->
        <div
          v-if="showNavMenu"
          class="header-mobile"
          v-closable="{
    exclude: ['menu'],
    handler: 'onClose'
  }"
        >
          <v-row align="center" justify="center">
            <v-card
              v-for="tab in tabs"
              :key="tab"
              class="ma-3 pa-2 tab-card-2"
              style="background-color: #00b0a6; color: white;"
              @click="switchTab(tab)"
            >
              <a :href="`#${tab.id}`">{{tab.name }}</a>
            </v-card>
          </v-row>
        </div>
      </v-app-bar>
    </div>
    <v-content class="content-div" style="max-width: unset !important">
      <div id="home" class="app-div" :style="mobileView?'height:unset':''">
        <HomePage :mobileView="mobileView" />
      </div>
      <div id="edu" class="app-div" :style="mobileView?'height:unset':''">
        <Education />
      </div>
      <div id="exp" class="app-div" style="height: unset">
        <Experience />
      </div>
      <!--<div id="pro" class="app-div"></div> -->
      <div v-if="!mobileView" id="res" class="app-div">
        <Resume />
      </div>
      <v-btn class="attribution-btn" x-small href="https://www.svgbackgrounds.com/" target="_blank">
        I got the cool background for the website from SVGBackgrounds.com.
        <faw-icon style="font-size:1em; margin: 0 5px" :icon="['fas', 'arrow-right']" />
      </v-btn>
    </v-content>
  </v-app>
</template>

<script>
//  -----------------   COMPONENTS  ----------------
// import Header from "./components/Header";
// import HeaderMobile from "./components/HeaderMobile";
import HomePage from "./components/HomePage";
import Education from "./components/Education";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
import Resume from "./components/Resume";

//   ----------------  ASSETS  -----------------------
import prism from "./assets/prism.svg";

export default {
  name: "App",

  components: {
    // Header,
    // HeaderMobile
    HomePage,
    Education,
    Experience,
    // Projects,
    Resume
  },

  data() {
    return {
      currentTab: "Dhwanika",
      prism,
      mobileView: false,
      showNavMenu: false,
      tabs: [
        { name: "Dhwanika", id: "home" },
        { name: "Education", id: "edu" },
        { name: "Experience", id: "exp" }
      ]
      // { name: "Projects", id: "pro" }
      // { name: "Resume", id: "res" }
    };
  },
  created() {
    this.switchView();
    window.addEventListener("resize", this.switchView);
    console.log("Height:", window.innerHeight);
  },
  methods: {
    switchView() {
      console.log(window.innerWidth);
      this.mobileView = window.innerWidth <= 900;
    },
    onClose() {
      this.showNavMenu = false;
    },
    switchTab(tab) {
      // this.$emit("update:currentTab", tab);
      console.log("switched to:", tab);
      this.showNavMenu = false;
    }
  }
};
</script>

<style scoped>
.content-div {
  background-color: #00b0a6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(160,640,305)'%3E%3Cstop offset='0' stop-color='%2300b0a6'/%3E%3Cstop offset='1' stop-color='%23e7e35b'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='555' height='462.5' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.16'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.mobile-div {
  width: 114vw;
}
.app-div {
  /* height: 110%; */
  background-color: #00b0a6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(160,640,305)'%3E%3Cstop offset='0' stop-color='%2300b0a6'/%3E%3Cstop offset='1' stop-color='%23e7e35b'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='555' height='462.5' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.16'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  /* box-shadow: 0 -1px 20px #73c980; */
  height: 100vh;
}
.header-bar {
  background-color: #000 !important;
  box-shadow: 0 2px 10px #00b0a6;
}
.home-div {
  background-color: rgba(21, 34, 49, 0.8);
  /* background-color: #77ae6552; */
  /* height: 100%; */
  box-shadow: 0 2px 25px #181d1bba;
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

/* ------------------------------------- Header -------------------------------------------------  */
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
/* ----------------------------------- Header Mobile ----------------------------------------------- */
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
