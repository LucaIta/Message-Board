import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('question');
  },
  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    saveTag(params){
      var tag = this.store.createRecord('tag', params);
      tag.save();
    }
  }
});
