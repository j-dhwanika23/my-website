<template>
  <v-container class="home-div">
    <v-row class="text-center" style="width: 100%; margin: 0 auto; ">
      <div class="headline">
        <span
          class="my-name"
          :style="mobileView?'text-align: center':'text-align:left'"
        >{{ meName }}</span>
        <p
          class="intro para"
          :style="mobileView?'text-align: center':'text-align:left'"
        >{{ tagLine }}</p>
      </div>
      <div style="margin: 10px auto;">
        <v-img :src="mePic" class="my-pic"></v-img>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" class="intro">
        <code style="color:#00b0a6">Hello World!</code>
        <p class="para" v-for="text in para" :key="text">{{ text }}</p>
      </v-col>
    </v-row>
    <v-row class="text-center links">
      <v-col cols="12" class="intro">
        <a href="mailto:dhwanika95@gmail.com">
          <faw-icon class="home-br-icon" :icon="['fas', 'envelope']" />Contact Me
        </a>
        <!-- <div>
          <faw-icon class="circle-icon" :icon="['fas', 'circle']" />

          <a href="https://www.linkedin.com/in/dhwanika-joshi/" target="_blank">
            <faw-icon
              class="home-br-icon"
              :icon="['fab', 'linkedin']"
            />LinkedIn</a
          >
        </div>-->
        <faw-icon class="circle-icon" :icon="['fas', 'circle']" />
        <a href="https://www.linkedin.com/in/dhwanika-joshi/" target="_blank">
          <faw-icon class="home-br-icon" :icon="['fab', 'linkedin']" />LinkedIn
        </a>
        <faw-icon class="circle-icon" :icon="['fas', 'circle']" />
        <a href="https://app.joinhandshake.com/users/15072348" target="_blank">
          <v-img :src="handshake" class="handshake-icon"></v-img>Handshake
        </a>
        <faw-icon class="circle-icon" :icon="['fas', 'circle']" />
        <a href="https://github.com/j-dhwanika23" target="_blank">
          <faw-icon class="home-br-icon" :icon="['fab', 'github']" />GitHub
        </a>
        <faw-icon class="circle-icon" :icon="['fas', 'circle']" />
        <a href="https://trailblazer.me/id/dhwanikajoshi" target="_blank">
          <faw-icon class="home-br-icon" :icon="['fab', 'salesforce']" />Trailhead
        </a>
      </v-col>
      <!-- https://www.researchgate.net/profile/Dhwanika_Joshi
      https://books.google.com/books?id=rNqBDwAAQBAJ&pg=PA219&lpg=PA219&dq=dhwanika+joshi&source=bl&ots=ObebbmrlOj&sig=ACfU3U1IJwDpyuzehZuH19Nl6PQQSgRGSA&hl=en&sa=X&ved=2ahUKEwiG8pDFk_XpAhVFPawKHR_hA-sQ6AEwEHoECAsQAQ#v=onepage&q=dhwanika%20joshi&f=false
      https://www.kaggle.com/dhwanikajoshi
      https://www.youth4work.com/y/dhwanikajoshi-->
    </v-row>
  </v-container>
</template>

<script>
// import mePic from "../assets/dvj170000.jpg";
import mePic from "../assets/dj-utd.jpeg";
import handshake from "../assets/handshake.png";
export default {
  name: "HomePage",
  props: {
    mobileView: Boolean
  },

  data() {
    return {
      mePic,
      handshake,
      meName: "Dhwanika Joshi",
      tagLine: "2020 graduate in Computer Science from UT Dallas",
      para: [
        "I am a Front-End Developer, an artist, a board game enthusiast and a lover of all things baked!",
        "In addition to strong programming skills and problem-solving attitude, I am developing my skills in Product Planning and Management. I’m always eager to learn new languages and development techniques as they contribute to my growth and open the door to many opportunities."
      ]
    };
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Aclonica);
@import url(https://fonts.googleapis.com/css?family=Chivo);

.headline {
  height: 100%;
  padding: 8% 0 1em !important;
}

a {
  color: white !important;
  font-family: Chivo;
}

.intro {
  color: #fff;
  font-size: 20px;
}
.para {
  margin-top: 10px;
  font-family: Chivo;
  text-align: justify;
}
.home-br-icon {
  margin: -5px 10px;
  font-size: 2em;
}
.circle-icon {
  margin: 2px 10px;
  font-size: 0.5em;
}
.links {
  margin-top: 50px;
}

.my-name {
  font-size: xxx-large;
  font-family: Aclonica;
  text-decoration: underline;
  color: white;
  display: block;
  line-height: 1em;
}
.my-pic {
  border-radius: 50%;
  width: 225px;
}

.handshake-icon {
  display: inline-block !important;
  width: 2em;
  border-radius: 3px;
  margin: 0 6px -10px 0;
}
</style>
