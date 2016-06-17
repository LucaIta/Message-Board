import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : null,
        question: this.get('question') ? this.get('question') : null,
        additionalNotes: this.get('additionalNotes') ? this.get('additionalNotes') : null,
        date: moment().format('MMMM Do YYYY, h:mm a')
      };
      this.sendAction('save', params);
    }
  }
});
