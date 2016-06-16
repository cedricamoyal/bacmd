var app = app || {};

var updateTable = function(flights) {
  $("#myFlightTable>tbody>tr").remove();
  _.each(flights, function(flight) {
    var tr = $("<tr>");
    tr.append($("<td>").text(flight.flightDate));
    a = $("<a>").attr("href", "#flight/" + flight.number);
    a.text(flight.number);
    td = $("<td>").html(a);
    tr.append(td);
    tr.append($("<td>").text(flight.origin + " > " + flight.destination))
    tr.append($("<td>").text(flight.plane.rows * flight.plane.columns))

    $('#myFlightTable>tbody').append(tr);
  });
}

 app.SearchView = Backbone.View.extend({

  events:{

    'keyup #from': 'filterFlights',
    'keyup #to': 'filterFlights'

  },

    filterFlights: function() {
      app.results = _.filter(app.flights, function(flight){
        return flight.origin.startsWith($("#from").val()) && flight.destination.startsWith($("#to").val());
      });

      updateTable(app.results);
    },


  el: "#main", //referere an existing element with the id of main

  render: function() {
    console.log ("App view should be rendered now this is the search view")
    var appViewTemplate = $("#searchViewTemplate").html();
    //set the html of the element with the id of main to be that appViewTemplate, make sure to use the keyword 'this'
    var flights = new app.Flights();
    flights.fetch().done(function(flights) {
      app.flights = flights;
      updateTable(flights);
    });
    flights.on("change", function(flight) {
      console.log("should update table");

    });
    console.log("rendered");
    this.$el.html(appViewTemplate)
}
});
