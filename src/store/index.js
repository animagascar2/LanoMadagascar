import Reex from './reex';
import circuit from './circuit';
import admin from './admin';
import user from './user';

export default Reex.store({
  modules: {
    circuit,
    admin,
    user
  },
});
