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
    title: "Project 2",
    description: "Motion design project.",
    driveId: "1xvRDrdq1h36KchUFoxUStF5dSbbVbIh3",
    tags: ["Motion", "Design"],
  },
  {
    id: "3",
    title: "Project 3",
    description: "Motion design project.",
    driveId: "1KUJUvy8xfOEY4HoRgBvl3CaEoyRUEfJm",
    tags: ["Motion", "Design"],
  },
  {
    id: "4",
    title: "Project 4",
    description: "Motion design project.",
    driveId: "1TMHnHJhbk5ZlgTJLxdX8zKWVscp_dNch",
    tags: ["Motion", "Design"],
  },
  {
    id: "5",
    title: "Project 5",
    description: "Motion design project.",
    driveId: "1g57jrarwipgEyVvgq47-fLyGDfbGHHXa",
    tags: ["Motion", "Design"],
  },
  {
    id: "6",
    title: "Project 6",
    description: "Motion design project.",
    driveId: "12eePBAoXXFLwFIrqel0S4zrdMET1_tY5",
    tags: ["Motion", "Design"],
  },
  {
    id: "7",
    title: "Project 7",
    description: "Motion design project.",
    driveId: "1zNUovYDk6QYlET-ahTKh5GCspy1HdSWN",
    tags: ["Motion", "Design"],
  },
  {
    id: "8",
    title: "Project 8",
    description: "Motion design project.",
    driveId: "1psqzpDuLXr9D2mvBNsGajzHaKxfF2um_",
    tags: ["Motion", "Design"],
  },
  {
    id: "9",
    title: "Project 9",
    description: "Motion design project.",
    driveId: "1qE6h1YDkq7o5ETuWiEldF-STETGm-FVi",
    tags: ["Motion", "Design"],
  },
  {
    id: "10",
    title: "Project 10",
    description: "Motion design project.",
    driveId: "1Bk4qsRNzEHgbQvLe7KDwYSuErkXgIcZr",
    tags: ["Motion", "Design"],
  },
];
