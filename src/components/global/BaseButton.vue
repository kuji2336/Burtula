<template>
    <button 
    class="outline-none"
    :style="{
        backgroundColor:backgroundColor,
        width:width,
        color:color,
        borderRadius:borderRadius
    }"
    >
       <slot></slot> 
    </button>
</template>

<script>
export default {
    props:{
        backgroundColor:{
            type:String
        },

        width:{
            type:String
        },

        color:{
            type:String
        },

        borderRadius:{
            type:Number
        }
    }
}
</script>
