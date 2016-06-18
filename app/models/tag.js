import DS from 'ember-data';

export default DS.Model.extend({
  tagName: DS.attr(),
  questions: DS.hasMany('question', {async:true})
});
