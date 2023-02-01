export function getAutocompleteResult(query) {
  const fruits = ["strawberry", "banana", "apple", "blueberry", "orange", "grape", "pomegranate"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fruits.filter(fruit => fruit.toLowerCase().includes(query.toLowerCase())));
    }, Math.random() * 1000);
  });
}
