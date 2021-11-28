<template>
  <div class="flex flex-wrap justify-center xl:flex xl:flex-nowrap lg:flex lg:flex-nowrap items-center  xl:pl-20 lg:pl-20 relative pt-2 pb-16 cursor-pointer  transform transition duration-500 hover:scale-105">
    <img src="@/assets/logocircle.png" class="h-48" />
    <img :src="projectData.img_url" class="h-24 absolute left-25 top-14  xl:left-32 lg:left-32" />
    <div class="pl-5 pt-6">
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
</style>