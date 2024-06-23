import { writable } from 'svelte/store';
import { fetchData } from '../api/fetchData';

export const selectedLocation = writable(null);
export const locations = writable([]);
export const ads = writable([]);

export async function loadLocations() {
  try {
    const locationData = await fetchData();
    locations.set(locationData.data.locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
}

export async function loadAds() {
  try {
    const adData = await fetchData();
    ads.set(adData.data.schedules);
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
}
