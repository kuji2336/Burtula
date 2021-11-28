<template>
   <header>
     <div class="hidden xl:block lg:block">
        <TheHeader/>
     </div>
     <div class="block xl:hidden lg:hidden">
       <TheHeaderMob/>
     </div>
   </header>
  <router-view/>
</template>

<script>
import TheHeader from './includes/TheHeader.vue'
import TheHeaderMob from './includes/TheHeaderMob.vue'
export default {
   components:{
     TheHeader,
     TheHeaderMob
   }
}
</script>
<style>
@font-face {
  font-family: "markgeobold";
  src: url(./assets/fonts/MARKGEO-BOLD.TTF);
  font-display: swap;
}


@font-face {
  font-family: "markgeolight";
  src: url(./assets/fonts/MARKGEO-LIGHT.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeomedium";
  src: url(./assets/fonts/MARKGEO-MEDIUM.TTF);
  font-display: swap;
}


@font-face {
  font-family: "markgeoregular";
  src: url(./assets/fonts/MARKGEO-REGULAR.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeosemibold";
  src: url(./assets/fonts/MARKGEO-SEMIBOLD.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeocapsbold";
  src: url(./assets/fonts/MARKGEOCAPS-BOLD.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeocapslight";
  src: url(./assets/fonts/MARKGEOCAPS-LIGHT.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeocapsmedium";
  src: url(./assets/fonts/MARKGEOCAPS-MEDIUM.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeocapsregular";
  src: url(./assets/fonts/MARKGEOCAPS-REGULAR.TTF);
  font-display: swap;
}

@font-face {
  font-family: "markgeocapssemibold";
  src: url('./assets/fonts/MARKGEOCAPS-REGULAR.TTF');
  font-display: swap;
}

/* utils */
.mark-geo-regular{
  font-family: "markgeoregular";
}

.mark-geo-semi-bold{
  font-family: "markgeosemibold";
}

.mark-geo-medium{
  font-family: "markgeomedium";
}

.mark-geo-bold{
  font-family: "markgeobold";
}

.mark-geo-light{
  font-family: "markgeocapslight";
}

.font-light{
  font-family: "markgeolight";
}

.router-link-active,
 .router-link-exact-active {
    border-bottom: 2px solid #AADBD1;
    color:#AADBD1 !important
 }

</style>