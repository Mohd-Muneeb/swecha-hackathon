<template>
	<div class="test-index">
		<h3>Checkout these awesome attractions in the city!</h3>
		<div class="known-places-container">
			<div v-for="(place, index) in knownPlaces" :key="index">
				<Card :place="place.Name" />
			</div>
		</div>

		<button @click="locatorButtonPressed">find locations</button>
		<div class="places-container">
			<div v-if="places">
				<div
					class="cards"
					v-for="(place, index) in places"
					:key="index"
				>
					<Card :place="place.properties.name" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "Hello World!",
			loc: {},
			places: [],
			knownPlaces: [],
		};
	},
	mounted() {
		this.populateKnownPlaces();
	},
	methods: {
		locatorButtonPressed() {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.loc.lat = String(
						position.coords.latitude
					).slice(0, 6);
					this.loc.long = String(
						position.coords.longitude
					).slice(0, 6);
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
				.then(
					(result) =>
						(this.places = result.features)
				)
				.catch((error) => console.log("error", error));
		},
		populateKnownPlaces() {
			var requestOptions = {
				method: "GET",
			};

			fetch(`/assets/json/places.json`, requestOptions)
				.then((response) => response.json())
				.then((result) => (this.knownPlaces = result))
				.catch((error) => console.log("error", error));
		},
	},
};
</script>

<style scoped>
.places-container,
.known-places-container {
	display: flex;
	justify-content: space-between;
}
</style>
