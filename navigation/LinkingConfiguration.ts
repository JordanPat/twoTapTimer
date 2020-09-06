import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TimerButtonScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TimerDisplayScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
