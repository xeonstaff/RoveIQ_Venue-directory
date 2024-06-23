<script>
    import { locations, selectedLocation } from '../stores/locationStore.js';
    import { get } from 'svelte/store';
  
    function selectLocation(location) {
      selectedLocation.set(location);
    }
  </script>
  
  <aside>
    {#each $locations as location}
      <div on:click={() => selectLocation(location)} class="location-item">
        {location.name}
      </div>
    {/each}
  </aside>
  
  <style>
    .location-item {
      padding: 1rem;
      cursor: pointer;
    }
  
    .location-item:hover {
      background-color: #f0f0f0;
    }
  </style>
  