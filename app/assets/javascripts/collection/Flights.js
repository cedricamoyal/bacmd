var app = app || {};

app.Flights = Backbone.Collection.extend({
 url: "/flights",
 model: app.Flight,

 initizlize: function(){
   console.log("A new flight collection");
   this.on("add", function(flight){
     console.log( "flight was added " + flight);
     var flightView = new app.flightView({
       model: flight
     });
    //  flightView.render()
   })
 }
})
