import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : null,
        answer: this.get('answer') ? this.get('answer') : null,
        question: this.get('question'),
        votes: 0
      };
      this.sendAction('save', params);
    }
  }
});
