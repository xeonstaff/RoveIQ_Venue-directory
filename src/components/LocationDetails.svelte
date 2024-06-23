<script>
    import { selectedLocation } from '../stores/locationStore.js';
  </script>
  
  {#if $selectedLocation}
    <section>
      <img src={$selectedLocation.image} alt="Location Image" />
      <h2>{$selectedLocation.name}</h2>
      <img src={$selectedLocation.logo} alt="Location Logo" />
      <p>{$selectedLocation.details}</p>
    </section>
  {:else}
    <p>Select a location to view details.</p>
  {/if}
  
  <style>
    section {
      padding: 1rem;
    }
  
    img {
      max-width: 100%;
    }
  
    h2 {
      margin-top: 0.5rem;
    }
  </style>
  