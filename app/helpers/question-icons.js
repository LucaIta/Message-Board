import Ember from 'ember';

export function questionIcons(params) {
  var question = params[0];
  if (question.get('answers').get('length') > 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  } else if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span>') ;
  }
}

export default Ember.Helper.helper(questionIcons);
