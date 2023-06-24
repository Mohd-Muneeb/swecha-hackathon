<template>
  <div class="test-index">
    <button @click="locatorButtonPressed">find locations</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!",
      loc: {},
    };
  },
  mounted() {},
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          this.loc.lat = String(position.coords.latitude).slice(0, 6);
          this.loc.long = String(position.coords.longitude).slice(0, 6);
          this.locateNearByPlaces();
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    locateNearByPlaces() {
      //         service = new google.maps.places.PlacesService(map);
      // service.nearbySearch(this.loc, callback);
      // console.log(service)
      //   console.log(this.$api);
      var requestOptions = {
        method: "GET",
      };

      fetch(
        `https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${this.loc.long},${this.loc.lat},3000&bias=proximity:78.44847,17.41109&limit=20&apiKey=b47e30ae2e04476aa992b623d259134c`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style scoped></style>
