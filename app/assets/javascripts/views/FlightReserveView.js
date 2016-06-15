var app = app || {};


var updateFlightInfo = function(slectedFlightInfo) {

  console.log(slectedFlightInfo)
}


app.FlightReserveView = Backbone.View.extend({




    el: "#main", //referere an existing element with the id of main

    render: function(flightNumber) {
        console.log("App view for flight reserve should be rendered now")
        var appViewTemplate = $("#flightReserveTemplate").html();
        //set the html of the element with the id of main to be that appViewTemplate, make sure to use the keyword 'this'
        var flights = new app.Flights();

        flights.fetch().done(function(flights) {
            app.flights = flights;
            slectedFlightInfo = _.filter(app.flights, function(flight) {
                return flight.number === flightNumber
            })

            updateFlightInfo(slectedFlightInfo);


        })

        this.$el.html(appViewTemplate)

    }
})



//
// app.SecretView = Backbone.View.extend({
//   tagName: 'li', //$("<li>")
//   render: function() {
//
//
// var content = this.model.get("content");
//
//     this.$el.text(content);
//     this.$el.prependTo('#secrets');
//
//   }
// })

// create_table "flights", force: :cascade do |t|
//   t.text    "number"
//   t.text    "origin"
//   t.text    "destination"
//   t.date    "flightDate"
//   t.integer "plane_id"
// end
//
// create_table "planes", force: :cascade do |t|
//   t.text    "name"
//   t.integer "rows"
//   t.integer "columns"
// end
//
// create_table "reservations", force: :cascade do |t|
//   t.integer  "user_id"
//   t.integer  "flight_id"
//   t.integer  "rows"
//   t.integer  "columns"
//   t.datetime "created_at", null: false
//   t.datetime "updated_at", null: false
//   t.text     "name"
// end
