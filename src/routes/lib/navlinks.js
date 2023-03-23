import { writable } from 'svelte/store';

export const navlinks = writable([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'Page 3', url: '/p3' },
]);