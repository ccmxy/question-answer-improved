import DS from 'ember-data';

export default DS.Model.extend({
   theAnswer: DS.attr(),
   score: DS.attr('number'),
   question: DS.belongsTo('question', {async: true})
});
