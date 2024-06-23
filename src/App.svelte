<script>
	import LocationList from './components/LocationList.svelte';
	import LocationDetails from './components/LocationDetails.svelte';
	import AdSlideshow from './components/AdSlideshow.svelte';
	import { onMount } from 'svelte';
	import { loadAds, loadLocations } from './stores/locationStore.js';

	onMount(async () => {
		await loadLocations();
		await loadAds();
	});
  </script>

  <main style="display: flex; height: 100vh;">
	<div class="container">
		<div class="locationlist">
			<LocationList />
		</div>
		<div class="locationdetails">
			<LocationDetails />
		</div>
		<div class="adslideshow">
			<AdSlideshow />
		</div>
	</div>
  </main>
  
  <style>
/* Default layout for desktop/tablet */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 20px;
}

.locationlist {
	grid-area: 'locationlist';
    min-width: 125px;
}

.locationdetails {
	grid-area: 'locationdetails';
    min-width: 200px;
    border: 1px solid black;
}
.adslideshow {
	grid-area: 'adslideshow';
    min-width: 60px;
	border: 1px solid black;
}

/* Layout adjustment for mobile */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 2fr;
		grid-template-areas: 
			'locationlist adslideshow' 
			'locationdetails locationdetails';
    }

	.locationlist {
        max-width: 200px;
    }

    .locationdetails {
        width: 100%;
    }
}
  </style>
  