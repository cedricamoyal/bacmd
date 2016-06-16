var app = app || {}


app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'searchflight',
    "flight/:id" : 'flightReserve'
  },

  // index: function (){
  //   console.log("Empty client-side URL, index method ran");
  //   var appView = new app.AppView();
  //   appView.render();
  // },

  searchflight: function () {
    var searchView = new app.SearchView();
    searchView.render();

  },

  flightReserve: function(flightNumber) {
    var flightReserveView = new app.FlightReserveView();
    flightReserveView.render(flightNumber);


  }
});
