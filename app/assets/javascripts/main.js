app.flights = new app.Flights();

app.reservations = new app.Reservations();


 // var secretsCollection = new app.Secrets();

$(document).ready(function() {



      app.router = new app.AppRouter();
      Backbone.history.start();

      // app.reservations.fetch();
      //
      // window.setInterval(function(){
      //   app.reservations.fetch();
      // }, 3000);


           })
// flights.fetch()
