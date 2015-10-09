import DS from 'ember-data';

export default DS.Model.extend({
   theAnswer: DS.attr(),
   score: DS.attr(),
   question: DS.belongsTo('question', {async: true})
});