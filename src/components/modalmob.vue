<template>
    <div class="fixed bg-white  bottom-0 left-0 w-full  z-40  rounded-tr-3xl rounded-tl-3xl pt-8 pb-8 pl-4 pr-4">
        <div class="close-icon relative">
           <div class="absolute right-3 -top-2">
              <img src="@/assets/close.png" class="h-5 cursor-pointer" @click="$emit('close')">
          </div>
        </div>
        <div class="modal-body-mn">
            <div class="w-full flex justify-center p-5">
              <img :src="modalData.img_url" class="image-size">
            </div>
            <div class="w-full">
                <h3 class="text-xl font-bold mb-3 mark-geo-bold">{{modalData.project_name}}</h3>
                <div class="max-h-60 overflow-y-auto font-light">
                    <p>{{modalData.project_description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:['modalData'],
}
</script>

<style scoped>
.image-size{
    height: 150px;
    object-fit: contain;
    width: 150px;
}
</style>