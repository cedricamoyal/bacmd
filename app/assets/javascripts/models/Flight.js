var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",
  default: {
    number: "",
    origin: "",
    destination: "",
    data:"",
    plane:""
  },
  initialize: function() {
    console.log("a new flight was create")
  }
})
