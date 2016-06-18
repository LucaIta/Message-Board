import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      tags: this.store.findAll('tag')
    });
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
  },
    edit(params, question){
      Object.keys(params).forEach(function(key){
        if (params[key] !== null) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    upvote(answer){
      answer.set('votes', answer.get('votes') + 1);
      answer.save();
    },
    tagQuestion(question,tag){
      question.set('tag', tag);
      question.save();
      tag.get('questions').addObject(question);
      tag.save();
    }
  }
});
