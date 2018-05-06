import { SyncStrategy } from '@orbit/coordinator';

export default {
  create() {
    return new SyncStrategy({
      source: 'store',
      target: 'backup',
      blocking: true
    });
  }
};
