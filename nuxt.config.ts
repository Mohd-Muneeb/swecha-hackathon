// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// css: ['vuetify/lib/styles/main.sass'],
	devtools: { enabled: true },
	build: {},
	modules: ["@nuxtjs/tailwindcss"],
	vite: {
		define: {
			"process.env.DEBUG": false,
		},
	},
});
