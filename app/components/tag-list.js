import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTag(tag) {
      this.sendAction('deleteTag', tag)
    }
  }
});
