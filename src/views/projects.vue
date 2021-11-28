<template>
    <div class="bg bg-maincolor relative" style="min-height:897px">
        <div class="background-circle relative">
            <div class="block pt-12 xl:hidden lg:hidden relative top-8 pl-4 pr-4">
                <div class="flex items-center justify-between">
                    <BreadCrumbs/>
                    <div>
                     <img src="@/assets/filter.png" height="30" width="30" @click="curtain=true">
                    </div>
                </div>
            </div>
            <img src="@/assets/fullcircle.png" class="hidden xl:block lg:block main-img">
            <div class="list-items hidden xl:block lg:block z-50 absolute p-8 top-44">
                <ul class="list-none">
                    <li class="text-3xl  text-white mb-6 mark-geo-bold">OUR WORK</li>
                    <router-link to="/projects/logobrand">
                    <li class="text-xl text-white relative mb-6 cursor-pointer transition flex items-center duration-150 border-transparent text-dec" :class="[$route.params.id == 'logobrand' ? 'active-class-main' : '']">
                      <span class="prev"><img src="@/assets/arrow.png" class="h-3 mr-2 arrow-none" :class="[$route.params.id == 'logobrand' ? 'arrow-block' : '']"></span>  
                      Logo & Branding
                    </li>
                    </router-link>
                    <router-link to="/projects/socialmedia">
                        <li class="text-xl text-white mb-6 cursor-pointer flex items-center transition duration-150 border-transparent  text-dec" :class="[$route.params.id == 'socialmedia' ? 'active-class-main' : '']">
                        <span class="prev"><img src="@/assets/arrow.png" class="h-3 mr-2 arrow-none" :class="[$route.params.id == 'socialmedia' ? 'arrow-block' : '']"></span>  
                        Social media & <br> Graphic Design
                        </li>
                    </router-link>
                    <router-link to="/projects/animation">
                        <li class="text-xl text-white mb-6 cursor-pointer flex items-center  transition duration-150 border-transparent text-dec" :class="[$route.params.id == 'animation' ? 'active-class-main' : '']">
                        <span class="prev"><img src="@/assets/arrow.png" class="h-3 mr-2 arrow-none" :class="[$route.params.id == 'animation' ? 'arrow-block' : '']"></span> 
                        Animation
                        </li>
                    </router-link>
                    <router-link to="/projects/uiweb">
                        <li class="text-xl text-white mb-6 cursor-pointer flex items-center transition duration-150 border-transparent text-dec" :class="[$route.params.id == 'uiweb' ? 'active-class-main' : '']">
                        <span class="prev"><img src="@/assets/arrow.png" class="h-3 mr-2 arrow-none" :class="[$route.params.id == 'uiweb' ? 'arrow-block' : '']"></span>
                        UI/UX design
                        </li>
                    </router-link>
                </ul>
            </div>
            <div class="container pt-36 pb-20 xl:pt-28 xl:pb-60 lg:pt-28 lg:pb-60">
                <div class="flex justify-center p-40 mx-auto" v-if="loader">
                    <img src="@/assets/loader2.gif" class="ml-28">
                </div>
                <div class="mx-auto pl-5 pr-5 xl:pl-56 xl:pr-6 lg:pl-56 lg:pr-6" v-else>
                <swiper :breakpoints="swiperOptions.breakpoints"  id="swiperSlide"  slides-per-column-fill="row" :space-between='20'>
                    <swiper-slide v-for="(data, index) in projectData" :key="index" :virtualIndex="index">
                        <ProjectBox :projectData="data" @click="showModalF(data)"></ProjectBox>
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
            <div class="hidden xl:block lg:block">
                <transition name="modal">
                  <Modal v-if="showModal" :modalData="modalData"  @close='showModal = false' />
                </transition>
            </div>
            <div class="block xl:hidden lg:hidden">
                <transition name="modal">
                  <ModalMob  :modalData="modalData" v-if="showModal" @close='showModal = false'/>
                </transition>
            </div>
            <Curtain :curatinStatus="curtain" @closeCurtain="curtain =false"/>
        </div>
    </div>
</template>

<script>
import { collection, getDocs} from "firebase/firestore";
import { db } from "../db/firebase";
import ProjectBox from '../components/global/projectBox.vue'
import Modal from '../components/global/modal.vue'
import ModalMob from '../components/modalmob.vue'
import BreadCrumbs from '../components/breadcrumbs.vue'
import Curtain from '../components/curtain.vue'
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
        ProjectBox,
        Swiper,
        SwiperSlide,
        Modal,
        ModalMob,
        Curtain,
        BreadCrumbs
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

    async getCollectionData() {
        this.loader = true;
        const querySnapshot = await getDocs(collection(db, `${this.$route.params.id}`));
        querySnapshot.forEach((doc) => {
            if(doc.data()){
            this.projectData.push(doc.data())
            }else{
             this.projectData = []
            }
        });
        this.loader=false
        },
    },

    watch: {
    // call again the method if the route changes
    '$route': 'getCollectionData'
    },
    beforeRouteUpdate(to, from, next) {
    this.projectData = []
    next()
  },

    mounted(){
        this.getCollectionData();
    },
}
</script>

<style scoped>
.background-circle{
    position: relative;
}
.background-circle .main-img{
    max-width: 300px;
    width: 100%;
    object-fit: contain;
    left: -20px;
    top: -77px;
    right: 0;
    position: absolute;
    z-index: 30;
}

.arrow-none{
    display: none;
}

.arrow-block{
    display: block ;
}
.text-dec{
    transition: 0.3s;
     font-family: "markgeocapslight";
}

.text-dec:hover{
    color: #00263F;
    transition: 0.3s;
    font-family: "markgeobold";
}

.active-class-main{
    color: #00263F;
    transition: 0.3s;
    font-family: "markgeobold";   
}
.text-dec:hover .arrow-none{
    display: block !important;
    color: #00263F;
    transition: 0.4s;
    font-family: "markgeobold";
}



.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}


</style>