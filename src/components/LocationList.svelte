<script>
    import { locations, selectedLocation } from '../stores/locationStore.js';
    import { onDestroy } from 'svelte';
  
    let locationData = [];
    let unsubscribe;

    function selectLocation(location) {
        selectedLocation.set(location);
    }

    $: selectedLocationValue = $selectedLocation;

    $: {
        unsubscribe = locations.subscribe(value => {
            locationData = value;
        });
    }

    onDestroy(() => {
        unsubscribe();
    });

  </script>
  
  <div>
    {#each locationData as location}
      <div on:click={() => selectLocation(location)} 
        class="location-item {location === selectedLocationValue ? 'selectedlocation' : ''}">
        <div class="name">
          {location.name}
        </div>
      </div>
    {/each}
    </div>
  
  <style>
    .location-item {
      padding: 1rem;
      cursor: pointer;
      border: 1px solid black;
    }
  
    .location-item:hover {
      color: black;
      background-color: rgba(0, 0, 0, 0.1);
    }

    .selectedlocation{
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
    }

    /* Mobile Styling */
    @media (max-width: 768px) {
        .name {
            font-size: 12px;
        }
    }
  </style>
  