import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['votes:desc'],
  sortedAnswer: Ember.computed.sort('answers', 'sortBy'),

  actions: {
    upvote(answer){
      this.sendAction('upvote', answer)
    }
  }
});
