export let initialDb = {
  selected: "users",
  tables: {
    users: [
      { id: 1, name: "Bob", age: 24 },
      { id: 2, name: "Alice", age: 28 },
      { id: 3, name: "Jane", age: 30 },
    ],
    books: [
      { id: 1, title: "The Lord of the Rings" },
      { id: 2, title: "Liar's Poker" },
    ],
  },
};
