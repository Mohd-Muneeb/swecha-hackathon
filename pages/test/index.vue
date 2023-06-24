<template>
  <div class="">
    <h1 class="text-subtitle-1">hello</h1>
  </div>
</template>

<script>
export default {
  name: "test-index",
  mounted() {
    // this.locatorButtonPressed();
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style></style>
