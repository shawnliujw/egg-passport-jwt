import 'egg';
import Passport from 'passport-jwt';

declare module 'egg' {
  interface EggAppConfig {
    passportJwt: {
      secret: string;
      enable: true | false;
      ignore?: Array<string>;
    };
  }

  interface Application {
    passport: Passport
  }
}
