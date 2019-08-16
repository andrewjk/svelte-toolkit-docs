import { readable } from 'svelte/store';

// Text from Wikipedia
export const items = readable([
    {
        id: 0,
        name: "Kangaroo",
        text: "The kangaroo is a marsupial from the family Macropodidae (macropods, meaning \"large foot\"). In common use the term is used to describe the largest species from this family, especially those of the genus Macropus: the red kangaroo, antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo. Kangaroos are indigenous to Australia. The Australian government estimates that 34.3 million kangaroos lived within the commercial harvest areas of Australia in 2011, up from 25.1 million one year earlier.",
        href: "https://en.wikipedia.org/wiki/Kangaroo"
    },
    {
        id: 1,
        name: "Platypus",
        text: "The platypus (Ornithorhynchus anatinus), sometimes referred to as the duck-billed platypus, is a semiaquatic egg-laying mammal endemic to eastern Australia, including Tasmania. The platypus is the sole living representative of its family (Ornithorhynchidae) and genus (Ornithorhynchus), though a number of related species appear in the fossil record. Together with the four species of echidna, it is one of the five extant species of monotremes, the only mammals that lay eggs instead of giving birth to live young. Like other monotremes it senses prey through electrolocation. It is one of the few species of venomous mammals, as the male platypus has a spur on the hind foot that delivers a venom capable of causing severe pain to humans.",
        href: "https://en.wikipedia.org/wiki/platypus"
    },
    {
        id: 2,
        name: "Kookaburra",
        text: "Kookaburras are terrestrial tree kingfishers of the genus Dacelo native to Australia and New Guinea, which grow to between 28–42 cm (11–17 in) in length. The name is a loanword from Wiradjuri guuguubarra, onomatopoeic of its call.\nThey are found in habitats ranging from humid forest to arid savanna, as well as in suburban areas with tall trees or near running water. Even though they belong to the larger group known as \"kingfishers\", kookaburras are not closely associated with water.",
        href: "https://en.wikipedia.org/wiki/kookaburra"
    },
    {
        id: 3,
        name: "Echidna",
        text: "Echidnas, sometimes known as spiny anteaters, belong to the family Tachyglossidae in the monotreme order of egg-laying mammals. The four extant species of Echidnas and the platypus are the only living mammals that lay eggs and the only surviving members of the order Monotremata. The diet of some species consists of ants and termites, but they are not closely related to the true anteaters of the Americas, which are xenarthrans, along with sloths and armadillos. Echidnas live in Australia and New Guinea.",
        href: "https://en.wikipedia.org/wiki/Echidna"
    },
    {
        id: 4,
        name: "Goanna",
        text: "Goanna refers to some species of the genus Varanus found in Australia and Southeast Asia. Around 80 species of Varanus are known, 25 of which are found in Australia. This varied group of carnivorous reptiles ranges greatly in size and fills several ecological niches. Being predatory lizards, goannas are often quite large, or at least bulky, with sharp teeth and claws. The largest is the perentie (V. giganteus), which can grow over 2.5 m (8.2 ft) in length. The goanna features prominently in Aboriginal mythology and Australian folklore.",
        href: "https://en.wikipedia.org/wiki/Goanna"
    }
]);
