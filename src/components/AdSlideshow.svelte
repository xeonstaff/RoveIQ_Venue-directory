<script>
  import { onDestroy, onMount } from 'svelte';
  import { ads } from '../stores/locationStore.js';
  import { writable } from 'svelte/store';
  import 'animate.css';

  function isVideo(filename) {
    return filename?.split('.').pop() === 'mp4';
  }

  let adData = [];
  const currentAdIndex = writable(0);

  const unsubscribe = ads.subscribe(value => {
    adData = value.map(item => item?.ads[0]?.img_url);
  });

  onDestroy(() => {
    unsubscribe();
  });

  onMount(() => {
    const interval = setInterval(() => {
      currentAdIndex.update(n => (n + 1) % adData.length);
    }, 10000); 
    return () => clearInterval(interval);
  });
  
</script>

<div class="slideshow">
  {#if adData.length > 0}
    {#if $currentAdIndex !== undefined && isVideo(adData[$currentAdIndex])}
      <video autoplay muted loop
        class="animate__animated animate__fadeIn"
      >
        <source src={adData[$currentAdIndex]} type="video/mp4">
        Your browser does not support the video tag.
      </video>
    {:else}
      <img src={adData[$currentAdIndex]} alt="Ad"
      class="animate__animated animate__fadeIn"
      />
    {/if}
  {:else}
    <p>No advertisements available</p>
  {/if}
</div>

<style>
  .slideshow {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img, video {
    max-width: 100%;
    max-height: 100%;
  }

  </style>
  