<template>
  <v-container>
    <v-row class="text-center" style="width: 100%; margin: 0 auto; ">
      <v-col cols="7" class="headline">
        <span class="my-name">{{ meName }}</span>
        <p class="intro para">{{ tagLine }}</p>
      </v-col>
      <v-col cols="5">
        <v-img :src="mePic" class="my-pic"></v-img>
      </v-col>
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
        <a href="https://trailblazer.me/id/dhwanikajoshi" target="_blank">
          <faw-icon class="home-br-icon" :icon="['fab', 'salesforce']" />Trailhead
        </a>
        <faw-icon class="circle-icon" :icon="['fas', 'circle']" />

        <a href="https://github.com/j-dhwanika23" target="_blank">
          <faw-icon class="home-br-icon" :icon="['fab', 'github']" />GitHub
        </a>
        <faw-icon class="circle-icon" :icon="['fas', 'circle']" />

        <a href="https://twitter.com/dhwanika_joshi/" target="_blank">
          <faw-icon class="home-br-icon" :icon="['fab', 'twitter-square']" />Twitter
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
export default {
  name: "HomePage",

  data() {
    return {
      mePic,
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
  padding: 8% 0 !important;
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
  text-align: left;
}
.my-pic {
  border-radius: 50%;
  width: 60%;
}
</style>
