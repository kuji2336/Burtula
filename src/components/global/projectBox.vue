<template>
  <div class="flex flex-wrap justify-center xl:flex xl:flex-nowrap lg:flex lg:flex-nowrap items-center  xl:pl-20 lg:pl-20 relative pt-2 pb-16 cursor-pointer">
    <div class="relative transform transition duration-500 hover:scale-105">
      <img src="@/assets/logocircle.png" class="main-logo"/>
      <img :src="projectData.img_url" class="h-24 absolute image-position " />
    </div>
    <div class="pl-5 pt-6 w-10/12 ">
      <h3 class="text-white pb-3 text-xl mark-geo-bold text-center xl:text-left lg:text-left">{{projectData.project_name}}</h3>
      <p class="text-white wrapped-text font-light">
        {{projectData.project_description}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props:['projectData']
}
</script>

<style scoped>
.wrapped-text{
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.image-position{
  position: absolute;
  top: 50%;
  transform: translate(46%, -50%);
}

@media(max-width:991px){
  .main-logo{
    height: 190px;
  }
}
</style>