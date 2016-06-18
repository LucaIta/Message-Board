import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    tagQuestion(question,tag){
      this.sendAction('tagQuestion', question, tag);
    }
  }
});
