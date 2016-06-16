var app = app || {};

app.Planes = Backbone.Collection.extend({
 url: "/planes",
 model: app.Plane,

 initizlize: function(){
   console.log("A new plane collection");
   this.on("add", function(plane){
     console.log( "plane was added " + plane);
     var planeView = new app.planeView({
       model: plane
     });
    //  flightView.render()
   })
 }
})
