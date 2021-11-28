<template>
  <div class="bg bg-maincolor">
    <div class="container mx-auto">
      <div class="icons-mob block xl:hidden lg:hidden pt-28 pl-20 pr-20">
          <div class="flex  justify-between">
             <a href="#">
                <img src="../assets/fb.png" class="h-12" />
             </a>
             <a href="#">
                 <img src="../assets/insta.png" class="h-12" />
             </a>
             <a href="#">
                <img src="../assets/lin.png" class="h-12" />
             </a>
          </div>
      </div>
      <div class="hidden xl:block lg:block relative w-1/2 mx-auto">
        <div class="icon absolute top-44  xl:left-96 lg:left-72">
          <div class="relative w-64">
            <img
              src="../assets/right.svg"
              class="h-12 2xl:left-20 xl:absolute xl:-left-2"
            />
            <img
              src="../assets/lin.png"
              class="h-12 absolute 2xl:left-72 left-48 top-7"
            />
          </div>
        </div>
        <!--  circle -->
        <div class="flex justify-center pt-14 pb-60">
          <div class="relative">
            <h3 class="text-white font-bold text-xl absolute text-position top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mark-geo-bold">CONTACT</h3>
            <img
              src="../assets/elipse.svg"
              class="object-contain w-full h-60"
            />
          </div>
        </div>
        <div class="icon absolute top-48 2xl:left-16 xl:left-8">
          <div class="relative w-64">
            <img src="../assets/fb.png" class="h-12" />
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
            bottom-48
            2xl:bottom-44 2xl:left-60
            xl:left-48
            lg:left-36
          "
        >
          <div class="relative w-64">
            <img src="../assets/insta.png" class="h-12" />
            <img
              src="../assets/short.svg"
              class="h-14 absolute -top-11 left-9"
            />
          </div>
        </div>
      </div>
      <Form/>
    </div>
<!--     <form action="https://formsubmit.co/quji.bolqvadze123@gmail.com" method="POST">
     <input type="text" name="_subject" value="burtula" required>
     <input type="email" name="email" value="guest@gmail.com" required>
     <input type="hidden" name="_next" value="http://localhost:8080/"> 
     <input type="text" name="message" value="hello quji">
     <button type="submit">Send</button>
   </form> -->
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