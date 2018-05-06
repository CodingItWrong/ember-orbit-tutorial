import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataCoordinator: service(),

  beforeModel() {
    const coordinator = this.dataCoordinator;
    const backup = coordinator.getSource('backup');

    return backup.pull(q => q.findRecords())
        .then(transform => this.store.sync(transform))
        .then(() => coordinator.activate());
  },
});
