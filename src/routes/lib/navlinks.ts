import { writable } from 'svelte/store';

export const navlinks = writable([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'Opportunities', url: '/opportunities' },
    { name: 'Worries', url: '/worries' },
    { name: 'Gallery', url: '/gallery' },
]);