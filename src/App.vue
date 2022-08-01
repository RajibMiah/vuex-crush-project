<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
</template>
<script>
import NavBar from "./components/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style></style>
