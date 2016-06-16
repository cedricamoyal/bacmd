var app = app || {};

app.Reservations = Backbone.Collection.extend({
 url: "/reservations",
 model: app.Reservation,

 initizlize: function(){
   console.log("A new reservation collection");
   this.on("add", function(reservation){
     console.log( "reservation was added " + reservation);
    //  var reservationView = new app.reservationView({
    //    model: reservation
    //  });
    //  flightView.render()
   })
 }
})

//
// var app = app || {};
//
// app.Planes = Backbone.Collection.extend({
//  url: "/planes",
//  model: app.Plane,
//
//  initizlize: function(){
//    console.log("A new plane collection");
//    this.on("add", function(plane){
//      console.log( "plane was added " + plane);
//      var planeView = new app.planeView({
//        model: plane
//      });
//     //  flightView.render()
//    })
//  }
// })
