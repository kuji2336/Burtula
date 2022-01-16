<template>
  <ul class="list-none flex items-center justify-center" :class="[styledProp ? 'styled-mob' : '']">
    <li class="xl:mx-8 lg:mx-8">
      <router-link to="/" class="text-white mark-geo-regular pb-2 2xl:text-2xl"
        >About</router-link
      >
    </li>
    <li class="xl:mx-8 lg:mx-8  flex items-center justify-between">
      <router-link to="/projects/logobrand" class="text-white mark-geo-regular 2xl:text-2xl flex items-center justify-between">
      <span>Our Work</span> 
      <img  v-if="styledProp" src="../assets/down.png" class="ml-3" height="20" width="20"  @click="toggleArrow" :class="[arrowStatus ? 'toggle-arrow' : '']" />
     </router-link>
    </li>
    <div class="drop block" v-if="styledProp && arrowStatus">
         <Curtain :curatinStatus="curtain" @closeCurtain="curtain=true"/>
    </div>
    <li class="xl:mx-8 lg:mx-8">
      <router-link to="/team" class="text-white mark-geo-regular pb-2 2xl:text-2xl"
        >Team</router-link
      >
    </li>
    <li class="xl:mx-8 lg:mx-8 contact-section">
      <router-link to="/contact" class="text-white mark-geo-regular pb-2 2xl:text-2xl"
        >Contact</router-link
      >
    </li>
  </ul>
</template>


<script>
import Curtain from '../components/curtain.vue'
export default {
    components:{
      Curtain
    },
    props:{
        styledProp:{
            type:Boolean
        }
    },

    data(){
      return{
        arrowStatus:false
      }
    },

    methods:{
      toggleArrow(){
        this.arrowStatus = !this.arrowStatus
      }
    }

}
</script>

<style scoped>
   .styled-mob{
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-40%, 18%);
    font-size: 30px;
   }

   .styled-mob > li {
       margin-top: 50px;
   }

   .toggle-arrow{
     transform: rotate(180deg);
   }


</style>