import IndexedDBSource from '@orbit/indexeddb';

export default {
  create(injections = {}) {
    injections.name = 'backup';
    injections.namespace = 'messages';
    return new IndexedDBSource(injections);
  }
};
