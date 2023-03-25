import { writable } from 'svelte/store';

export const navlinks = writable([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Opportunities', url: '/opportunities' },
]);