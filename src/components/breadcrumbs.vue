<template>
    <div class="flex items-center justify-between">
       <div class="flex">
            <img src="@/assets/mob.png" width="30" height="20">
            <p class="text-baseorange mark-geo-regular text-sm ml-2">{{breadCrumbName}}</p>
       </div>
    </div>
</template>


<script>
export default {
    computed:{
        breadCrumbName(){
            if(this.$route.params.id == 'logobrand'){
                return 'Logo & Branding'
            }else if(this.$route.params.id == 'socialmedia'){
                return ' Social media &  Graphic Design'
            }else if(this.$route.params.id == 'animation'){
                return 'Animation'
            }else{
                return 'UI/UX design'
            }
        }
    }
}
</script>