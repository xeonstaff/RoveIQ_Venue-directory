import { writable } from 'svelte/store';

export const selectedLocation = writable(null);
export const locations = writable([]);
