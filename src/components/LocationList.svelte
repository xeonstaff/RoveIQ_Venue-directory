<script>
    import { locations, selectedLocation } from '../stores/locationStore.js';
    import { onDestroy } from 'svelte';
  
    function selectLocation(location) {
      selectedLocation.set(location);
    }
    
    let locationData = []

    const unsubscribe = locations.subscribe(value => {
        locationData = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

  </script>
  
  <aside>
    {#each locationData as location}
      <div on:click={() => selectLocation(location)} class="location-item">
        <div class="name">{location.name}</div>
      </div>
    {/each}
  </aside>
  
  <style>
    .location-item {
      padding: 1rem;
      cursor: pointer;
      border: 1px solid black;
    }
  
    .location-item:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }


/* Layout adjustment for mobile */
@media (max-width: 768px) {
    .name {
        font-size: 12px;
    }
}
  </style>
  