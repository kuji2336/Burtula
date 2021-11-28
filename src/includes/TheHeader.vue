<template>
    <div class="header bg-maincolor pt-4 pb-4 pr-12 pl-12">
        <div class="header flex justify-between items-center">
           <div class="w-1/2">
             <router-link to="/"> 
                 <img src="../assets/burtulalogo.svg" class="object-contain h-10 relative z-50" :class="[routerLocation ? 'ml-32' :'']">
              </router-link>
           </div>
           <div class="w-1/2 pl-12 pr-12">
              <Links />
           </div>
        </div>
    </div>
</template>

<script>
import Links from './links.vue'
export default {
    components:{
        Links
    },
    computed:{
       routerLocation(){
           if(this.$route.path != '/team' && this.$route.path != '/' && this.$route.path != '/contact'){
              return  true
           }else{
               return false
           }
       }
    }
}
</script>
