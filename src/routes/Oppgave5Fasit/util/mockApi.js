const characters = require('../data.json');

export default function mockApi() {
  return new Promise((
      resolve,
      reject
  ) => {
    setTimeout(() => resolve(characters), 2000)
  });
}
