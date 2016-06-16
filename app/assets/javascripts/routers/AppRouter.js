var app = app || {}


app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'searchflight',
    "flight/:id" : 'flightReserve'
  },



  searchflight: function () {
    var searchView = new app.SearchView();
    searchView.render();

  },

  flightReserve: function(flightNumber) {
    var flightReserveView = new app.FlightReserveView();
    flightReserveView.render(flightNumber);


  }
});
