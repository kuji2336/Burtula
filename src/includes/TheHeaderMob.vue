<template>
  <nav class="bg-maincolor">
    <div class="flex items-center justify-between p-4 fixed left-0 w-full top-0 bg-maincolor z-30">
      <div>
        <router-link to="/">
          <img
            src="../assets/burtulalogo.svg"
            class="object-contain h-10 relative z-50"
          />
        </router-link>
      </div>
      <div @click="changeDrop">
          <Burger :dropdownStatus='showDrop'/>
      </div>
    </div>
    <Dropdown :dropdownStatus='showDrop' />
  </nav>
</template>

<script>
import Burger from './burger.vue'
import Dropdown from './dropdown.vue'
export default {
    components:{
        Burger,
        Dropdown
    },
    data(){
      return{
        showDrop:false
      }
    },

    methods:{
      changeDrop(){
        this.showDrop = ! this.showDrop
      }
    },
    watch:{
      $route (to, from){
          console.log(to);
          console.log(from);
          this.showDrop = false
      }
    }
}
</script>