export type MotionWork = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string; // Optional URL for custom thumbnail
  driveId: string; // The file ID from the Google Drive Share URL
  tags: string[];
};

export const MOTION_WORK: MotionWork[] = [
  {
    id: "1",
    title: "Book Trailer - 'O Reino do Silêncio'",
    description: "Motion design project for a children's book. This was made when I was in highschool, learning After Effects.",
    driveId: "1h01lb_EKsG7oVqsnGM45g5aWbGSOceDw",
    tags: ["Motion", "Design", "School Work"],
  },
  {
    id: "2",
    title: "Charging Spot - Ad",
    description: "Small project during my highschool years. I was provided the illustrations and script.",
    driveId: "1xvRDrdq1h36KchUFoxUStF5dSbbVbIh3",
    tags: ["Motion", "Design"],
  },
  {
    id: "3",
    title: "Convento do Carmo - Promo",
    description: "While collaborating with a multimedia company called Cápsula, I was tasked with creating a promo video that would play on the opening cerimony of Convento do Carmo in Braga.",
    driveId: "1KUJUvy8xfOEY4HoRgBvl3CaEoyRUEfJm",
    tags: ["Motion", "Design"],
  },
  {
    id: "4",
    title: "Criatura - Intro",
    description: "Criatura was a school project, basically a collection of motion videos where I explored different concepts of animation.",
    driveId: "1TMHnHJhbk5ZlgTJLxdX8zKWVscp_dNch",
    tags: ["Motion", "Design"],
  },
  {
    id: "5",
    title: "Pollock - Fan Made Intro",
    description: "This was a personal project I made after watching the movie Pollock (2000).",
    driveId: "1g57jrarwipgEyVvgq47-fLyGDfbGHHXa",
    tags: ["Motion", "Design"],
  },
  {
    id: "6",
    title: "The Hangover III - Fan Made Intro",
    description: "This was a personal project I made after watching the movie The Hangover III.",
    driveId: "12eePBAoXXFLwFIrqel0S4zrdMET1_tY5",
    tags: ["Motion", "Design"],
  },
  {
    id: "7",
    title: "Typing - Promo",
    description: "In this project, I worked with an Illustrator (who was also the voice actor) to create a promotional video for an upcoming social media app.",
    driveId: "1zNUovYDk6QYlET-ahTKh5GCspy1HdSWN",
    tags: ["Motion", "Design"],
  },
  {
    id: "8",
    title: "Papillo - Ad",
    description: "University project where I had to work with a brand to create a promotional video.",
    driveId: "1psqzpDuLXr9D2mvBNsGajzHaKxfF2um_",
    tags: ["Motion", "Design"],
  },
  {
    id: "9",
    title: "CEDT - Explainer Video",
    description: "While collaborating with a multimedia company called Cápsula, I was tasked with creating an explainer video.",
    driveId: "1qE6h1YDkq7o5ETuWiEldF-STETGm-FVi",
    tags: ["Motion", "Design"],
  },
  {
    id: "10",
    title: "CEDT - Explainer Video II",
    description: "While collaborating with a multimedia company called Cápsula, I was tasked with creating an explainer video.",
    driveId: "1Bk4qsRNzEHgbQvLe7KDwYSuErkXgIcZr",
    tags: ["Motion", "Design"],
  },
];
