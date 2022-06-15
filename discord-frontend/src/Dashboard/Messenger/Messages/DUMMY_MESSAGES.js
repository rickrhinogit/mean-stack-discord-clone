const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: "hello",
    sameAuthor: false,
    author: {
        username: "RickTest1",
    },
    date: "01/22/2022",
    sameDay: false,
  },
  {
    _id: 2,
    content: "hello once again",
    sameAuthor: true,
    author: {
        username: "RickTest1",
    },
    date: "01/22/2022",
    sameDay: true,
  },
  {
    _id: 3,
    content: "hello thrice",
    sameAuthor: true,
    author: {
        username: "RickTest1",
    },
    date: "01/23/2022",
    sameDay: false,
  },
  {
    _id: 4,
    content: "hello response first time",
    sameAuthor: false,
    author: {
        username: "RickTest2",
    },
    date: "01/23/2022",
    sameDay: true,
  },
  {
    _id: 5,
    content: "hello response third time",
    sameAuthor: false,
    author: {
        username: "RickTest2",
    },
    date: "01/24/2022",
    sameDay: false,
  },
];

export default DUMMY_MESSAGES;
