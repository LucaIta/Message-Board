import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(question) {
      var params = {
        author: this.get('editedAuthor') ? this.get('editedAuthor') : null,
        question: this.get('newQuestion') ? this.get('newQuestion') : null,
        additionalNotes: this.get('additionalNotes') ? this.get('additionalNotes') : null
      };
      this.sendAction('edit', params, question);
    }
  }
});
