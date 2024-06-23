<script>
    import { selectedLocation } from '../stores/locationStore.js';

  </script>
  
  {#if $selectedLocation}
    <section>
      <img src={$selectedLocation.banner_img} alt="Location Image" />
      <h2>{$selectedLocation.name}</h2>
      <img src={$selectedLocation.logo_img} alt="Location Logo" />
      <p>{$selectedLocation.description}</p>
    </section> 
  {:else}
    <p>Select a location to view details.</p>
  {/if}
  
  <style>
    section {
      padding: 1rem;
      border: 1px solid black;
    }
  
    img {
      max-width: 100%;
    }
  
    h2 {
      margin-top: 0.5rem;
    }
  </style>
  