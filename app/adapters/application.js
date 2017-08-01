import DS from 'ember-data';
import Ember from 'ember';

const { String: { pluralize, underscore } } = Ember;
const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
