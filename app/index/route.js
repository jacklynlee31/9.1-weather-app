import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.redirectLocalWeather();
  },

  redirectLocalWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.transitionTo('weather', position.coords.latitude, position.coords.longitude);
    });
  },

  actions: {
    submit: function() {
      this.redirectLocalWeather();
    }
  }
});

// geolocation information and http://guides.emberjs.com/v1.10.0/routing/redirection/
// 'before the model is known' information
