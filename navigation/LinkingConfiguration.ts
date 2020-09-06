import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TimerButtons: {
            screens: {
              TimerButtonScreen: 'One',
            },
          },
          Timer: {
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
