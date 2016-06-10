import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      console.log(question);
      this.sendAction('delete', question);
    }
  }
});
