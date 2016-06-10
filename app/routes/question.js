import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    save(params) {
      var answer = this.store.createRecord('answer', params);
      console.log(params);
      var question = params.question;
      question.get('answers').addObject(answer);
      answer.save().then(function() {
        return question.save();
      });
    },
    delete(question) {
      var answers_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answers_deletions).then(function() {
        return question.destroyRecord();
      });
    this.transitionTo('index');
    }
  }
});
