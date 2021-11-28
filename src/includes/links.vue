<template>
  <ul class="list-none flex items-center justify-between" :class="[styledProp ? 'styled-mob' : '']">
    <li>
      <router-link to="/" class="text-white mark-geo-regular pb-2"
        >About</router-link
      >
    </li>
    <li>
      <router-link
        to="/projects/logobrand"
        class="text-white mark-geo-regular pb-2"
        >Our Work</router-link
      >
    </li>
    <li>
      <router-link to="/team" class="text-white mark-geo-regular pb-2"
        >Team</router-link
      >
    </li>
    <li>
      <router-link to="/contact" class="text-white mark-geo-regular pb-2"
        >Contact</router-link
      >
    </li>
  </ul>
</template>


<script>
export default {
    props:{
        styledProp:{
            type:Boolean
        }
    }
}
</script>

<style scoped>
   .styled-mob{
    display: block;
    margin-top: 80px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 18%);
    font-size: 30px;
   }

   .styled-mob > li {
       margin-bottom: 50px;
   }
</style>