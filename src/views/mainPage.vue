<template>
  <div class="bg-maincolor pt-20 pb-11 xl:pt-20 xl:pb-52 lg:pt-20 lg:pb-52">
    <div class="block pl-5 pr-5 xl:pl-12 xl:pr-28 lg:pl-11 lg:pr-24 xl:flex lg:flex">
      <div class="text-side w-full xl:w-1/2 lg:w-1/2">
        <div class="text-wrapper">
          <p class="text-white text-xl xl:text-lg mt-5 mark-geo-medium">We are</p>
          <p class="text-baseColor text-4xl xl:text-5xl lg:text-xl bold font-bold mt-3 mark-geo-bold">
            Burtula - digital <br />
            experience design <br />studio.
          </p>
          <p class="text-white mt-4  xl:text-2xl lg:text-lg xl:mt-9 xl:max-w-lg lg:mt-6 mark-geo-medium ">
            We help connect brands with customers and drive 
            growth by designing elegant, useful and engaging
            experiences.
          </p>
          <router-link to="/contact" class="hidden xl:block lg:block">
            <BaseButton
              class="mt-5 p-3 "
              @mouseenter="setColored"
              @mouseleave="removeColored"
              :color="'#FFFFFF'"
              :backgroundColor="[colored ? '#B92412' : '#EE3A25']"
              :width="'180px'"
              :borderRadius="'5px'"
            >
              <p class="uppercase mark-geo-medium">Contact Us</p>
            </BaseButton>
          </router-link>
        </div>
      </div>
      <div class="image-sdie w-full relative xl:w-1/2 lg:w-1/2">
        <img src="../assets/pn.png" class="w-full mt-9 xl:mt-0 lg:mt-0" />
        <div class="hidden  xl:block lg:block">
          <img
          src="../assets/sideImage.svg"
          class="height-main absolute -top-44 -right-28"
          />
        </div>
        <router-link to="/contact" class="block text-center xl:hidden lg:hidden">
            <BaseButton
              class="mt-5 p-3 contact-section"
              :color="'#FFFFFF'"
              :backgroundColor="'#EE3A25'"
              :width="'220px'"
              :borderRadius="'5px'"
            >
              <p class="uppercase mark-geo-medium">Contact Us</p>
            </BaseButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/global/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  data(){
    return{
      colored:false
    }
  },

  methods:{
    setColored(){
      this.colored = true
    },
    removeColored(){
      this.colored = false
    }
  }
};
</script>
<style>
.height-main {
  height: 750px;
}

@media(max-width:1121px){
  html,body{
  overflow-y: auto;
}
}
</style>