import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : null,
        question: this.get('question') ? this.get('question') : null,
        additionalNotes: this.get('additionalNotes') ? this.get('additionalNotes') : null
      };
      this.sendAction('save', params);
    }
  }
});
