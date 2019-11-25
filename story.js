export const story = () => [
  {
    id: 1,
    description: "You are standing on a road.  It is a boring road.",
    nav: [{ dir: "left", id: 2 }, { dir: "right", id: 3 }]
  },
  {
    id: 2,
    description: "You are in a stupid place.  You feel very comfortable here.",
    nav: [{ dir: "down", id: 2 }]
  }
];
