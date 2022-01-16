<template>
  <div class="bg-maincolor">
    <div class="pt-20 pb-8 relative pl-2 pr-2 hidden lg:block xl:block">
      <div class="flex flex-wrap justify-center pb-24">
        <!-- image -->
        <div class="image-main w-1/3 pr-8">
          <img src="@/assets/circledot.png" class="2xl:absolute 2xl:left-60" />
          <img src="@/assets/rightline.png" class="unset-width absolute bottom-14 led left-52 2xl:left-96">
        </div>
        <div class="image-main w-1/3 relative">
          <img src="@/assets/circledot.png" />
          <img src="@/assets/lineup.png" class="unset-width-sm h-96 absolute left-1/2 transform -translate-x-1/2">
        </div>
        <div class="image-main w-1/3 pl-8">
          <img src="@/assets/circledot.png" class="2xl:absolute 2xl:right-60" />
          <img src="@/assets/leftline.png" class="unset-width absolute bottom-14 led right-52 2xl:right-96">
        </div>
        <div class="image-main w-1/3 relative top-6">
          <img src="@/assets/circledot.png" class="2xl:relative left-20"  />
          <img src="@/assets/vect.png" class="unset-width-sm h-10 absolute right-56">
        </div>
        <div class="image-main w-1/3 relative top-6">
          <img src="@/assets/circledot.png" class="2xl:relative 2xl:right-20" />
          <img src="@/assets/vect.png" class="unset-width-sm h-10 absolute left-56">
        </div>
      </div>
      <div class="circle absolute bottom-0 left-1/2 transform -translate-x-1/2">
           <div class="relative">
             <h3 class="font-semibold text-white text-2xl absolute title-main">TEAM</h3>
             <img src="@/assets/circledown.png" class="h-24" />
           </div>
      </div>
    </div>
    <div class="block xl:hidden lg:hidden  pt-20 pb-14 ">
            <div class="mx-auto pl-5 pr-5 xl:pl-56 xl:pr-6 lg:pl-56 lg:pr-6 2xl:pl-96 relative" >
                <swiper :breakpoints="swiperOptions.breakpoints"  id="swiperSlide"  slides-per-column-fill="row" :space-between='20'>
                    <swiper-slide >
                        <div class="item-wrapper flex justify-center">
                            <div>
                              <div class="relative">
                               <img src="@/assets/circledot.png" class="wrapper-image" />
                               <img src="@/assets/team.png" class="image-inners" />
                              </div>
                              <div>
                                <h3 class="text-center font-bold text-lg text-white my-2">Anita Ejibia</h3>
                                <p class="text-center font-light text-base text-white">CEO&co-founder & Graphic Designer,<br>loves playing tennis</p>
                              </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide >
                        <div class="item-wrapper flex justify-center">
                            <div>
                              <div class="relative">
                               <img src="@/assets/circledot.png" class="wrapper-image" />
                               <img src="@/assets/team.png" class="image-inners" />
                              </div>
                              <div>
                                <h3 class="text-center font-bold text-lg text-white my-2">Anita Ejibia</h3>
                                <p class="text-center font-light text-base text-white">CEO&co-founder & Graphic Designer,<br>loves playing tennis</p>
                              </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide >
                        <div class="item-wrapper flex justify-center">
                            <div>
                              <div class="relative">
                               <img src="@/assets/circledot.png" class="wrapper-image" />
                               <img src="@/assets/team.png" class="image-inners" />
                              </div>
                              <div>
                                <h3 class="text-center font-bold text-lg text-white my-2">Anita Ejibia</h3>
                                <p class="text-center font-light text-base text-white">CEO&co-founder & Graphic Designer,<br>loves playing tennis</p>
                              </div>
                            </div>
                        </div>
                    </swiper-slide>
                      <swiper-slide >
                        <div class="item-wrapper flex justify-center">
                            <div>
                              <div class="relative">
                               <img src="@/assets/circledot.png" class="wrapper-image" />
                               <img src="@/assets/team.png" class="image-inners" />
                              </div>
                              <div>
                                <h3 class="text-center font-bold text-lg text-white my-2">Anita Ejibia</h3>
                                <p class="text-center font-light text-base text-white">CEO&co-founder & Graphic Designer,<br>loves playing tennis</p>
                              </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="fixed bottom-0 left-0 bg-maincolor p-4 w-full z-10  xl:bg-maincolor xl:w-56 lg:bg-maincolor  xl:absolute lg:absolute xl:bottom-22 xl:right-20 xl:left-auto lg:bottom-28 lg:right-20">
                   <div class="flex justify-center xl:block lg:block">
                        <div>
                            <button @click="prev"><img src="@/assets/prevarr.png"></button>
                             <button @click="next"><img src="@/assets/nextarr.png" class="ml-8"></button>
                        </div>
                   </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Virtual, Navigation} from "swiper";
import { Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";
SwiperCore.use([Virtual, Navigation]);
export default {
    data(){
        return{
           projectData:[],
           showModal:false,
           modalData:[],
           loader:false,
           curtain:false,
           swiperOptions:{
               breakpoints:{
                1024: {
                    slidesPerView: 2,
                    slidesPerColumn:2,
                    slidesPerGroup:3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    slidesPerColumn:2,
                    slidesPerGroup:1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1,
                    slidesPerColumn:2,
                    slidesPerGroup:1,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    slidesPerColumn:2,
                    slidesPerGroup:1,
                    spaceBetween: 20,
                },
               }
           }
        }
    },
    components:{
        Swiper,
        SwiperSlide,
    },

    methods:{

    showModalF(data){
     this.showModal = true;
     this.modalData = data
    },

    next(){
       let swiper = document.getElementById('swiperSlide').swiper
       swiper.slideNext();
    },

    prev(){
       let swiper = document.getElementById('swiperSlide').swiper
       swiper.slidePrev();
    },
    }
}
</script>
<style scoped>
.image-main > img:not(.unset-width, .unset-width-sm){
    height: 280px;
    width: 280px;
    margin: 0 auto;
}

.image-main > .unset-width{
    height: 350px;
}

.title-main{
  left: 50%;
  transform: translate(-50%, 100%);
}

.wrapper-image{
  height: 230px;
  margin: 0 auto;
}

.image-inners{
  position: absolute;
  z-index: 99;
  top: 0;
  left: 50%;
  transform: translate(-50%, 4%);
  border-radius: 50%;
}
</style>