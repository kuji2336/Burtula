<template>
    <div id="menuToggle">
        <input type="checkbox" :checked="dropdownStatus" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
    </div>
</template>

<script>
export default {
  props:{
    dropdownStatus:{
      type:Boolean
    }
  },



}
</script>

<style scoped>
#menuToggle {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menuToggle input {
  display: flex;
  width: 60px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  opacity: 0; /* hide input */
  z-index: 1; /* top of the menu */
}

#menuToggle span{
    width: 38px;
    height: 2px;
    margin-bottom: 10px;
    background: #AADBD1;
    border-radius: 1px;
    -webkit-transition: all .5s cubic-bezier(.08,.81,.87,.71);
    -moz-transition: all .5s cubic-bezier(.08,.81,.87,.71);
    -ms-transition: all .5s cubic-bezier(.08,.81,.87,.71);
    -o-transition: all .5s cubic-bezier(.08,.81,.87,.71);
    transition: all .5s cubic-bezier(.08,.81,.87,.71);
}


#span1 {
  transform-origin: 4px 0px;
}

#span3 {
  transform-origin: bottom right;
}

#menuToggle input:checked ~ #span1 {
    background-color: #AADBD1;
    transform: rotate(45deg) translate(5px);
}
#menuToggle input:checked ~ #span2{
    background-color: #AADBD1;
    transform: rotate(494deg) translate(2px);
}
#menuToggle input:checked ~ #span3 {
  background-color: #0c2461;
  transform: rotate(45deg);
  opacity: 0;
}
</style>