	<template>
		<div class="test-index  bg-slate-200
		">
			<Navbar></Navbar>
			<div class="px-8">
				<h3 class="w-fit mx-auto h-12 text-3xl text-[#121212] font-semibold p-4">
					{{ message }}
				</h3>
				<hr class="my-2" />
				<div class="known-places-container flex flex-wrap">
					<div
						v-for="(place, index) in knownPlaces"
						:key="index"
					>
						<Card :place="place.Name" />
					</div>
				</div>
				<div class="p-4">
					<button
						@click="locatorButtonPressed"
						class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition ease-in duration-100"
					>
						Find Locations
					</button>
				</div>
				<div class="known-places-container">
					<div v-if="places" class="flex flex-wrap gap-12">
						<div
							class=" "
							v-for="(place, index) in places"
							:key="index"
						>
							<Card
								:place="
									place.properties
										.name
								"
							/>
						</div>
					</div>
				</div>
			</div>

			<hr class="my-4 w-[95vw] ml-[2.5vw]"/>

			<div class="my-4">
				<Footer></Footer>
			</div>
		</div>
	</template>

	<script>
	export default {
		data() {
			return {
				message: "Welcome to Hyderbad",
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
		// components: { Footer },
	};
	</script>

	<style scoped>
	.places-container,
	.known-places-container {
		display: flex;
		justify-content: space-between;
	}
	</style>
