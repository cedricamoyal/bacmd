var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",
  default: {
    user_id: "",
    flight_id : "",
    columns: "",
    rows: "",
  },
  initialize: function() {
    console.log("a new reservation was create")
  }
})
