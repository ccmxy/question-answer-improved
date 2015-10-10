import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
    return this.store.findRecord('answer', params.answer_id);
  },
  actions: {
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        return question.save();
      });
     //this.transitionTo(('/:question_id', params.question);
    },
    upvoteAnswer(params){
      debugger;

      // var question = params.question;
      // var answer = params.answer;
      // debugger;
      var theAnswer = this.store.findRecord('answer', params.answer.id);
      var yourAnswer = this.store.findRecord('answer', params.answer_id);

      var theQuestion = this.store.findRecord('question', params.params.id);

      theAnswer.score += 1;
      theAnswer.save().then(function(){
        return question.save();
      });
    //  var upAnswer = this.store.findRecord('answer', params);

  },
    downvoteAnswer(answer){
      answer.score -= 1;
    }
  }

});
