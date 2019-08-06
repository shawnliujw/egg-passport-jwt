'use strict';

module.exports = () => {
  return async function checkToken(ctx, next) {
    const { app } = ctx;
    const jwt = app.passport.authenticate('jwt', {session: false, successReturnToOrRedirect: undefined});
    return jwt(ctx, next);
  };
};
