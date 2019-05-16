import { readable } from 'svelte/store';

export const items = readable([
    {
        id: "kang",
        name: "Kangaroo",
        text: "It jumps",
        href: "https://en.wikipedia.org/wiki/Kangaroo"
    },
    {
        id: "plat",
        name: "Platypus",
        text: "It swims",
        href: "https://en.wikipedia.org/wiki/platypus"
    },
    {
        id: "kook",
        name: "Kookaburra",
        text: "It flies",
        href: "https://en.wikipedia.org/wiki/kookaburra"
    }
]);
