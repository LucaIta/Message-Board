import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  additionalNotes: DS.attr(),
  date: DS.attr(),
});
