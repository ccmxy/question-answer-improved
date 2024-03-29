import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ask');
  this.route('question', {path: '/question/:question_id'});
  this.route('comment', {});
});

export default Router;
