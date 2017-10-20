import faker from 'faker';

const generateGames = (n = 1) =>
  Array(n)
    .fill()
    .map(() => ({
      title: faker.commerce.productName(),
      heroImage: `${faker.image.animals()}?foo=${Math.random()}`,
      gridImage: `${faker.image.animals()}?foo=${Math.random()}`,
      internalLink: '',

      // currentGame only
      description: faker.lorem.paragraph(),
      externalLink: '',
      contentRating: '',
      ratings: 300,
      reviews: 50,
      ratingAverage: 4.4,
      myRating: 3,
      reviews: [
        /* Review only first 3 paginate */
      ],
    }));

const initialState = {
  user: {},
  games: {
    search: generateGames(4),
    xr: generateGames(4),
    top: generateGames(4),
    choice: generateGames(4),
    latest: generateGames(4),
  },
};

console.log(initialState.games.choice[0]);

export default initialState;
