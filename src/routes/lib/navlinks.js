import { writable } from 'svelte/store';

export const navlinks = writable([
    { name: 'Home', url: '/' },
    { name: 'Page 2', url: '/p2' },
    { name: 'Page 3', url: '/p3' },
]);