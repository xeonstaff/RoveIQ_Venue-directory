<script>
	import LocationList from './components/LocationList.svelte';
	import LocationDetails from './components/LocationDetails.svelte';
	import AdSlideshow from './components/AdSlideshow.svelte';
	import { onMount } from 'svelte';
	import { loadAds, loadLocations } from './stores/locationStore.js';
	import 'animate.css';

	onMount(async () => {
		await loadLocations();
		await loadAds();
	});
  </script>

  <main
  	class="animate__animated animate__fadeInTopRight"
  >
	<div class="header">
		<h1>RoveIQ</h1>
		<h3 class="subheader">Digital Kiosk and Interactive Wayfinding</h3>
	</div>
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

main{
	margin: 0;
	padding: 0;
	height: 100%;

	/* background animation */
    background-color: #f0f0f0; 
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.7), rgba(105, 176, 247, 0.7));
    background-size: 400% 400%; 
    animation: gradientMovement 8s infinite alternate;
}

@keyframes gradientMovement {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

.header{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-height: 100px;
	line-height: 0px;
	padding: 5px 0px;
	background-color: rgba(0, 0, 0, 0.1);
}
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
	border-radius: 5px;
}
.adslideshow {
	grid-area: 'adslideshow';
    min-width: 60px;
	border: 1px solid black;
	border-radius: 5px;
}

/* Mobile Styling */
@media (max-width: 768px) {
	.subheader{
		font-size: 10px;
	}
    .container {
        grid-template-columns: 1fr 2fr;
		grid-template-rows: auto;
		grid-template-areas: 
			'locationlist adslideshow' 
			'locationdetails locationdetails';
    }

	.locationlist {
		height: 360px;
        max-width: 200px;
    }

	.adslideshow{
		height: 360px;
	}

    .locationdetails {
		grid-area: locationdetails;
        width: 100%;
    }

}
  </style>