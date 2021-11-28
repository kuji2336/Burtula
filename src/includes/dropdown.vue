<template>
    <div class="h-full z-20  bg-maincolor fixed left-0 w-full  transition duration-75 " :class="[dropdownStatus ? 'top-0' : '-top-full']">
         <div>
             <Links :styledProp="true"/>
         </div>
    </div>
</template>


<script>
import Links from './links.vue'
export default {
    props:{
        dropdownStatus:{
            type:Boolean
        }
    },

    components:{
        Links
    }
} 

</script>