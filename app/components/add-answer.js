import Ember from 'ember';

export default Ember.Component.extend({
  //addNewQuestion: false,
  actions: {
    answerFormShow() {
      this.set('addAnswer', true);
    },

    save1() {
      debugger;
      var params = {
        question: this.get('question'),
        theAnswer: this.get('answer'),
        score: 0,
      };
      this.set('addAnswer', false),
      this.sendAction('save2', params);
    }
  }
});
