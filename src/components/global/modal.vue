<template>   
    <div class="modal-mask">
      <div class="modal-wrapper" @click="closeModal($event)" id="wrapper">
        <div class="modal-container relative z-30">
          <div class="absolute right-8" @click="$emit('close')">
              <img src="@/assets/close.png" class="h-5 cursor-pointer">
          </div>
          <div class="modal-body p-16">
             <div class="flex items-center">
                 <div class="w-1/2">
                    <img :src="modalData.img_url" class="image-size">
                 </div>
                 <div class="w-1/2">
                    <h3 class="text-xl font-bold mb-3 mark-geo-bold">{{modalData.project_name}}</h3>
                    <div class="max-h-60 overflow-y-auto font-light">
                        <p>{{modalData.project_description}}</p>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['modalData'],
    methods:{
      closeModal(event){
        if(event.target.id == 'wrapper'){
          this.$emit('close')
        }
      }
    }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 1000px;
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  font-family: Helvetica, Arial, sans-serif;
}

.image-size{
    height: 200px;
    object-fit: contain;
    width: 200px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 50px;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 50px;
  border: 2px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>