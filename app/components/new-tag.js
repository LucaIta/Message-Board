import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTag() {
      var params = {
        tagName : this.get('tag') ? this.get('tag') : null,
        questions: [],
      };
      console.log("I'm right before sending the action");
      this.sendAction('saveTag', params);
    }
  }
});
