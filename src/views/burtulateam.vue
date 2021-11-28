<template>
  <div class="bg-maincolor">
    <div class="pt-20 pb-8 relative pl-2 pr-2 hidden lg:block xl:block">
      <div class="flex flex-wrap justify-center pb-24">
        <!-- image -->
        <div class="image-main w-1/3 pr-8">
          <img src="@/assets/circledot.png" />
          <img src="@/assets/rightline.png" class="unset-width absolute bottom-14 led left-52 ">
        </div>
        <div class="image-main w-1/3 relative">
          <img src="@/assets/circledot.png" />
          <img src="@/assets/lineup.png" class="unset-width-sm h-96 absolute left-1/2 transform -translate-x-1/2">
        </div>
        <div class="image-main w-1/3 pl-8">
          <img src="@/assets/circledot.png" />
          <img src="@/assets/leftline.png" class="unset-width absolute bottom-14 led right-52 ">
        </div>
        <div class="image-main w-1/3 relative top-6">
          <img src="@/assets/circledot.png" />
          <img src="@/assets/vect.png" class="unset-width-sm h-10 absolute right-56">
        </div>
        <div class="image-main w-1/3 relative top-6">
          <img src="@/assets/circledot.png" />
          <img src="@/assets/vect.png" class="unset-width-sm h-10 absolute left-56">
        </div>
      </div>
      <div class="circle absolute bottom-0 left-1/2 transform -translate-x-1/2">
           <img src="@/assets/circledown.png" class="h-24" />
      </div>
    </div>
    <div class="block xl:hidden lg:hidden  pt-96 pb-96 ">
      <h2 class="text-center text-white font-bold ">In Development</h2>
    </div>
  </div>
</template>


<style scoped>
.image-main > img:not(.unset-width, .unset-width-sm){
    height: 280px;
    width: 280px;
    margin: 0 auto;
}

.image-main > .unset-width{
    height: 350px;
}
</style>