<template>
  <div class="bg bg-maincolor">
    <div class="container mx-auto">
      <div class="icons-mob block xl:hidden lg:hidden pt-28 pl-28 pr-20">
          <div class="flex  justify-between">
             <a target="_blank" href="https://www.facebook.com/burtulacreative">
                <img src="../assets/fb.png" class="h-12" />
             </a>
             <a target="_blank" href="https://www.instagram.com/burtulacreative">
                 <img src="../assets/insta.png" class="h-12" />
             </a>
             <a target="_blank" href="https://www.linkedin.com/company/burtula/">
                <img src="../assets/lin.png" class="h-12" />
             </a>
          </div>
      </div>
      <div class="hidden xl:block lg:block relative w-1/2 mx-auto">
        <div class="icon absolute top-44  xl:left-96 lg:left-72">
          <div class="relative w-64">
            <img
              src="../assets/right.svg"
              class="h-12 2xl:left-10 xl:absolute xl:-left-12 -top-10"
            />
            <a target="_blank" href="https://www.linkedin.com/company/burtula/">
              <img
              src="../assets/lin.png"
              class="h-12 absolute 2xl:left-64 left-40 -top-2"
              />
            </a>
          </div>
        </div>
        <!--  circle -->
        <div class="flex justify-center pt-10 pb-20">
          <div class="relative">
            <h3 class="text-white font-bold text-lg absolute text-position top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mark-geo-bold">CONTACT</h3>
            <img
              src="../assets/elipse.svg"
              class="object-contain w-full h-44"
            />
          </div>
        </div>
        <div class="icon absolute top-40 2xl:left-28 xl:left-14">
          <div class="relative w-64">
            <a href="https://www.facebook.com/burtulacreative" target="_blank">
                <img src="../assets/fb.png" class="h-12" />
            </a>
            <img
              src="../assets/long.svg"
              class="h-12 absolute -top-5 lef le left-9"
            />
          </div>
        </div>
        <div
          class="
            icon
            absolute
            bottom-0
            2xl:bottom-0 2xl:left-72
            xl:left-56
            lg:left-36
          "
        >
          <div class="relative w-64">
            <a target="_blank" href="https://www.instagram.com/burtulacreative">
              <img src="../assets/insta.png" class="h-12" />
            </a>
            <img
              src="../assets/short.svg"
              class="h-14 absolute -top-11 left-9"
            />
          </div>
        </div>
      </div>
      <div class="2xl:pt-10">
         <Form/>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '../components/global/Form.vue'
export default {
    components:{
        Form
    }
}
</script>

<style scoped lang="scss">
 /*   .text-position{
       left: 50%;
       transform: translate(-48% -50%);
   } */
</style>