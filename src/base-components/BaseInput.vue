<template>
  <input
    :type="Type"
    class="
      appearance-none
      block
      w-full
      bg-transparent
      text-white
      border border-gray-200
      rounded
      py-3
      px-3
      leading-tight
      focus:outline-none
    "
    :placeholder="PlaceholderText"
  />
</template>

<script>
export default {
  props: {
    Type: {
      type: String,
    },
    PlaceholderText:{
        type:String
    }
  },
};
</script>