import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : null,
        answer: this.get('answer') ? this.get('answer') : null,
        question: this.get('question'),
        votes: 0,
        date: moment().format('MMMM Do YYYY, h:mm a')
      };
      this.sendAction('save', params);
    }
  }
});
