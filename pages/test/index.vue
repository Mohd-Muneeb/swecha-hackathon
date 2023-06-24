<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!",
    };
  },
  mounted() {
    this.locatorButtonPressed();
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
