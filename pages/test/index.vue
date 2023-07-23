<template>
	<div class="test-index">
		<h3>{{ message }}</h3>
		<!-- <div class="known-places-container">
			<div v-for="(place, index) in places" :key="index">
				<Card :place="place.Name" />
			</div>
		</div> -->

		<div class="places-container">
			<div v-if="places">
				<div
					class="cards"
					v-for="(place, index) in places"
					:key="index"
				>
					<Card :place="place.properties.name" :image="place.properties" :location="place.properties" />
				</div>
			</div>
			<div v-else>
				<h1>No places found</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "Welcome to Hyderabad",
			loc: {},
			places: [],
			knownPlaces: [],
		};
	},
	mounted() {
		// this.populateKnownPlaces();
		this.locatorButtonPressed();
		this.locateNearByPlaces();
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
			var requestOptions = {
				method: "GET",
			};

			fetch(
				`https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${this.loc.long},${this.loc.lat},3000&bias=proximity:78.44847,17.41109&limit=20&apiKey=b47e30ae2e04476aa992b623d259134c`,
				requestOptions
			)
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					this.places = result.features;
				})
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
