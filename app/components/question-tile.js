import Ember from 'ember';

export default Ember.Component.extend({
  favouriteQuestions: Ember.inject.service(),

  actions: {
    addToFavourites(question) {
      this.get('favouriteQuestions').add(question);
      console.log("added 1");
    }
  }
});
