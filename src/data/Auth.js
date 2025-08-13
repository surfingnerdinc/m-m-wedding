import hotels from './Hotel';

const guests = [
    // ARTE
    {
        id: 1, 
        name: "Tomaszewski",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[2],
        room: 'Pokój 3-osobowy + dostawaka',
        maps: 'link do mapy'
    }, 
    {
        id: 2, 
        name: "Wilgowicz",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[2],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    }, 
    {
        id: 3, 
        name: "Szeruga",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[2],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    }, 
    {
        id: 4, 
        name: "Nolka",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[2],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    }, 
    {
        id: 5, 
        name: "Majchrzycki",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[2],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    }, 
    {
        id: 6,
        name: "Grobelny",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[2],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    },
     // Ambrozja 1
    {
        id: 7,
        name: "Jaroszyk",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[0],
        room: 'Pokój 3-osobowy + Pokój 1-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 8,
        name: "Skotarczyk",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[0],
        room: 'Pokój 3-osobowy + Pokój 2-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 9,
        name: "Bartkowiak",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[0],
        room: 'Pokój 3-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 10,
        name: "Roszyk",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[0],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 11,
        name: "Dominiak",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[0],
        room: 'Pokój 4-osobowy wraz z siostrą.',
        maps: 'link do mapy'
    },
    {
        id: 12,
        name: "Matuszak",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[0],
        room: 'Pokój 4-osobowy wraz z siostrą.',
        maps: 'link do mapy'
    },
    // Ambrozja 2
    /**
     *  Ania i Staszek
     *  Taraszczuk 
     *  Podobiński
     *  Masełka 
     *  Dudek
     *  Figiel
     *  Grocholewscy 
     *  Kusiak
     *  Kielan
     */
    {
        id: 13,
        name: "Hebda",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 3-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 14,
        name: "Taraszczuk",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 15,
        name: "Podobiński",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 16,
        name: "Masełko",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 2-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 17,
        name: "Dudek",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 3-osobowy',
        maps: 'link do mapy'
    },
    {
        id: 18,
        name: "Figiel",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 3-osobowy',
        maps: 'link do mapy'
    },
     {
        id: 19,
        name: "Grocholewski",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 3-osobowy',
        maps: 'link do mapy'
    },
     {
        id: 20,
        name: "Kielan",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 4-osobowy',
        maps: 'link do mapy'
    },
     {
        id: 21,
        name: "Kusiak",
        access: ['transport', 'nocleg', 'dresscode', 'sniadanie' ],
        nocleg: hotels[1],
        room: 'Pokój 4-osobowy',
        maps: 'link do mapy'
    },
]

export default guests;