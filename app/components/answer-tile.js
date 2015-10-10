import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
  actions: {
    upvoteAnswer(answer) {
      var theScore = answer.get('score');
      theScore++;
      var params = {
        score: theScore,
      };
      //Set the params to score:
      Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            answer.set(key,params[key]);
          }
        });
        answer.save();
    },
    downvoteAnswer(answer) {
      var theScore = answer.get('score');
      theScore--;
      var params = {
        score: theScore,
      };
      //Set the params to score:
      Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            answer.set(key,params[key]);
          }
        });
      answer.save();
    }
  }
});
