import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var lat = params.lat;
    var lon = params.lon;

    return $.ajax(`http://polar-forest-5121.herokuapp.com/${lat},${lon}`);
  }
});
