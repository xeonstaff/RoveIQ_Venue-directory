<script>
    import { onMount } from 'svelte';
  
    let ads = ['ad1.jpg', 'ad2.jpg', 'ad3.jpg'];
    let currentAdIndex = 0;
  
    onMount(() => {
      const interval = setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % ads.length;
      }, 10000);
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="slideshow">
    <img src={ads[currentAdIndex]} alt="Ad" />
  </div>
  
  <style>
    .slideshow {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    img {
      max-width: 100%;
      max-height: 100%;
    }
  </style>
  