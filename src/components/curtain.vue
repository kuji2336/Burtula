<template>
  <div>
    <li>
      <router-link to="/projects/logobrand" class="text-base text-white">
        Logo & Branding
      </router-link>
    </li>
    <li>
      <router-link
        to="/projects/socialmedia"
        class="text-base text-white wrap-1 my-3"
        >Social media & Graphic Design</router-link
      >
    </li>
    <li>
      <router-link to="/projects/animation" class="text-base text-white">
        Animation
      </router-link>
    </li>
    <li>
      <router-link to="/projects/uiweb" class="text-base text-white">
        UI/UX design
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    curatinStatus: {
      type: Boolean,
    },
  },
  data() {
    return {
      showDrop: true,
    };
  },
  methods: {
    hideCurtain() {
      this.$emit("closeCurtain");
    },
  },
};
</script>

<style scoped>
.wrap-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>