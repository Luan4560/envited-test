import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      primary: {
        purpleDark: string;
        purpleLight: string;
        envitedPurple: string;
        envitedPink: string;
      };
      secondary: {
        purpleOne: string;
        purpleTwo: string;
        purpleThree: string;
      };
      alert: {
        backgroundRed: string;
        foreGroundRed: string;
        backgroundGreen: string;
        foreGroundGreen: string;
      };
      neutrals: {
        darkOne: string;
        darkTwo: string;
        darkThree: string;
        darkFour: string;
        darkFive: string;
        white: string;
      };
    };
  }
}