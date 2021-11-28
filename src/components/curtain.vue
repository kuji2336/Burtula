<template>
  <div
    class="
      block
      h-full
      bg-maincolor
      fixed
      z-10
      left-0
      w-full
      xl:hidden
      lg:block
      pt-28
      pl-3
      pr-3
    "
    :class="[curatinStatus ? 'top-0' : '-top-full']"
  >
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-full p-4 bg-baseorange rounded-lg mb-4" @click="hideCurtain">
        <router-link to="/projects/logobrand">
         <div class="flex justify-between items-center">
             <div class="w-full mark-geo-regular text-maincolor">Logo & Branding</div>
             <img src="@/assets/branding.png" class="h-14 w-14">
         </div>
        </router-link>
      </div>
      <div class="w-full p-4 bg-baseorange rounded-lg mb-4" @click="hideCurtain">
      <router-link to="/projects/socialmedia">
        <div class="flex justify-between items-center">
          <div class="w-full mark-geo-regular text-sm text-maincolor">Social media & Graphic Design</div>
          <img src="@/assets/bullhorn.png" class="h-14 w-14">
        </div>
      </router-link>
      </div>
      <div class="w-full p-4 bg-baseorange rounded-lg mb-4" @click="hideCurtain">
       <router-link to="/projects/animation">
       <div class="flex justify-between items-center">
          <div class="w-full mark-geo-regular text-maincolor">Animation</div>
          <img src="@/assets/animation.png" class="h-14 w-14">
       </div>
       </router-link>
      </div>
      <div class="w-full p-4 bg-baseorange rounded-lg mb-4" @click="hideCurtain">
      <router-link to="/projects/uiweb">
        <div class="flex justify-between items-center">
           <div class="w-full mark-geo-regular text-maincolor">UI/UX design</div>
           <img src="@/assets/web-design.png" class="h-14 w-14">
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props:{
     curatinStatus:{
       type:Boolean
     }
   },
   data(){
       return{
           showDrop:true
       }
   },
    methods:{
        hideCurtain(){
           this.$emit('closeCurtain')
        }
    },
}
</script>