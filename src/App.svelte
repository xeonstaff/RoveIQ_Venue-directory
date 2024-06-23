<script>
	import LocationList from './components/LocationList.svelte';
	import LocationDetails from './components/LocationDetails.svelte';
	import AdSlideshow from './components/AdSlideshow.svelte';
	import { onMount } from 'svelte';
	import { locations, selectedLocation } from './stores/locationStore.js';
  
	onMount(async () => {
	  const locationData = await fetchLocations();
	  locations.set(locationData);
	});
  
	function fetchLocations() {
	  return [
		// Replace with actual data fetching logic
		{ id: 1, name: 'Location 1', image: 'location1.jpg', logo: 'logo1.png', details: 'Details about Location 1' },
		{ id: 2, name: 'Location 2', image: 'location2.jpg', logo: 'logo2.png', details: 'Details about Location 2' },
	  ];
	}
  </script>
  
  <main style="display: flex; height: 100vh;">
	<div style="flex: 1; overflow-y: auto;">
	  <LocationList />
	</div>
	<div style="flex: 2; display: flex; flex-direction: column;">
	  <LocationDetails />
	</div>
	<div style="flex: 1;">
	  <AdSlideshow />
	</div>
  </main>
  
  <style>
	main {
	  display: flex;
	}
  </style>
  