import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addMessage(e) {
      e.preventDefault();
      this.store.addRecord({ type: 'message', text: this.newMessage });
      this.set('newMessage', '');
    },
  },
});
