import JSONAPISource from '@orbit/jsonapi';
import Orbit from '@orbit/data';

export default {
  create(injections = {}) {
    injections.name = 'remote';
    injections.host = 'http://localhost:3000';

    return new JSONAPISource(injections);
  }
};
