<script>
    import { selectedLocation } from '../stores/locationStore.js';
    import 'animate.css';

  </script>
  
  {#if $selectedLocation}
    <section
      class="animate__animated animate__fadeIn"
    >
    <img src={$selectedLocation.banner_img} alt="Location Image" />
    <div class="name-logo">
      <img src={$selectedLocation.logo_img} 
      alt="Location Logo" 
      />
      <h2 class="name">{$selectedLocation.name}</h2>
    </div>

      <p>{$selectedLocation.description}</p>
    </section> 
  {:else}
    <p>Select a location to view details.</p>
  {/if}
  
  <style>
    section {
      padding: 1rem;
    }

    .name-logo{
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    .name{
      display: flex;
      justify-content: center;
      padding: 5px;
    }
  
    img {
      max-width: 100%;
    }
  
    h2 {
      margin-top: 0.5rem;
    }
  </style>
  